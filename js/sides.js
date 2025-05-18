import { slidesPart1 } from "./data_one.js";
import { slidesPart2 } from "./data_two.js";
// import { slidesPart3 } from "./data_three.js";
// import { slidesPart4 } from "./data_four.js";
// import { slidesPart5 } from "./data_five.js";

const slides = [...slidesPart1, ...slidesPart2];

const tempScores = {
  "16": 1,
  "17": 2,
  "18": 3,
  "19": 4,
  "20": 5,
  "21": 6,
  "22": 7,
  "23": 8,
  "24": 9,
  "25": 10,
  "26": 10,
  "27": 9,
  "28": 8,
  "29": 7
};

const container = document.getElementById("slideContainer");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let score = 0;


let currentSlide = 20;
let isImg1Active = true;
let quizTimer = null;
let isFinished = false;

const requiredIds = new Set(["light", "tv", "fan"]);
let clickedIds = new Set();

function showSlide(index) {
  const slide = slides[index];
  if (!slide) {
    console.error(":x: ไม่พบ slide ที่ index =", index);
    return;
  }

  document.getElementById("swiperContainer").style.display = "none";
  container
    .querySelectorAll(".text-overlay, .overlay, .glow-dot, .time-bar-container, .question-container, .intro-overlay, .form-slide")
    .forEach((el) => el.remove());
  clearTimeout(quizTimer);
  quizTimer = null;

  const currentImg = isImg1Active ? img1 : img2;
  const nextImg = isImg1Active ? img2 : img1;

  const transitionType = slide.transition || "fade";
  applyTransition(currentImg, nextImg, transitionType);

  nextImg.onload = () => {
    nextImg.classList.add("active");
    currentImg.classList.remove("active");
    isImg1Active = !isImg1Active;

    console.log(`📸 Slide ${index}: ${slide.type}`);
    console.log(`🖼️ Image URL: ${slide.image}`);
    console.log(`⏱️ Duration: ${slide.duration}`);
    console.log(`➡️ Next autoNextTo: ${slide.autoNextTo}`);
    console.log(`🎯 คะเเนนของคุณ ${score}`);
    console.log(`🔄 Transition: ${slide.transition || "default"}`);


    // ✅ ถ้าเป็นฟอร์ม
    if (slide.type === "form") {
      setTimeout(() => {
        renderFormSlide();
      }, 300);
      return;
    }

    // ✅ ถ้าเป็น intro และต้องคลิก
    if (slide.type === "intro" && slide.waitForClick) {
      const overlay = document.createElement("div");
      overlay.className = "intro-overlay";
      overlay.style.cssText =
        "position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;z-index:99";
      overlay.addEventListener("click", () => {
        overlay.remove();
        goToNextSlide();
      });
      container.appendChild(overlay);
      return;
    }

    // ✅ ถ้าเป็นคำถาม
    if (slide.type === "question") {
      renderQuestion(slide);
      return;
    }

    // ✅ ถ้าเป็น quiz
    if (slide.type === "quiz") {
      clickedIds = new Set();
      setupQuizInteractions(slide);
      startQuizTimer(slide, 5000);
      return;
    }

    // ✅ แสดงข้อความทีละตัว (Queue)
    if (slide.texts && slide.texts.length > 0) {
      let totalDelay = 0;
      container.querySelectorAll(".text-overlay").forEach((el) => el.remove());

      // ✅ แสดงข้อความทีละตัว
      slide.texts.forEach(({ content, delay = 3000, position, styleClass }, index) => {
        totalDelay += delay;
        setTimeout(() => {
          // ✅ ลบข้อความก่อนหน้า
          container.querySelectorAll(".text-overlay").forEach((el) => el.remove());

          const textDiv = document.createElement("div");
          textDiv.className = "text-overlay";
          textDiv.innerHTML = content.replace(/\n/g, "<br>");
          textDiv.classList.add(position === "top" ? "text-top" : "text-bottom");
          if (styleClass) textDiv.classList.add(styleClass);

          container.appendChild(textDiv);
        }, totalDelay);
      });

      // ✅ รอข้อความสุดท้ายก่อนย้ายไปสไลด์ถัดไป
      setTimeout(() => {
        if (["form", "question", "quiz"].includes(slide.type)) return;
        if (slide.autoNextTo !== undefined) {
          console.log(`⏭️ Jumping to autoNextTo: ${slide.autoNextTo}`);
          currentSlide = slide.autoNextTo;
          showSlide(currentSlide);
        } else {
          goToNextSlide();
        }
      }, totalDelay + 3000);
    } else {
      // ✅ ถ้าไม่มีข้อความ ให้เปลี่ยนสไลด์ตามปกติ
      setTimeout(() => {
        if (slide.autoNextTo !== undefined) {
          console.log(`⏭️ Jumping to autoNextTo: ${slide.autoNextTo}`);
          currentSlide = slide.autoNextTo;
          showSlide(currentSlide);
        } else {
          goToNextSlide();
        }
      }, slide.duration || 3000);
    }
  };
  nextImg.src = slide.image;
}

