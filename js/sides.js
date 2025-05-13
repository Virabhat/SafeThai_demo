import { slidesPart1 } from "./data_one.js";
import { slidesPart2 } from "./data_two.js";

// รวม slides ทั้งหมด
const slides = [...slidesPart1, ...slidesPart2];

const container = document.getElementById("slideContainer");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let currentSlide = 0;
let isImg1Active = true;
let quizTimer = null;
const requiredIds = new Set(["light", "tv", "fan"]);
let clickedIds = new Set();

function showSlide(index) {
  // ล้าง element เดิม
  container.querySelectorAll(".text-overlay, .overlay, .glow-dot, .time-bar-container").forEach(el => el.remove());
  if (quizTimer) {
    clearTimeout(quizTimer);
    quizTimer = null;
  }

  const slide = slides[index];
  const currentImg = isImg1Active ? img1 : img2;
  const nextImg = isImg1Active ? img2 : img1;

  console.log(`📸 Slide ${index + 1}/${slides.length}`);
  console.log("🖼️ Image:", slide.image);

  // เปลี่ยนภาพ
  nextImg.src = slide.image;
  nextImg.classList.add("active");
  currentImg.classList.remove("active");
  isImg1Active = !isImg1Active;

  // ล้างข้อความ
  container.querySelectorAll(".text-overlay").forEach(el => el.remove());

  // แสดงข้อความแบบ delay
  if (slide.texts && slide.texts.length > 0) {
    let totalDelay = 0;

    slide.texts.forEach(({ content, delay = 1000, position, styleClass }) => {
      totalDelay += delay;

      setTimeout(() => {
        container.querySelectorAll(".text-overlay").forEach(el => el.remove());

        const textDiv = document.createElement("div");
        textDiv.className = "text-overlay";
        textDiv.innerText = content;

        textDiv.classList.add(position === "top" ? "text-top" : "text-bottom");
        if (styleClass) textDiv.classList.add(styleClass);

        container.appendChild(textDiv);
      }, totalDelay);
    });

    // ไปต่อเฉพาะ non-quiz
    if (slide.type !== "quiz") {
      setTimeout(() => {
        goToNextSlide();
      }, totalDelay + 1500);
    }
  } else {
    if (slide.type !== "quiz") {
      setTimeout(() => {
        goToNextSlide();
      }, slide.duration || 3000);
    }
  }

  // ถ้าเป็น quiz
  if (slide.type === "quiz") {
    clickedIds = new Set();
    setupQuizInteractions(slide);
    startQuizTimer(5000);
  }
}

function setupQuizInteractions(slide) {
  slide.overlays?.forEach(({ id, src, offSrc, top, left, width, offClass }) => {
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
  });

  slide.glows?.forEach(({ id, top, left }) => {
    const dot = document.createElement("div");
    dot.className = "glow-dot";
    dot.style.top = top;
    dot.style.left = left;
    dot.dataset.target = id;

    dot.addEventListener("click", () => {
      const overlay = container.querySelector(`.overlay[data-id='${id}']`);
      if (overlay) {
        if (overlay.dataset.offSrc) overlay.src = overlay.dataset.offSrc;
        if (overlay.dataset.offClass) overlay.classList.add(overlay.dataset.offClass);
      }

      tryGoToNextSlide(id);
      dot.remove();
    });

    container.appendChild(dot);
  });
}

function tryGoToNextSlide(id) {
  clickedIds.add(id);
  if ([...requiredIds].every(item => clickedIds.has(item))) {
    if (quizTimer) {
      clearTimeout(quizTimer);
      quizTimer = null;
    }
    goToNextSlide();
  }
}

function startQuizTimer(duration) {
  container.querySelectorAll(".time-bar-container").forEach(el => el.remove());

  const barContainer = document.createElement("div");
  barContainer.className = "time-bar-container";

  const barFill = document.createElement("div");
  barFill.className = "time-bar-fill";

  barContainer.appendChild(barFill);
  container.appendChild(barContainer);

  setTimeout(() => {
    barFill.style.transition = `width ${duration}ms linear`;
    barFill.style.width = "100%";
  }, 50);

  quizTimer = setTimeout(() => {
    if ([...requiredIds].every(item => clickedIds.has(item))) {
      goToNextSlide();
    } else {
      console.log("⛔ Quiz failed: skip to slide 21");
      currentSlide = 3; // ไป index 20 = slide ที่ 21
      showSlide(currentSlide);
    }
  }, duration);
}

function goToNextSlide() {
  currentSlide++;
  if (currentSlide < slides.length) {
    showSlide(currentSlide);
  } else {
    console.log("✅ All slides completed");
  }
}

showSlide(currentSlide);
