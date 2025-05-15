const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart2 = [
  {
    //0
    //24
    type: "narration",
    image: baseUrl + "/assets/images/22.webp",
    texts: [],
  },
  {
    //1
    //25
    type: "narration",
    image: baseUrl + "/assets/images/23.webp",
    texts: [],
  },
  {
    //2
    //26
    type: "narration",
    image: baseUrl + "/assets/images/24.webp",
    texts: [],
  },
  {
    //3
    //27
    type: "narration",
    image: baseUrl + "/assets/images/25.webp",
    texts: [],
  },
  {
    //4
    //28
    type: "narration",
    image: baseUrl + "/assets/images/26.webp",
    texts: [{ content: "คุณคิดอยู่นานสุดท้ายก็ตัดสินใจเลือก...", delay: 1000, position: "top" }],
  },
  {
    //5
    //29
    type: "question",
    image: baseUrl + "assets/images/27.webp",
    choices: [
      { id: "efficiency", label: "ฉลากเบอร์ 5" },
      { id: "design", label: "ดีไซน์สวย" },
      { id: "btu", label: "BTU แอร์" },
      { id: "technology", label: "ระบบสุดล้ำ" },
    ],
  },
  {
    //6
    //30
    type: "narration",
    image: baseUrl + "/assets/images/28.webp",
    texts: [],
  },
  {
    //7
    //31
    type: "narration",
    image: baseUrl + "/assets/images/29.webp",
    texts: [],
  },
  {
    //8
    //32
    type: "narration",
    image: baseUrl + "/assets/images/30.webp",
    texts: [],
  },
  {
    //9
    //33
    type: "narration",
    image: baseUrl + "/assets/images/31.webp",
    texts: [],
  },
  {
    //10
    //34
    type: "narration",
    image: baseUrl + "/assets/images/32.webp",
    texts: [],
  },
  {
    //11
    //35
    type: "narration",
    image: baseUrl + "/assets/images/33.webp",
    texts: [],
  },
  {
    //12
    //36
    type: "question",
    image: baseUrl + "/assets/images/34.webp",
    choices: [
      { id: "light_one", label: "หลอดไส้", nextIndex: 38 },
      { id: "light_two", label: "หลอดฟลูออเรสเซนต์", nextIndex: 39 },
      { id: "light_three", label: "หลอด LED", nextIndex: 40 }
    ]
  },
  {
    //13
    //37
    type: "narration",
    image: baseUrl + "/assets/images/35.webp",
    texts: [],
  },
  {
    //14
    //38
    type: "narration",
    image: baseUrl + "/assets/images/36.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 41
  },
  {
    //15
    //39
    type: "narration",
    image: baseUrl + "/assets/images/37.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 41
  },
  {
    //16
    //40
    type: "narration",
    image: baseUrl + "/assets/images/38.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 41
  },
  {
    //17
    //41
    type: "narration",
    image: baseUrl + "/assets/images/39.webp",
    texts: [],
  },
  {
    //18
    //42
    type: "narration",
    image: baseUrl + "/assets/images/40.webp",
    texts: [],
  },
  {
    //19
    //43
    type: "narration",
    image: baseUrl + "/assets/images/41.webp",
    texts: [],
  },
  {
    //44
    type: "narration",
    image: baseUrl + "/assets/images/42.webp",
    texts: [],
  },
  {
    //45
    type: "narration",
    image: baseUrl + "/assets/images/43.webp",
    texts: [],
  },
  {
    //46
    type: "narration",
    image: baseUrl + "/assets/images/44.webp",
    texts: [],
  },
  {
    //47
    type: "narration",
    image: baseUrl + "/assets/images/45.webp",
    texts: [],
  },
];

function saveScore(score) {
  //   const oldScore = parseInt(localStorage.getItem("totalScore")) || 0;
  //   const newScore = oldScore + score;
  //   localStorage.setItem("totalScore", newScore.toString());
  //   globalScore = newScore;
}

export { slidesPart2, globalScore, saveScore };
