const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart3  = [
  {
    type: "narration",
    image: baseUrl + "/assets/images/46.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/47.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/48.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/49.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/50.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/51.webp",
    texts: [],
    duration: 1000
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/52.webp",
    texts: [],
    duration: 1000
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/53.webp",
    texts: [],
    duration: 1000
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/54.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/55.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/56.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/57.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/58.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/59.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/60.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/61.webp",
    texts: [],
  },
  {
    type: "narration",
    image: baseUrl + "assets/images/62.webp",
    texts: [],
  },
];

function saveScore(score) {
//   const oldScore = parseInt(localStorage.getItem("totalScore")) || 0;
//   const newScore = oldScore + score;
//   localStorage.setItem("totalScore", newScore.toString());
//   globalScore = newScore;
}

export { slidesPart3, globalScore, saveScore };
