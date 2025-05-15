// ไฟล์ import จาก เเต่ละหน้า 
import { slidesPart1 } from "./data_one.js";
import { slidesPart2 } from "./data_two.js";
import { slidesPart3 } from "./data_three.js";
import { slidesPart4 } from "./data_four.js";
import { slidesPart5 } from "./data_five.js";

// ปิดเฉยๆ จ้า //


// ตัวเเปร จ้า 
const slides = [...slidesPart1, ...slidesPart2, ...slidesPart3, ...slidesPart4, ...slidesPart5];

// แมปคะแนนตามอุณหภูมิ
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


let currentSlide = 25;
let isImg1Active = true;
let quizTimer = null;
let isFinished = false;

const requiredIds = new Set(["light", "tv", "fan"]);
let clickedIds = new Set();
// ปิด ตัวเเปร //

function showSlide(index) {
  const slide = slides[index];
  if (!slide) {
    console.error("❌ ไม่พบ slide ที่ index =", index);
    return;
  }

  container.querySelectorAll(
    ".text-overlay, .overlay, .glow-dot, .time-bar-container, .question-container, .intro-overlay, .form-slide"
  ).forEach(el => el.remove());

  clearTimeout(quizTimer);
  quizTimer = null;

  const currentImg = isImg1Active ? img1 : img2;
  const nextImg = isImg1Active ? img2 : img1;

  nextImg.src = slide.image;
  nextImg.classList.add("active");
  currentImg.classList.remove("active");
  isImg1Active = !isImg1Active;

  console.log(`📸 Slide ${index}: ${slide.type}`);
  console.log(`🖼️ Image URL: ${slide.image}`);
  console.log(`⏱️ Duration: ${slide.duration}`);
  console.log(`➡️ Next autoNextTo: ${slide.autoNextTo}`);
  console.log(`🎯 คะเเนนของคุณ ${score}`);


  if (slide.texts && slide.texts.length > 0) {
    slide.texts.forEach((text, i) => {
      console.log(`🗨️ Text[${i}]: "${text.content}" (delay: ${text.delay || 1000}ms)`);
    });
  }

  if (slide.type === "form") {
    renderFormSlide();
    return;
  }

  if (slide.type === "intro" && slide.waitForClick) {
    const overlay = document.createElement("div");
    overlay.className = "intro-overlay";
    overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;z-index:99";
    overlay.addEventListener("click", () => {
      overlay.remove();
      goToNextSlide();
    });
    container.appendChild(overlay);
    return;
  }

  if (slide.type === "question") {
    renderQuestion(slide);
    return;
  }

  if (slide.type === "quiz") {
    clickedIds = new Set();
    setupQuizInteractions(slide);
    startQuizTimer(slide, 5000);
    return;
  }

  if (slide.texts && slide.texts.length > 0) {
    let totalDelay = 0;
    slide.texts.forEach(({ content, delay = 2000, position, styleClass }) => {
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

    setTimeout(() => {
      if (slide.autoNextTo !== undefined) {
        console.log(`⏭️ Jumping to autoNextTo: ${slide.autoNextTo}`);
        currentSlide = slide.autoNextTo;
        showSlide(currentSlide);
      } else {
        goToNextSlide();
      }
    }, totalDelay + 2000);
  } else {
    if (slide.autoNextTo !== undefined) {
      setTimeout(() => {
        console.log(`⏭️ Jumping to autoNextTo: ${slide.autoNextTo}`);
        currentSlide = slide.autoNextTo;
        showSlide(currentSlide);
      }, slide.duration || 2000);
    } else {
      setTimeout(() => {
        goToNextSlide();
      }, slide.duration || 4000);
    }
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
        <label for="userName" style="font-weight: bold;">ชื่อของคุณ:</label><br/>
        <input id="userName" type="text" placeholder="กรอกชื่อ" style="margin-top: 6px; padding: 8px; width: 220px;" />
      </div>
    `;
  }

  // ✅ รวมฟอร์ม + ปุ่ม
  formWrapper.innerHTML = `
    <div style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.95);
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.3);
      text-align: center;
    ">
      ${formContent}
      <button id="submitFormBtn" style="
        padding: 10px 24px;
        background-color: #1976d2;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      ">ถัดไป</button>
    </div>
  `;

  container.appendChild(formWrapper);

  document.getElementById("submitFormBtn").addEventListener("click", () => {
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

  const isSingleChoice = slide.choices.every(choice => typeof choice.nextIndex === "number");

  if (isSingleChoice) {
    // ✅ แบบเลือก 1 ข้อ พร้อมให้คะแนน
    slide.choices.forEach(({ id, label, nextIndex }) => {
      const btn = document.createElement("button");
      btn.className = "choice-button";
      btn.textContent = label;

      btn.addEventListener("click", () => {
        // ✅ เงื่อนไขให้คะแนนของแต่ละกรณี
        if (id === "light_one") {
          score -= 10;
          console.log("❌ เลือก 'หลอดไส้' → -10 คะแนน");
        } else if (id === "light_two") {
          score -= 5;
          console.log("⚠️ เลือก 'ฟลูออเรสเซนต์' → -5 คะแนน");
        } else if (id === "light_three") {
          score += 15;
          console.log("✅ เลือก 'LED' → +15 คะแนน");
        } else if (id === "home") {
          score -= 5;
          console.log("🏠 สั่งกลับบ้าน → -5 คะแนน");
        } else if (id === "here") {
          score -= 10;
          console.log("🍽️ กินที่นี่ → -10 คะแนน");
        } else if (id === "mode_one"){
          score -= 10;
          console.log(" ออกไปเเปปเดียวไม่เป็นอะไร → -10 คะแนน");
        } else if (id === "mode_two"){
          score -= 4;
          console.log(" กด sleep mode → -4 คะแนน");
        } else if (id === "mode_three"){
          score += 10;
          console.log("ปิดคอมเลยดีกว่า + 10");
        } else if (id === "air_one"){
          score += 8;
          console.log("ปิดเเอร์เลยดีกว่า + 8");
        } else if (id === "air_two"){
          score += 0; 
          console.log("เปลี่ยนเป็น 20 องศา 0 คะเเนน");
        } else if (id === "air_three"){
          score -= 5;
          console.log("เอาไว้เเบบนี้เเหละ - 5 คะเเนน");
        } else if (id === "iron_one"){
          score += 5;
          console.log("รีดผ้าทั้งหมดทันที + 5 คะเเนน");
        } else if (id === "iron_two"){
          score -= 5; 
          console.log("รีดเฉพาะชุดที่จะใส่ - 5 คะเเนน");
        } else if (id === "type_one"){
          score -= 8;
          console.log("ชาร์จโปรศัทพ์ทิ้งไว้ - 8 คะเเนน")
        } else if (id === "type_two"){
          score += 0;
          console.log("ค่อยชาร์จพรุ่งนี้ 0 คะเเนน")
        } else if (id === "zero"){
          score -= 5;
          console.log("เบอร์ 0 - 5 คะเเนน");
        } else if (id === "one"){
          score += 10; 
          console.log('เบอร์ 1 + 10 คะเเนน');
        } else if (id === "two"){
          score += 8;
          console.log('เบอร์ 2 + 8 คะเเนน');
        } else if (id === "three"){
          score += 5;
          console.log('เบอร์ 3 + 5 คะเเนน');
        }

        // ✅ อัปเดตคะแนนบนจอ
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
    // ✅ แบบเลือกได้หลายข้อ + ให้คะแนนจากลำดับแรก
    const selectedChoices = [];
    const selectedDisplay = document.createElement("div");
    selectedDisplay.style.marginTop = "12px";
    selectedDisplay.style.color = "#000";
    selectedDisplay.style.fontSize = "16px";
    selectedDisplay.innerText = "เลือกได้สูงสุด 4 ตัวเลือก";

    slide.choices.forEach(({ id, label }) => {
      const btn = document.createElement("button");
      btn.className = "choice-button";
      btn.textContent = label;

      btn.addEventListener("click", () => {
        if (selectedChoices.includes(label)) return;
        if (selectedChoices.length >= 4) return;

        selectedChoices.push(label);
        btn.disabled = true;
        btn.style.opacity = 0.6;

        // ✅ ให้คะแนนตามตัวเลือกแรกเท่านั้น
        if (selectedChoices.length === 1) {
          if (id === "efficiency") {
            score += 5;
            console.log("✅ ได้ 5 คะแนนจาก 'ฉลากเบอร์ 5'");
          } else if (id === "btu") {
            score += 10;
            console.log("✅ ได้ 10 คะแนนจาก 'BTU แอร์'");
          }

          const scoreEl = document.getElementById("scoreDisplay");
          if (scoreEl) {
            scoreEl.innerText = `คะแนน: ${score}`;
          }
        }

        selectedDisplay.innerText =
          selectedChoices.map((choice, i) => `${i + 1}. ${choice}`).join("\n");

        if (selectedChoices.length === 4) {
          localStorage.setItem("selectedAnswers", JSON.stringify(selectedChoices));
          setTimeout(goToNextSlide, 800);
        }
      });

      wrapper.appendChild(btn);
    });

    wrapper.appendChild(selectedDisplay);
  }

  container.appendChild(wrapper);
}







function setupQuizInteractions(slide) {
  clickedIds = new Set();

  // ✅ แสดง overlay ถ้ามี
  slide.overlays?.forEach(({ id, src, top, left, width, offClass }) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "overlay";
    img.style.top = top;
    img.style.left = left;
    img.style.width = width;
    img.dataset.id = id;
    img.dataset.offClass = offClass;
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

     
      if (overlay && overlay.dataset.offClass) {
        // ✅ ถ้ามี overlay → ปิด overlay โดยเพิ่มคลาส
        overlay.classList.add(overlay.dataset.offClass);
      } else {
        // ✅ ถ้าไม่มี overlay → แค่ fade-out จุดแดง
        dot.classList.add("fade-out");
      }

      clickedIds.add(id);

      // ✅ ถ้ากดครบทั้งหมด
      if (clickedIds.size === (slide.glows?.length || 0)) {
        goToNextSlide();
        tryGoToNextSlide(id);

      }

      dot.remove(); // เอาจุดออกหลังจากกด

      score += 10; // ✅ เพิ่มคะแนนจุดละ 10
      console.log(`🎯 กดปิด "${id}" → ได้ 10 คะแนน, รวม: ${score}`);


    });

    container.appendChild(dot);
  });

  // ✅ ตั้งเวลาเผื่อผู้ใช้ไม่กด → ข้ามสไลด์ได้
  startSimpleTimer(slide, slide.duration || 5000);
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



// function tryGoToNextSlide(id) {
//   clickedIds.add(id);
//   if ([...requiredIds].every(item => clickedIds.has(item))) {
//     clearTimeout(quizTimer);
//     quizTimer = null;
//     goToNextSlide();
//   }
// }

function tryGoToNextSlide(id) {
  if (!clickedIds.has(id)) {
    clickedIds.add(id);
    score += 10; // ✅ เพิ่มคะแนนจุดละ 10
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

// function goToNextSlide() {
//   currentSlide++;
//   if (currentSlide < slides.length) {
//     showSlide(currentSlide);
//   } else {
//     console.log("✅ All slides completed");
//   }
// }

function goToNextSlide() {
  if (isFinished) {
    console.log("⛔ การแสดงผลหยุดลงแล้ว");
    return; // หยุด ไม่ให้ไปต่อ
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
    isFinished = true; // ✅ หยุด slide ที่หน้า score summary
    showSlide(currentSlide);
  } else {
    console.log("❗ ไม่พบช่วงคะแนนที่ตรง");
  }
}



showSlide(currentSlide);
