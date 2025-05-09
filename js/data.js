const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slides = [
  {
    type: "narration",
    image: baseUrl + "/assets/images/1.webp",
    texts: [{ content: "วันนี้อากาศร้อนมาก", delay: 1000, position: "bottom" }],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/2.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/3.webp",
    texts: [{ content: "เดือนนี้ร้อนจริง", delay: 2000, position: "top" }],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/5.webp",
    texts: [{ content: "เปิดแอร์ดีกว่า", delay: 2000, position: "top" }],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/7.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/8.webp",
    texts: [],
    duration: 1000,
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/9.webp",
    texts: [],
    duration: 1000,
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/10.webp",
    texts: [],
    duration: 1000,
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/11.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/12.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/13.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/14.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/15.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/16.webp",
    texts: [{ content: "ต้องซื้อแอร์ใหม่แล้ว", delay: 2000, position: "top" }],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/18.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/19.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/20.webp",
    texts: [
      {
        content: "คุณเจอร้านขายเเอร์ที่ห้างใกล้ๆ",
        delay: 2000,
        position: "top",
      },
    ],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/22.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/22.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/26_2.webp",
    texts: [
      { content: "เเต่...", delay: 1000, position: "bottom" },
      { content: "คุณลืมอะไรไปหรือเปล่านะ?", delay: 1000, position: "bottom" },
    ],
  },
  {
    type: "quiz",
    image: baseUrl + "assets/images/27.webp",
    duration: 8000,
    scoreMap: {
      light: 10,
      tv: 10,
      fan: 10,
    },
    overlays: [
      {
        id: "light",
        src: "assets/elements/turn-on-light.png",
        offSrc: "assets/elements/turn-off-light.png",
        top: "6%",
        left: "9%",
        width: "162px",
        offClass: "light-off-style",
      },
      {
        id: "tv",
        src: "assets/elements/tv-open.png",
        offSrc: "assets/elements/turn-off-tv.png",
        top: "41%",
        left: "-42%",
        width: "213px",
        offClass: "tv-off-style",
      },
      {
        id: "fan",
        src: "assets/elements/turn-on-fan.png",
        offSrc: "assets/elements/turn-off-fan.png",
        top: "54%",
        left: "19%",
        width: "96px",
        offClass: "fan-off-style",
      },
    ],
    glows: [
      { id: "light", top: "6%", left: "38%" },
      { id: "tv", top: "40%", left: "7%" },
      { id: "fan", top: "64%", left: "39%" },
    ],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/28.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/29.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/30.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/31.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/32.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/33.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/34.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/35.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/36.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/37.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/38.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/39.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/40.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/41.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/42.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/43.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/44.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/46.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/49.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/50.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/51.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/52.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/53.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/54.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/55.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/56.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/57.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/58.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/59.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/60.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/51.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/52.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/53.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/54.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/55.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/56.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/57.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/58.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/59.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/60.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/61.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/62.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/63.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/64.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/65.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/66.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/67.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/68.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/69.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/70.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/71.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/72.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/73.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/74.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/75.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/76.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/77.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/78_1_1.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/80.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/81.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/82.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/83.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/84.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/86.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/87_1.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/89.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/90.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/91.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/92.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/93.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/94.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/95.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/97.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/98.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/99.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/100.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/102.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/103.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/104.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/105.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/106.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/107.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/108.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/109.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/110.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/111.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/112.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/113.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/114.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/115.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/116.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/117.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/117.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/118.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/119.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/120.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/121.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/121.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/122.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/123.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/124.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/125.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/126.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/127.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/128.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/129.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/130.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/131.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/132.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/133.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/134.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/135.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/136.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/137.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/138.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/139.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/140.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/141.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/142.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/143.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/144_1.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/145.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/146.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/147.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/148.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/149.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/150.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/151.webp",
    texts: [],
  },
  {
    type: "answer",
    image: baseUrl + "assets/images/151_1.webp",
    texts: [],
  },
];

function saveScore(score) {
  const oldScore = parseInt(localStorage.getItem("totalScore")) || 0;
  const newScore = oldScore + score;
  localStorage.setItem("totalScore", newScore.toString());
  globalScore = newScore;
}

export { slides, globalScore, saveScore };
