import { slides } from "./data.js";

const container = document.getElementById("slideContainer");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let currentSlide = 0;
let isImg1Active = true;

// ✅ เพิ่ม: set เก็บ id ปุ่มที่ต้องกดให้ครบ
const requiredIds = new Set(["light", "tv", "fan"]);
const clickedIds = new Set(); // ไว้เก็บ id ที่ผู้ใช้กดแล้ว

// ✅ เพิ่ม: ตรวจว่าผู้ใช้กดครบหรือยัง
function tryGoToNextSlide(id) {
  clickedIds.add(id);
  if ([...requiredIds].every((item) => clickedIds.has(item))) {
    currentSlide = 2; // ไปสไลด์ที่ 3 (index 2)
    showSlide(currentSlide);
  }
}

async function showSlide(index) {
  const slide = slides[index];
  const currentImg = isImg1Active ? img1 : img2;
  const nextImg = isImg1Active ? img2 : img1;

  nextImg.src = slide.image;
  nextImg.classList.add("active");
  currentImg.classList.remove("active");
  isImg1Active = !isImg1Active;

  container
    .querySelectorAll(".text-overlay, .overlay, .glow-dot")
    .forEach((el) => el.remove());

  if (slide.texts && slide.texts.length > 0) {
    for (const { content, delay, position } of slide.texts) {
      container.querySelectorAll(".text-overlay").forEach((el) => el.remove());

      const textDiv = document.createElement("div");
      textDiv.className = "text-overlay";
      textDiv.innerText = content;
      textDiv.classList.add(position === "top" ? "text-top" : "text-bottom");
      container.appendChild(textDiv);

      await new Promise((resolve) => setTimeout(resolve, delay || 1000));
      textDiv.style.opacity = 1;

      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }

  if (slide.overlays) {
    slide.overlays.forEach(
      ({ id, src, offSrc, top, left, width, offClass }) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "overlay";
        img.style.top = top;
        img.style.left = left;
        img.style.width = width;
        img.dataset.id = id;
        img.dataset.offSrc = offSrc;
        img.dataset.offClass = offClass;
        container.appendChild(img);
      }
    );
  }

  if (slide.glows) {
    slide.glows.forEach(({ id, top, left }) => {
      const dot = document.createElement("div");
      dot.className = "glow-dot";
      dot.style.top = top;
      dot.style.left = left;
      dot.dataset.target = id;

      dot.addEventListener("click", () => {
        const overlay = container.querySelector(`.overlay[data-id='${id}']`);
        if (overlay && overlay.dataset.offSrc) {
          overlay.src = overlay.dataset.offSrc;
          if (overlay.dataset.offClass) {
            overlay.classList.add(overlay.dataset.offClass);
          }
        }

        tryGoToNextSlide(id); // ✅ เพิ่ม: เรียกฟังก์ชันตรวจว่ากดครบหรือยัง
        dot.remove();
      });

      container.appendChild(dot);
    });
  }

  // ✅ เปลี่ยน slide อัตโนมัติ เฉพาะถ้าไม่ใช่ quiz ที่ต้องรอ
  if (index !== 1) {
    setTimeout(() => {
      currentSlide++;
      if (currentSlide < slides.length) {
        showSlide(currentSlide);
      }
    }, slide.duration || 2000);
  }
}

showSlide(currentSlide);
