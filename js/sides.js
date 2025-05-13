import { slidesPart1 } from "./data_one.js";
import { slidesPart2 } from "./data_two.js";

const slides = [...slidesPart1, ...slidesPart2]; 


const container = document.getElementById("slideContainer");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let currentSlide = 0;
let isImg1Active = true;

function showSlide(index) {
  const slide = slides[index];
  const currentImg = isImg1Active ? img1 : img2;
  const nextImg = isImg1Active ? img2 : img1;

  // ✅ เปลี่ยนภาพ
  nextImg.src = slide.image;
  nextImg.classList.add("active");
  currentImg.classList.remove("active");
  isImg1Active = !isImg1Active;

  // ✅ ล้างข้อความเก่า
  container.querySelectorAll(".text-overlay").forEach(el => el.remove());

  // ✅ แสดงข้อความทีละอันแบบไม่ซ้อน
  if (slide.texts && slide.texts.length > 0) {
    console.log("🎯 slide.texts: ", slide.texts);

    let totalDelay = 0;

    slide.texts.forEach(({ content, delay = 1000, position }) => {
      totalDelay += delay;

      console.log("📝 Showing text:", content, "in", totalDelay, "ms at", position);

      setTimeout(() => {
        // ✅ ลบข้อความเก่าก่อนแสดงใหม่
        container.querySelectorAll(".text-overlay").forEach(el => el.remove());

        const textDiv = document.createElement("div");
        textDiv.className = "text-overlay";
        textDiv.innerText = content;
        textDiv.classList.add(position === "top" ? "text-top" : "text-bottom");
        container.appendChild(textDiv);
      }, totalDelay);
    });

    // ✅ เปลี่ยนสไลด์หลังข้อความสุดท้าย + buffer
    const bufferTime = 1500;
    setTimeout(() => {
      goToNextSlide();
    }, totalDelay + bufferTime);
  } else {
    // ✅ ไม่มีข้อความ → รอ duration แล้วเปลี่ยน
    setTimeout(() => {
      goToNextSlide();
    }, slide.duration || 3000);
  }
}

function goToNextSlide() {
  currentSlide++;
  if (currentSlide < slides.length) {
    showSlide(currentSlide);
  }
}

showSlide(currentSlide);
