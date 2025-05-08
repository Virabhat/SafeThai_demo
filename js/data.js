const slides = [
  {
    image: "assets/images/1.webp",
    texts: [{ content: "วันนี้อากาศร้อนมาก", delay: 1000, position: "bottom" }],
  },
  {
    image: "assets/images/2.webp",
    texts: [],
  },
  {
    image: "assets/images/3.webp",
    texts: [{ content: "เดือนนี้ร้อนจริง", delay: 2000, position: "top" }],
  },
  {
    image: "assets/images/5.webp",
    texts: [{ content: "เปิดแอร์ดีกว่า", delay: 2000, position: "top" }],
  },
  {
    image: "assets/images/7.webp",
    texts: [],
  },
  {
    image: "assets/images/8.webp",
    texts: [],
    duration: 1000,
  },
  {
    image: "assets/images/9.webp",
    texts: [],
    duration: 1000,
  },
  {
    image: "assets/images/10.webp",
    texts: [],
    duration: 1000,
  },
  {
    image: "assets/images/11.webp",
    texts: [],
  },
  {
    image: "assets/images/12.webp",
    texts: [],
  },
  {
    image: "assets/images/13.webp",
    texts: [],
  },
  {
    image: "assets/images/14.webp",
    texts: [],
  },
  {
    image: "assets/images/15.webp",
    texts: [],
  },
  {
    image: "assets/images/16.webp",
    texts: [{ content: "ต้องซื้อแอร์ใหม่แล้ว", delay: 2000, position: "top" }],
  },
  {
    image: "assets/images/18.webp",
    texts: [],
  },
  {
    image: "assets/images/19.webp",
    texts: [],
  },
  {
    image: "assets/images/20.webp",
    texts: [
      {
        content: "คุณเจอร้านขายเเอร์ที่ห้างใกล้ๆ",
        delay: 2000,
        position: "top",
      },
    ],
  },
  {
    image: "assets/images/22.webp",
    texts: [],
  },
  {
    image: "assets/images/22.webp",
    texts: [],
  },
  {
    image: "assets/images/26_2.webp",
    texts: [
      { content: "เเต่...", delay: 1000, position: "bottom" },
      { content: "คุณลืมอะไรไปหรือเปล่านะ?", delay: 1000, position: "bottom" },
    ],
  },
  {
    image: "assets/images/27.webp",
    duration: 8000,
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
];
export { slides };
