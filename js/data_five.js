const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart5 = [
  {
    //105
    type: "narration",
    image: baseUrl + "/assets/images/89.webp",
    texts: [{ content: "ก่อนนอน คุณปิดมือถือ\n อัปเดตโชเชียล", delay: 2000, position: "top" }],
  },
  {
    //106
    type: "narration",
    image: baseUrl + "assets/images/90.webp",
    texts: [],
  },
  {
    // 107
    type: "swiper",
    content: `
     <iframe 
          src="./assets/swiperscreen.html" 
          style="width: 100%; height: 100%; border: none; overflow: hidden;"
          scrolling="yes"
          allow="fullscreen">
      </iframe>
    `,
    texts: [],
  },
  {
    //108
    type: "narration",
    image: baseUrl + "assets/images/94.webp",
    texts: [{ content: "เริ่มง่วงนอนเเล้ว", delay: 2000, position: "top", styleClass: "text-screen-110" }],
    duration: 1000
  },
  {
    //109
    type: "narration",
    image: baseUrl + "assets/images/95.webp",
    texts: [],
    duration: 1000,
    transition: "no-transition"
  },
  {
    //110
    type: "narration",
    image: baseUrl + "assets/images/96.webp",
    texts: [],
    duration: 1000,
    transition: "no-transition"
  },
  {
    //111
    type: "narration",
    image: baseUrl + "assets/images/97.webp",
    texts: [],
    transition: "no-transition"
  },
  {
    //112
    type: "narration",
    image: baseUrl + "assets/images/98.webp",
    texts: [{ content: "เก็บโทรศัทพ์ดีกว่าเเต่ก่อนจะนอนต้อง", delay: 2000, position: "top", styleClass: "text-screen-112"  }],
    transition: "no-transition"

  },
  {
    //113
    type: "question",
    image: baseUrl + "assets/images/98.webp",
    choices: [
      { id: "type_one", label: "ชาร์จโทรศัทพ์ทิ้งไว้", nextIndex: 116 },
      { id: "type_two", label: "ค่อยชาร์จพรุ่งนี้", nextIndex: 116 },
    ],
  },
  {
    //114
    type: "narration",
    image: baseUrl + "assets/images/99_1.webp",
    texts: [],
    autoNextTo: 118

  },
  {
    //115
    type: "narration",
    image: baseUrl + "assets/images/99_2.webp",
    texts: [],
    autoNextTo: 118

  },
  {
    //116
    type: "narration",
    image: baseUrl + "assets/images/100.webp",
    texts: [],
  },
  {
    //117
    type: "narration",
    image: baseUrl + "assets/images/101.webp",
    texts: [],
  },
  {
    //118
    type: "narration",
    image: baseUrl + "assets/images/102.webp",
    texts: [],
    transition: "no-transition"

  },
  {
    //119
    type: "form",
    image: baseUrl + "assets/images/102.webp",
    formType: "temperature",
  },
  {
    //120
    type: "narration",
    image: baseUrl + "assets/images/103.webp",
    texts: [],
  },
  {
    //121
    type: "narration",
    image: baseUrl + "assets/images/104.webp",
    texts: [],
  },
  {
    //122
    type: "narration",
    image: baseUrl + "assets/images/105.webp",
    texts: [],
  },
  {
    //123
    type: "narration",
    image: baseUrl + "assets/images/106.webp",
    texts: [],
  },
  {
    //124
    type: "question",
    image: baseUrl + "assets/images/107.webp",
    choices: [
      { id: "zero", label: "", nextIndex: 125, styleClass: "button-zero" },
      { id: "one", label: "", nextIndex: 126, styleClass: "button-one" },
      { id: "two", label: "", nextIndex: 127, styleClass: "button-two" },
      { id: "three", label: "", nextIndex: 128, styleClass: "button-three" },
    ],

  },
  {
    //125
    type: "narration",
    image: baseUrl + "assets/images/107_0.webp",
    texts: [],
    autoNextTo: 129

  },
  {
    //126
    type: "narration",
    image: baseUrl + "assets/images/107_1.webp",
    texts: [],
    autoNextTo: 129

  },
  {
    //127
    type: "narration",
    image: baseUrl + "assets/images/107_2.webp",
    texts: [],
    autoNextTo: 129

  },
  {
    //128
    type: "narration",
    image: baseUrl + "assets/images/107_3.webp",
    texts: [],
    autoNextTo: 129

  },
  {
    //129
    type: "narration",
    image: baseUrl + "assets/images/109.webp",
    texts: [{ content: "อากาศเย็นทำให้คุณง่วงมากขึ้นทุกที\nในที่สุดคุณก็เคลิ้มหลับไป", delay: 2000, position: "top", styleClass: "text-screen-128" }],
  },
  {
    //130
    type: "narration",
    image: baseUrl + "assets/images/bg_black.jpg",
    texts: [],
  },
  {
    //131
    type: "narration",
    image: baseUrl + "assets/images/110.webp",
    texts: [],
  },
  {
    //132
    type: "narration",
    image: baseUrl + "assets/images/111.webp",
    texts: [],
  },
  {
    //133
    type: "narration",
    image: baseUrl + "assets/images/112.webp",
    texts: [],
  },
  {
    //134
    type: "narration",
    image: baseUrl + "assets/images/113.webp",
    texts: [],
  },
  {
    //135
    type: "narration",
    image: baseUrl + "assets/images/114.webp",
    texts: ["คุณ {userName} 🎉"],
    download: true
  },
  {
    //136
    type: "narration",
    image: baseUrl + "assets/images/115.webp",
    texts: ["คุณ {userName} 🎉"],
    download: true
  },
  {
    //137
    type: "narration",
    image: baseUrl + "assets/images/116.webp",
    texts: ["คุณ {userName} 🎉"],
    download: true
  },
  {
    //138
    type: "narration",
    image: baseUrl + "assets/images/117.webp",
    texts: ["คุณ {userName} 🎉"],
    download: true
  },
  {
    //139
    type: "narration",
    image: baseUrl + "assets/images/118.webp",
    texts: ["คุณ {userName} 🎉"],
    download: true
  },
];

export { slidesPart5 };
