const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart2  = [
  {
    type: "narration",
    image: baseUrl + "/assets/images/20.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/21.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/22.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/23.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/24.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/25.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/26.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/27.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/28.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/27.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/29.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/30.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/31.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/32.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/33.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "/assets/images/34.webp",
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
