const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart4 = [
  {
    //0 
    //65
    type: "narration",
    image: baseUrl + "/assets/images/63.webp",
    texts: [],
  },
  {
    //1
    //66
    type: "question",
    image: baseUrl + "assets/images/64.webp",
    choices: [
      { id: "mode_one", label: "ออกไปเเปปเดียวไม่เป็นอะไร" ,nextIndex: 67 },
      { id: "mode_two", label: "กด sleep Mode" , nextIndex: 69 },
      { id: "mode_three", label: "ปิดคอมเลยดีกว่า" , nextIndex: 71 },
    ],
  },
  {
    //2
    //67
    type: "narration",
    image: baseUrl + "assets/images/78_1_1.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 68
  },
  {
    //3
    //68
    type: "narration",
    image: baseUrl + "assets/images/78_1_2.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 73
  },
  {
    //4
    //69
    type: "narration",
    image: baseUrl + "assets/images/78_2_1.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 70
  },
  {
    //5
    //70
    type: "narration",
    image: baseUrl + "assets/images/78_2_2.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 73
  },
  {
    //6
    //71
    type: "narration",
    image: baseUrl + "assets/images/78_3_1.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 72
  },
  {
    //7
    //72
    type: "narration",
    image: baseUrl + "assets/images/78_3_2.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 73
  },
  {
    //8
    //73
    type: "narration",
    image: baseUrl + "assets/images/65.webp",
    texts: [],
  },
  {
    //9
    //74
    type: "narration",
    image: baseUrl + "assets/images/65_2.webp",
    texts: [{ content: "เเอร์เย็นสบายดีนะ", delay: 1000, position: "top" }],
  },
  {
    //10
    //75
    type: "narration",
    image: baseUrl + "assets/images/66.webp",
    texts: [],
  },
  {
    //11
    //76
    type: "narration",
    image: baseUrl + "assets/images/67.webp",
    texts: [],
  },
  {
    //12
    //77
    type: "question",
    image: baseUrl + "assets/images/68.webp",
    choices: [
      { id: "air_one", label: "ปิดเเอร์เลยดีกว่า",nextIndex: 78 },
      { id: "air_two", label: "เปลี่ยนเป็น 26 องศา",nextIndex: 79 },
      { id: "air_three", label: "เอาไว้เเบบนี้เเหละ",nextIndex: 80 },
    ],
  },
  {
    //13
    //78
    type: "narration",
    image: baseUrl + "assets/images/68_1.webp",
    texts: [],
    autoNextTo: 81

  },
  {
    //14
    //79
    type: "narration",
    image: baseUrl + "assets/images/68_2.webp",
    texts: [],
    autoNextTo: 81

  },
  {
    //15
    //80
    type: "narration",
    image: baseUrl + "assets/images/68_3.webp",
    texts: [],
    autoNextTo: 81

  },
  {
    //16
    //81
    type: "narration",
    image: baseUrl + "assets/images/69.webp",
    texts: [],
  },
  {
    //17
    //82
    type: "narration",
    image: baseUrl + "assets/images/70.webp",
    texts: [],
  },
  {
    //18
    //83
    type: "narration",
    image: baseUrl + "assets/images/71.webp",
    texts: [],
  },
  {
    //19
    //84
    type: "narration",
    image: baseUrl + "assets/images/72.webp",
    texts: [],
  },
  {
    //20
    //85
    type: "question",
    image: baseUrl + "assets/images/73.webp",
    choices: [
      { id: "iron_one", label: "รีดผ้าทั้งหมดทันที",nextIndex: 86 },
      { id: "iron_two", label: "รีดเฉพาะชุดที่จะใส่",nextIndex: 87},
    ],
  },
  {
    //21
    //86
    type: "narration",
    image: baseUrl + "assets/images/73_1.webp",
    texts: [],
    autoNextTo: 88

  },
  {
    //22
    //87
    type: "narration",
    image: baseUrl + "assets/images/73_2.webp",
    texts: [],
    autoNextTo: 88

  },
  {
    //23
    //88
    type: "narration",
    image: baseUrl + "assets/images/74.webp",
    texts: [],
  },
  {
    //24
    //89
    type: "narration",
    image: baseUrl + "assets/images/75.webp",
    texts: [],
    duration: 1000

  },
  {
    //25
    //90
    type: "narration",
    image: baseUrl + "assets/images/76.webp",
    texts: [],
    duration: 1000

  },
  {
    //26
    //91
    type: "narration",
    image: baseUrl + "assets/images/77.webp",
    texts: [],
    duration: 1000

  },
  {
    //27
    //92
    type: "narration",
    image: baseUrl + "assets/images/78.webp",
    texts: [],
  },
  {
    //28
    //93
    type: "narration",
    image: baseUrl + "assets/images/79.webp",
    texts: [],
  },
  {
    //29
    //94
    type: "narration",
    image: baseUrl + "assets/images/80.webp",
    texts: [],
  },
  {
    //30
    //95
    type: "narration",
    image: baseUrl + "assets/images/81.webp",
    texts: [],
  },
  {
    //31
    //96
    type: "narration",
    image: baseUrl + "assets/images/82.webp",
    texts: [],
  },
  {
    //32
    //97
    type: "quiz",
    image: baseUrl + "assets/images/83.webp",
    overlays: [
    ],
    glows: [
      { id: "light", top: "14%", left: "43%" },
      { id: "iron", top: "62%", left: "21%" }
    ],
  },
  {
    //33
    //98
    type: "narration",
    image: baseUrl + "assets/images/84.webp",
    texts: [],
  },
  {
    //34
    //99
    type: "narration",
    image: baseUrl + "assets/images/85.webp",
    texts: [],
  },
  {
    //35
    //100
    type: "narration",
    image: baseUrl + "assets/images/86.webp",
    texts: [],
  },
  {
    //36
    //101
    type: "narration",
    image: baseUrl + "assets/images/87.webp",
    texts: [],
  },
  {
    //37
    //102
    type: "narration",
    image: baseUrl + "assets/images/88.webp",
    texts: [],
  },
];

function saveScore(score) {
  //   const oldScore = parseInt(localStorage.getItem("totalScore")) || 0;
  //   const newScore = oldScore + score;
  //   localStorage.setItem("totalScore", newScore.toString());
  //   globalScore = newScore;
}

export { slidesPart4, globalScore, saveScore };