function applyTransition(currentImg, nextImg, transition) {
  currentImg.classList.remove("fade", "no-transition", "slide-left", "slide-right", "zoom", "rotate");
  nextImg.classList.remove("fade", "no-transition", "slide-left", "slide-right", "zoom", "rotate");

  if (transition === "no-transition") {
    nextImg.classList.add("no-transition");
  }
  else if (!transition || transition === "fade") {
    nextImg.classList.add("fade");
  }
  else {
    nextImg.classList.add(transition);
  }
}


function renderFormSlide() {
  const slide = slides[currentSlide]; // ดึงข้อมูล slide ปัจจุบัน
  const formWrapper = document.createElement("div");
  formWrapper.className = "form-slide";
  formWrapper.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;z-index:100";

  let formContent = "";

  // ✅ เงื่อนไข: ฟอร์มเลือกอุณหภูมิ
  if (slide.formType === "temperature") {
    const options = Array.from({ length: 14 }, (_, i) => 16 + i)
      .map(temp => `<option value="${temp}">${temp}°C</option>`)
      .join("");

    formContent = `
      <div style="margin-bottom: 20px;">
        <label for="tempSelect" style="font-weight: bold;">เลือกอุณหภูมิแอร์:</label><br/>
        <select id="tempSelect" style="margin-top: 8px; padding: 8px; width: 200px;">
          ${options}
        </select>
      </div>
    `;
  }
  // ✅ default → ฟอร์มชื่อ
  else {
    formContent = `
      <div style="margin-bottom: 20px;">
        <img src="assets/images_form/one.png" alt="logo_one" style="width: 180px; margin-bottom: 10px;" />
        <img src="assets/images_form/two.png" alt="logo_two" style="width: 180px; margin-bottom: 20px;" />

        <div style="margin-bottom: 24px;">
          <img src="assets/images_form/four.png" alt="logo_four" style="width: 80px;" />
          <img src="assets/images_form/three.png" alt="logo_three" style="width: 80px;" />
        </div>

        <div style="margin-top: 20px; font-size: 24px; font-weight: bold;">ชื่อ</div>
        <div style="font-size: 10px; color: #444; margin-bottom: 6px;">
          (กรุณากรอกชื่อเป็นภาษาอังกฤษ ห้ามเว้นวรรค หรือใส่สัญลักษณ์)
        </div>
        <input  id="userName" type="text" placeholder="ชื่อของคุณ" style="padding: 12px; font-size: 18px; width: 250px; border-radius: 8px; border: 2px solid #800080; font-family: 'Mitr'; text-align: center;" />
        <br><br>
    `;
  }

  // ✅ รวมฟอร์ม + ปุ่ม
  formWrapper.innerHTML = `
  <div style="
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 32px 24px;
    border-radius: 16px;
    text-align: center;
    font-family: 'Mitr', Arial, sans-serif;
  ">
    ${formContent}
    <button id="submitFormBtn" style="
      margin-top: 16px;
      padding: 12px 32px;
      background-color: #800080;
      color: white;
      font-family: 'Mitr', Arial, sans-serif;
      font-size: 18px;
      font-weight: regular;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    ">ถัดไป</button>
  </div>
`;


  container.appendChild(formWrapper);

  document.getElementById("submitFormBtn").addEventListener("click", () => {

    if (slide.formType !== "temperature") {
      const userName = document.getElementById("userName").value.trim();
      if (userName === "") {
        ร
        alert("กรุณากรอกชื่อของคุณ");
        return; // ❌ หยุดไม่ให้ไปต่อ
      }
    }

    if (slide.formType === "temperature") {
      const temp = document.getElementById("tempSelect").value;
      localStorage.setItem("selectedTemp", temp);
      console.log(`🌡️ เลือกอุณหภูมิ: ${temp}°C`);

      const tempScore = tempScores[temp] ?? 0; // ถ้าไม่มีใน object จะได้ 0 คะแนน
      score += tempScore;

      if (tempScore > 0) {
        console.log(`✅ ได้ ${tempScore} คะแนนจากอุณหภูมิ ${temp}°C`);
      } else if (tempScore < 0) {
        console.log(`⚠️ เสีย ${Math.abs(tempScore)} คะแนนจากอุณหภูมิ ${temp}°C`);
      } else {
        console.log("ℹ️ 0 คะแนน อุณหภูมิปานกลาง");
      }
    }
    formWrapper.remove();
    goToNextSlide();
  });

}



