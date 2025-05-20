const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart4 = [
  {
    //66
    type: "narration",
    image: baseUrl + "/assets/images/63.webp",
    texts: [],
  },
  {
    //67
    type: "question",
    image: baseUrl + "assets/images/64.webp",
    choices: [
      { id: "mode_one", label: "เปิดค้างไว้เดี๋ยวก็กลับ" ,nextIndex: 69, styleClass: "text-screen-67" },
      { id: "mode_two", label: "กด Sleep Mode" , nextIndex: 71, styleClass: "text-screen-67" },
      { id: "mode_three", label: "ปิดคอมเลยดีกว่า" , nextIndex: 73, styleClass: "text-screen-67" },
    ],styleClass: "text-screen-67-type",
  },
  {
    //68
    type: "narration",
    image: baseUrl + "assets/images/78_1_1.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 69
  },
  {
    //69
    type: "narration",
    image: baseUrl + "assets/images/78_1_2.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 74
  },
  {
    //70
    type: "narration",
    image: baseUrl + "assets/images/78_2_1.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 71
  },
  {
    //71
    type: "narration",
    image: baseUrl + "assets/images/78_2_2.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 74
  },
  {
    //72
    type: "narration",
    image: baseUrl + "assets/images/78_3_1.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 73
  },
  {
    //73
    type: "narration",
    image: baseUrl + "assets/images/78_3_2.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 74
  },
  {
    //74
    type: "narration",
    image: baseUrl + "assets/images/65.webp",
    texts: [],
  },
  {
    //75
    type: "narration",
    image: baseUrl + "assets/images/65_2.webp",
    texts: [{ content: "เเอร์เย็นสบายดีนะ", delay: 1000, position: "top" }],
  },
  {
    //76
    type: "narration",
    image: baseUrl + "assets/images/66.webp",
    texts: [{ content: " ไหนดูรีโมตหน่อย ", delay: 1000, position: "top" }],
  },
  {
    //77
    type: "narration",
    image: baseUrl + "assets/images/67.webp",
  },
  {
    //78
    type: "question",
    image: baseUrl + "assets/images/68.webp",
    choices: [
      { id: "air_one", label: "ปิดเเอร์เลยดีกว่า",nextIndex: 82, styleClass: "text-screen-67" },
      { id: "air_two", label: "เปลี่ยนเป็น 26 องศา",nextIndex: 82 , styleClass: "text-screen-67" },
      { id: "air_three", label: "เอาไว้เเบบนี้เเหละ",nextIndex: 80 , styleClass: "text-screen-67" },
    ],styleClass: "special-question-style"
  },
  {
    //79
    type: "narration",
    image: baseUrl + "assets/images/68_1.webp",
    texts: [],
    autoNextTo: 82

  },
  {
    //80
    type: "narration",
    image: baseUrl + "assets/images/68_2.webp",
    texts: [],
    autoNextTo: 82

  },
  {
    //81
    type: "narration",
    image: baseUrl + "assets/images/68_3.webp",
    texts: [],
    autoNextTo: 82

  },
  {
    //82
    type: "narration",
    image: baseUrl + "assets/images/69.webp",
    texts: [{ content: "คุณปรับเเอร์จนพอใจเเล้ว ตั้งใจว่าจะดูทีวีต่อ", delay: 2000, position: "top" }],
  },
  {
    //83
    type: "narration",
    image: baseUrl + "assets/images/70.webp",
    texts: [],
  },
  {
    //84
    type: "narration",
    image: baseUrl + "assets/images/71.webp",
    texts: [{ content: "คุณดูรายการโปรดอย่างมีความสุข\nจนไม่รู้ว่าเวลาผ่านไปนานเเค่ไหนเเล้ว", delay: 8000, position: "top", styleClass: "text-screen-82" }],
  },
  {
    //85
    type: "narration",
    image: baseUrl + "assets/images/72.webp",
    texts: [{ content: "เเต่คุณเพิ่งนึกได้ว่าลืมรีดชุดไปทำงานวันพรุ่งนี้", delay: 2000, position: "top" }],
  },
  {
    //86
    type: "question",
    image: baseUrl + "assets/images/73.webp",
    choices: [
      { id: "iron_one", label: "รีดผ้าทั้งหมดทันที",nextIndex: 89  ,styleClass: "text-screen-67" },
      { id: "iron_two", label: "รีดเฉพาะชุดที่จะใส่",nextIndex: 89 , styleClass: "text-screen-67"},
    ],
  },
  {
    //87
    type: "narration",
    image: baseUrl + "assets/images/73_1.webp",
    texts: [],
    autoNextTo: 89

  },
  {
    //88
    type: "narration",
    image: baseUrl + "assets/images/73_2.webp",
    texts: [],
    autoNextTo: 89

  },
  {
    //89
    type: "narration",
    image: baseUrl + "assets/images/74.webp",
    texts: [],
  },
  {
    //90
    type: "narration",
    image: baseUrl + "assets/images/75.webp",
    texts: [],
    duration: 1000

  },
  {
    //91
    type: "narration",
    image: baseUrl + "assets/images/76.webp",
    texts: [],
    duration: 1000

  },
  {
    //92
    type: "narration",
    image: baseUrl + "assets/images/77.webp",
    texts: [],
    duration: 1000

  },
  {
    //93
    type: "narration",
    image: baseUrl + "assets/images/78.webp",
    texts: [],
  },
  {
    //94
    type: "narration",
    image: baseUrl + "assets/images/79.webp",
    texts: [],
  },
  {
    //95
    type: "narration",
    image: baseUrl + "assets/images/80.webp",
    texts: [],
  },
  {
    //96
    type: "narration",
    image: baseUrl + "assets/images/81.webp",
    texts: [],
  },
  {
    //97
    type: "narration",
    image: baseUrl + "assets/images/82.webp",
    texts: [],
  },
  {
    //98
    type: "narration",
    image: baseUrl + "assets/images/83.webp",
    texts: [{ content: "ปิดเเต่ไฟหรอ", delay: 2000, position: "top", styleClass: "text-screen-96" }],
  },
  {
    //99
    type: "quiz",
    image: baseUrl + "assets/images/83.webp",
    overlays: [
    ],
    glows: [
      { id: "light", top: "14%", left: "43%" },
      { id: "iron", top: "62%", left: "21%" }
    ],failNextTo: 100
  },
  {
    //100
    type: "narration",
    image: baseUrl + "assets/images/84.webp",
    texts: [],
  },
  {
    //101
    type: "narration",
    image: baseUrl + "assets/images/85.webp",
    texts: [],
  },
  {
    //102
    type: "narration",
    image: baseUrl + "assets/images/86.webp",
    texts: [],
    duration: 1000

  },
  {
    //103
    type: "narration",
    image: baseUrl + "assets/images/87.webp",
    texts: [],
    duration: 1000

  },
  {
    //104
    type: "narration",
    image: baseUrl + "assets/images/88.webp",
    texts: [],
    duration: 1000

  },
];

export { slidesPart4 };