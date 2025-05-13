const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart1  = [
//   {
//     type: "narration",
//     image: baseUrl + "/assets/images/1.webp",
//     texts: [{ content: "วันนี้อากาศร้อนมาก", delay: 1000, position: "bottom" }],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/2.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/3.webp",
//     texts: [{ content: "เดือนนี้มันร้อนจริง", delay: 2000, position: "top" }],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/4.webp",
//     texts: [{ content: "เปิดแอร์ดีกว่า", delay: 2000, position: "top" }],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/5.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/6.webp",
//     texts: [],
//     duration: 1000
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/7.webp",
//     texts: [],
//     duration: 1000
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/8.webp",
//     texts: [],
//     duration: 1000
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/9.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/10.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/11.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/12.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/13.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/14.webp",
//     texts: [{ content: "ต้องซื้อเเอร์ใหม่เเล้ว", delay: 2000, position: "top" }],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/15.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/16.webp",
//     texts: [],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/17.webp",
//     texts: [{ content: "คุณเจอร้านขายเเอร์ที่ห้างใกล้ๆ", delay: 2000, position: "top"}],
//   },
//   {
//     type: "narration",
//     image: baseUrl + "assets/images/18.webp",
//     texts: [],
//   },
  {
    type: "narration",
    image: baseUrl + "assets/images/19.webp",
    texts: [
            { content: "เเต่",
              delay: 2000,
              position: "bottom", 
              styleClass: "small-text" 
            },
            { content: "คุณลืมอะไรไปหรือเปล่านะ",
              delay: 2000,
              position: "bottom",
              styleClass: "small-text"
            },
           ],
  },
  {
    type: "quiz",
    image: baseUrl + "assets/images/19.webp",
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
  }
];

function saveScore(score) {
//   const oldScore = parseInt(localStorage.getItem("totalScore")) || 0;
//   const newScore = oldScore + score;
//   localStorage.setItem("totalScore", newScore.toString());
//   globalScore = newScore;
}

export { slidesPart1, globalScore, saveScore };