function renderQuestion(slide) {
  const wrapper = document.createElement("div");
  wrapper.className = "question-container";

  const selectedChoices = [];

  const scoreMap = {
    light_one: -10,
    light_two: -5,
    light_three: 15,
    home: -5,
    here: -10,
    mode_one: -10,
    mode_two: -4,
    mode_three: 10,
    air_one: 8,
    air_two: 0,
    air_three: -5,
    iron_one: 5,
    iron_two: -5,
    type_one: -8,
    type_two: 0,
    zero: -5,
    one: 10,
    two: 8,
    three: 5,
    efficiency: 5,
    btu: 10,
    recycle: 12
  };

  const isSingleChoice = slide.choices.every(choice => typeof choice.nextIndex === "number");

  if (slide.texts && slide.texts.length > 0) {
    slide.texts.forEach(({ content, delay = 2000, position, styleClass }) => {
      const textDiv = document.createElement("div");
      textDiv.className = "text-overlay-question";
      textDiv.innerHTML = content.replace(/\n/g, "<br>"); // ✅ รองรับ \n เป็น <br>

      // ✅ จัดตำแหน่งข้อความ
      textDiv.classList.add(position === "top" ? "text-top" : "text-bottom");
      if (styleClass) textDiv.classList.add(styleClass);

      wrapper.appendChild(textDiv);
    });
  }

  // ✅ first Choice
  if (isSingleChoice) {
    slide.choices.forEach(({ id, label, nextIndex }) => {
      const btn = document.createElement("button");
      btn.className = "choice-button-frist";
      btn.textContent = label;

      btn.addEventListener("click", () => {
        if (id in scoreMap) {
          score += scoreMap[id];
          console.log(`🎯 เลือก ${label} → ${scoreMap[id]} คะแนน`);
        }

        const scoreEl = document.getElementById("scoreDisplay");
        if (scoreEl) {
          scoreEl.innerText = `คะแนน: ${score}`;
        }

        currentSlide = nextIndex;
        showSlide(currentSlide);
      });

      wrapper.appendChild(btn);
    });

  } else {

    // ✅ Multiple Choice
    const selectedDisplay = document.createElement("div");
    selectedDisplay.className = "selected-display";

    const buttonGrid = document.createElement("div");
    buttonGrid.className = "button-grid";

    slide.choices.forEach(({ id, label }) => {
      const btn = document.createElement("button");
      btn.className = "choice-button-multiple";
      btn.textContent = label;

      btn.addEventListener("click", () => {
        if (selectedChoices.includes(label)) return;
        if (selectedChoices.length >= 4) return;

        selectedChoices.push(label);
        btn.disabled = true;
        btn.classList.add("selected");

        if (selectedChoices.length === 1 && id in scoreMap) {
          score += scoreMap[id];
          console.log(`🎯 ตัวเลือกแรก: ${label} → ${scoreMap[id]} คะแนน`);

          const scoreEl = document.getElementById("scoreDisplay");
          if (scoreEl) {
            scoreEl.innerText = `คะแนน: ${score}`;
          }
        }

        selectedDisplay.innerHTML = selectedChoices
          .map((choice, i) => `<span>${i + 1}. ${choice}</span>`)
          .join("");

        if (selectedChoices.length === 4) {
          localStorage.setItem("selectedAnswers", JSON.stringify(selectedChoices));
          setTimeout(goToNextSlide, 800);
        }
      });

      buttonGrid.appendChild(btn);
    });

    // ✅ จัดเรียง
    wrapper.appendChild(selectedDisplay);
    wrapper.appendChild(buttonGrid);

  }
  container.appendChild(wrapper);
}


