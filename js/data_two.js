const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart2 = [
  {
    //24
    type: "narration",
    image: baseUrl + "/assets/images/22.webp",
    texts: [],
    duration: 3000
  },
  {
    //25
    type: "narration",
    image: baseUrl + "/assets/images/23.webp",
    texts: [],
    duration: 3000
  },
  {
    //26
    type: "narration",
    image: baseUrl + "/assets/images/24.webp",
    texts: [],
    duration: 3000
  },
  {
    //27
    type: "narration",
    image: baseUrl + "/assets/images/25.webp",
    texts: [{ content: "พนักงานอธิบายรุ่นเเอร์ต่างๆให้ฟัง", delay: 2000, position: "top", styleClass: "text-screen-27" }],
    duration: 3000
  },
  {
    //28
    type: "narration",
    image: baseUrl + "/assets/images/26.webp",
    texts: [{ content: "คุณคิดอยู่นาน\nสุดท้ายก็ตัดสินใจเลือก...", delay: 1000, position: "top" }],
    duration: 3000

  },
  {
    //29
    type: "question",
    image: baseUrl + "assets/images/27.webp",
    texts: [
      { content: "ก่อนเลือกซื้อเเอร์\n คุณตัดสินใจจากมากไป ( มาก-น้อย )", delay: 1000, position: "top", styleClass: "question1-text-one"  },
      { content: "คลิกเลือกลำดับ", delay: 1000, position: "top", styleClass: "question1-text-two"  }
    ],
    choices: [
      { id: "efficiency", label: "ฉลากเบอร์ 5" },
      { id: "design", label: "ดีไซน์สวย" },
      { id: "btu", label: "BTU แอร์" },
      { id: "technology", label: "ระบบสุดล้ำ" },
    ],
  },
  {
    //30
    type: "narration",
    image: baseUrl + "/assets/images/28.webp",
    texts: [],
  },
  {
    //31
    type: "narration",
    image: baseUrl + "/assets/images/29.webp",
    texts: [],
  },
  {
    //32
    type: "narration",
    image: baseUrl + "/assets/images/10.webp",
    texts: [],
  },
  {
    //33
    type: "narration",
    image: baseUrl + "/assets/images/30.webp",
    texts: [],
  },
  {
    //34
    type: "narration",
    image: baseUrl + "/assets/images/31.webp",
    texts: [{ content: "คุณเดินมาจากโซน\nเครื่องใช้ไฟฟ้า", delay: 1000, position: "top" }],
  },
  {
    //35
    type: "narration",
    image: baseUrl + "/assets/images/33.webp",
    texts: [],
  },
  {
    //36
    type: "question",
    image: baseUrl + "/assets/images/34.webp",
    texts: [
      { content: "บนชั้นวาง\nมีหลอดไฟ 3 เเบบ", delay: 2000, position: "top", styleClass: "question2-text-one" },
      { content: "คลิกเลือกลำดับ", delay: 2000, position: "top", styleClass: "question2-text-two" }
    ],
    choices: [
      { id: "light_one", label: "หลอดไส้", nextIndex: 37 },
      { id: "light_two", label: "หลอดฟลูออเรสเซนต์", nextIndex: 39 },
      { id: "light_three", label: "หลอด LED", nextIndex: 41 }
    ]
  },
  {
    //37
    type: "narration",
    image: baseUrl + "/assets/images/35.webp",
    texts: [],
    autoNextTo: 38

  },
  {
    //38
    type: "narration",
    image: baseUrl + "/assets/images/36.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 43
  },
  {
    //39
    type: "narration",
    image: baseUrl + "/assets/images/35.webp",
    texts: [],
    autoNextTo: 40

  },
  {
    //40
    type: "narration",
    image: baseUrl + "/assets/images/37.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 43
  },
  {
    //41
    type: "narration",
    image: baseUrl + "/assets/images/35.webp",
    texts: [],
    autoNextTo: 42

  },
  {
    //42
    type: "narration",
    image: baseUrl + "/assets/images/38.webp",
    texts: [],
    duration: 3000,
    autoNextTo: 43
  },
  {
    //43
    type: "narration",
    image: baseUrl + "/assets/images/39.webp",
    texts: [],
  },
  {
    //44
    type: "narration",
    image: baseUrl + "/assets/images/40.webp",
    texts: [],
  },
  {
    //45
    type: "narration",
    image: baseUrl + "/assets/images/41.webp",
    texts: [],
  },
  {
    //46
    type: "narration",
    image: baseUrl + "/assets/images/42.webp",
    texts: [],
  },
  {
    //47
    type: "narration",
    image: baseUrl + "/assets/images/43.webp",
    texts: [{ content: "คุณได้ของที่ต้องการ\nครบเเล้ว", delay: 1000, position: "top" }],
  },
  {
    //48
    type: "narration",
    image: baseUrl + "/assets/images/44.webp",
    texts: [],
  },
  {
    //49
    type: "narration",
    image: baseUrl + "/assets/images/45.webp",
    texts: [],
  },
];


export { slidesPart2};
