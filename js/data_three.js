const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart3  = [
  {
    //0
    //48
    type: "question",
    image: baseUrl + "/assets/images/46.webp",
    choices: [
      { id: "home", label: "สั่งกลับบ้าน", nextIndex: 3 },
      { id: "here", label: "กินที่นี้", nextIndex: 1 },
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
    texts: [],
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
    texts: [],
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
    texts: [],
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
  },
  {
    //61
    type: "narration",
    image: baseUrl + "assets/images/59.webp",
    texts: [],
  },
  {
    //62
    type: "narration",
    image: baseUrl + "assets/images/60.webp",
    texts: [],
  },
  {
    //63
    type: "narration",
    image: baseUrl + "assets/images/61.webp",
    texts: [],
  },
  {
    //64
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