function setupQuizInteractions(slide) {
  clickedIds = new Set();

  // ✅ แสดง overlay ถ้ามี
  slide.overlays?.forEach(({ id, src, top, left, width }) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "overlay";
    img.style.top = top;
    img.style.left = left;
    img.style.width = width;
    img.dataset.id = id;
    container.appendChild(img);
  });

  // ✅ แสดงจุดแดง glow-dot
  slide.glows?.forEach(({ id, top, left }) => {
    const dot = document.createElement("div");
    dot.className = "glow-dot";
    dot.style.top = top;
    dot.style.left = left;
    dot.dataset.target = id;

    dot.addEventListener("click", () => {
      const overlay = container.querySelector(`.overlay[data-id='${id}']`);

      // ✅ ซ่อน overlay ด้วย display: none
      if (overlay) {
        overlay.style.display = "none";
      }

      // ✅ ลบจุดแดงออกพร้อม fade
      dot.classList.add("fade-out");
      setTimeout(() => dot.remove(), 300); // เผื่อมี transition ค่อยลบ

      clickedIds.add(id);
      score += 10;
      console.log(`🎯 กดปิด "${id}" → ได้ 10 คะแนน, รวม: ${score}`);

      if (clickedIds.size === (slide.glows?.length || 5000)) {
        goToNextSlide();
      }
    });

    container.appendChild(dot);
  });
  startSimpleTimer(slide, slide.duration || 6000);
}


function startSimpleTimer(slide, duration) {
  setTimeout(() => {
    if (clickedIds.size < (slide.glows?.length || 0)) {
      console.log("⏰ หมดเวลา ยังไม่กดครบ → ไป failNextTo");

      if (slide.failNextTo !== undefined) {
        currentSlide = slide.failNextTo;
        showSlide(currentSlide);
        return;
      }
    }

    goToNextSlide();
  }, duration);
}



function tryGoToNextSlide(id) {
  if (!clickedIds.has(id)) {
    clickedIds.add(id);
    score += 10;
    console.log(`🎯 กดปิด "${id}" → ได้ 10 คะแนน, รวม: ${score}`);
  }
}


function startQuizTimer(slide, duration) {
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
  }, 80);


  quizTimer = setTimeout(() => {
    if ([...requiredIds].every(id => clickedIds.has(id))) {
      goToNextSlide();
    } else {
      currentSlide = slide.failNextTo ?? currentSlide;
      showSlide(currentSlide);
    }
  }, duration);
}



function goToNextSlide() {
  if (isFinished) {
    console.log("⛔ การแสดงผลหยุดลงแล้ว");
    return; 
  }

  currentSlide++;

  if (currentSlide === 134) {
    jumpByScore();
    return;
  }

  if (currentSlide < slides.length) {
    showSlide(currentSlide);
  } else {
    console.log("✅ All slides completed");
  }
}


function jumpByScore() {
  let targetSlide = null;

  if (score >= -20 && score <= 20) {
    targetSlide = 134;
  } else if (score >= 21 && score <= 40) {
    targetSlide = 135;
  } else if (score >= 41 && score <= 60) {
    targetSlide = 136;
  } else if (score >= 61 && score <= 80) {
    targetSlide = 137;
  } else if (score >= 81 && score <= 100) {
    targetSlide = 138;
  }

  if (targetSlide !== null) {
    currentSlide = targetSlide;
    isFinished = true; 
    showSlide(currentSlide);
  } else {
    console.log("❗ ไม่พบช่วงคะแนนที่ตรง");
  }
}




showSlide(currentSlide);
