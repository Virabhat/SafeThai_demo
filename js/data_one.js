const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart1 = [
  {
    //0 
    type: "intro",
    image: baseUrl + "/assets/images/Sec-1.jpg",
    waitForClick: true
  },
  {
    //1
    type: "form",
    image: baseUrl + "/assets/images/bg.png"
  },
  {
    //2
    type: "narration",
    image: baseUrl + "/assets/images/1.webp",
    texts: [{ content: "วันนี้อากาศร้อนมาก", delay: 2000, position: "bottom" }],
  },
  {
    //3
    type: "narration",
    image: baseUrl + "assets/images/2.webp",
    texts: [{ content: "หนีร้อนเข้าบ้านดีกว่า", delay: 2000, position: "bottom" , styleClass: "text-screen-3" }],
  },
  {
    //4
    type: "narration",
    image: baseUrl + "assets/images/3.webp",
    texts: [{ content: "เดือนนี้มันร้อนจริง", delay: 2000, position: "top" }],
  },
  {
    //5
    type: "narration",
    image: baseUrl + "assets/images/4.webp",
    texts: [{ content: "เปิดแอร์ดีกว่า", delay: 2000, position: "top" }],
  },
  {
    //6
    type: "narration",
    image: baseUrl + "assets/images/5.webp",
    texts: [],
  },
  {
    //7
    type: "narration",
    image: baseUrl + "assets/images/6.webp",
    texts: [],
    duration: 1000,
    transition: "no-transition"
  },
  {
    //8
    type: "narration",
    image: baseUrl + "assets/images/7.webp",
    texts: [],
    duration: 1000,
    transition: "no-transition"
  },
  {
    //9
    type: "narration",
    image: baseUrl + "assets/images/8.webp",
    texts: [],
    duration: 1000,
    transition: "no-transition"
  },
  {
    //10
    type: "narration",
    image: baseUrl + "assets/images/9.webp",
    texts: [],
  },
  {
    //11
    type: "narration",
    image: baseUrl + "assets/images/10.webp",
    texts: [],
  },
  {
    //12
    type: "narration",
    image: baseUrl + "assets/images/11.webp",
    texts: [],
  },
  {
    //13
    type: "narration",
    image: baseUrl + "assets/images/12.webp",
    texts: [],
    transition: "no-transition"
  },
  {
    //14
    type: "narration",
    image: baseUrl + "assets/images/13.webp",
    texts: [],
    transition: "no-transition"
  },
  {
    //15
    type: "narration",
    image: baseUrl + "assets/images/14.webp",
    texts: [{ content: "ต้องซื้อเเอร์ใหม่เเล้ว", delay: 2000, position: "top" }],
  },
  {
    //16
    type: "narration",
    image: baseUrl + "assets/images/15.webp",
    texts: [{ content: "คุณจึงเสิร์ชหา", delay: 2000, position: "top" }],
    transition: "no-transition"
  },
  {
    //17
    type: "narration",
    image: baseUrl + "assets/images/16.webp",
    texts: [],
  },
  {
    //18
    type: "narration",
    image: baseUrl + "assets/images/17.webp",
    texts: [{ content: "คุณเจอร้านขายเเอร์ที่ห้างใกล้ๆ", delay: 2000, position: "top", styleClass: "text-screen-18" }],
  },
  {
    //19
    type: "narration",
    image: baseUrl + "assets/images/18.webp",
    texts: [{ content: "คุณตัดสินใจไปซื้อทันที", delay: 2000, position: "top", styleClass: "text-screen-19" }],
  },
  {
    //20
    type: "narration",
    image: baseUrl + "assets/images/19_1.webp",
    texts: [
      {
        content: "เเต่",
        delay: 2000,
        position: "bottom",
        styleClass: "sceen-text"
      },
      {
        content: "คุณลืมอะไรไปหรือเปล่านะ",
        delay: 2000,
        position: "bottom",
        styleClass: "sceen-text"
      },
    ],
  },
  {
    //21
    type: "quiz",
    image: baseUrl + "assets/images/26_2.webp",
    duration: 5000,
    failNextTo: 23 ,
    // overlays: [
    //   {
    //     id: "light",
    //     src: "assets/elements/turn-on-light.png",
    //     top: "24px",
    //     left: "56px",
    //     width: "173px",
    //     offClass: "light-off-style",
    //   },
    //   {
    //     id: "tv",
    //     src: "assets/elements/tv-open.png",
    //     top: "42%",
    //     left: "-25%",
    //     width: "201px",
    //     offClass: "tv-off-style",
    //   },
    //   {
    //     id: "fan",
    //     src: "assets/elements/fan.png",
    //     top: "54%",
    //     left: "24%",
    //     width: "96px",
    //     offClass: "fan-off-style",
    //   },
    // ],
    glows: [
      { id: "light", top: "6%", left: "38%" },
      { id: "tv", top: "40%", left: "7%" },
      { id: "fan", top: "64%", left: "39%" },
    ],
  },
  {
    // 22
    type: "narration",
    image: baseUrl + "/assets/images/20.webp",
    texts: [],
    duration: 3000
  },
  {
    // 23
    type: "narration",
    image: baseUrl + "/assets/images/19.webp",
    texts: [{ content: "หลังจากจัดการทุกอย่างเสร็จ\nคุณก็ออกจากบ้านไป", delay: 2000, position: "bottom", styleClass: "text-screen-23" }],
    duration: 3000

  },
];

export { slidesPart1 };
