const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart3  = [
  {
    //50
    type: "question",
    image: baseUrl + "/assets/images/46.webp",
    choices: [
      { id: "home", label: "สั่งกลับบ้าน", nextIndex: 53,styleClass: "text-button1-48"},
      { id: "here", label: "กินที่นี่", nextIndex: 51,styleClass: "text-button2-48" },
    ],
  },
  {
    //51
    type: "narration",
    image: baseUrl + "assets/images/47.webp",
    texts: [],
  },
  {
    //52
    type: "narration",
    image: baseUrl + "assets/images/48.webp",
    texts: [],
  },
  {
    //53
    type: "narration",
    image: baseUrl + "assets/images/49.webp",
    texts: [],
  },
  {
    //54
    type: "narration",
    image: baseUrl + "assets/images/50.webp",
    texts: [{ content: "คุณนัดช่างเเอร์\nมาติดตั้งเเอร์วันนี้", delay: 2000, position: "top" }],
  },
  {
    //55
    type: "narration",
    image: baseUrl + "assets/images/51.webp",
    texts: [],
    duration: 1000
  },
  {
    //56
    type: "narration",
    image: baseUrl + "assets/images/52.webp",
    texts: [{ content: "ใช้เวลาติดตั้ง 2-3 ชั่วโมงนะครับ", delay: 2000, position: "top", styleClass: "text-screen-54" }],
    duration: 1000
  },
  {
    //57
    type: "narration",
    image: baseUrl + "assets/images/53.webp",
    texts: [],
    duration: 1000
  },
  {
    //58
    type: "narration",
    image: baseUrl + "assets/images/54.webp",
    texts: [{ content: "นั่งทำงานรอดีกว่า", delay: 2000, position: "top" }],
  },
  {
    //59
    type: "narration",
    image: baseUrl + "assets/images/55.webp",
    texts: [],
  },
  {
    //60
    type: "narration",
    image: baseUrl + "assets/images/56.webp",
    texts: [],
  },
  {
    //61
    type: "narration",
    image: baseUrl + "assets/images/57.webp",
    texts: [],
    duration: 1000
  },
  {
    //62
    type: "narration",
    image: baseUrl + "assets/images/58.webp",
    texts: [],
    duration: 1000
  },
  {
    //63
    type: "narration",
    image: baseUrl + "assets/images/59.webp",
    texts: [],
    duration: 1000
  },
  {
    //64
    type: "narration",
    image: baseUrl + "assets/images/60.webp",
    texts: [],
    duration: 1000
  },
  {
    //65
    type: "narration",
    image: baseUrl + "assets/images/61.webp",
    texts: [],
  },
];


export { slidesPart3 };
