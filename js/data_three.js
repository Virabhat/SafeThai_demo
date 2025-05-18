const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart3  = [
  {
    //0
    //48
    type: "question",
    image: baseUrl + "/assets/images/46.webp",
    choices: [
      { id: "home", label: "สั่งกลับบ้าน", nextIndex: 51 },
      { id: "here", label: "กินที่นี้", nextIndex: 49 },
    ],
  },
  {
    //1
    //49
    type: "narration",
    image: baseUrl + "assets/images/47.webp",
    texts: [],
  },
  {
    //2
    //50
    type: "narration",
    image: baseUrl + "assets/images/48.webp",
    texts: [],
  },
  {
    //3
    //51
    type: "narration",
    image: baseUrl + "assets/images/49.webp",
    texts: [],
  },
  {
    //4
    //52
    type: "narration",
    image: baseUrl + "assets/images/50.webp",
    texts: [{ content: "คุณนัดช่างเเอร์\nมาติดตั้งเเอร์วันนี้", delay: 2000, position: "top" }],
  },
  {
    //5
    //53
    type: "narration",
    image: baseUrl + "assets/images/51.webp",
    texts: [],
    duration: 1000
  },
  {
    //6
    //54
    type: "narration",
    image: baseUrl + "assets/images/52.webp",
    texts: [{ content: "ใช้เวลาติดตั้ง 2-3 ชั่วโมงนะครับ", delay: 2000, position: "top" }],
    duration: 1000
  },
  {
    //7
    //55
    type: "narration",
    image: baseUrl + "assets/images/53.webp",
    texts: [],
    duration: 1000
  },
  {
    //8
    //56
    type: "narration",
    image: baseUrl + "assets/images/54.webp",
    texts: [{ content: "นั่งทำงานรอดีกว่า", delay: 2000, position: "top" }],
  },
  {
    //9
    //57
    type: "narration",
    image: baseUrl + "assets/images/55.webp",
    texts: [],
  },
  {
    //10
    //58
    type: "narration",
    image: baseUrl + "assets/images/56.webp",
    texts: [],
  },
  {
    //59
    type: "narration",
    image: baseUrl + "assets/images/57.webp",
    texts: [],
  },
  {
    //60
    type: "narration",
    image: baseUrl + "assets/images/58.webp",
    texts: [],
    duration: 1000

  },
  {
    //61
    type: "narration",
    image: baseUrl + "assets/images/59.webp",
    texts: [],
    duration: 1000

  },
  {
    //62
    type: "narration",
    image: baseUrl + "assets/images/60.webp",
    texts: [],
    duration: 1000

  },
  {
    //63
    type: "narration",
    image: baseUrl + "assets/images/61.webp",
    texts: [],
  },
  // {
  //   //64
  //   type: "narration",
  //   image: baseUrl + "assets/images/62.webp",
  //   texts: [],
  // },
];


export { slidesPart3 };
