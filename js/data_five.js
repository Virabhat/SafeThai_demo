const baseUrl = "https://safethai.wyndigitalgroup.com/";
let globalScore = 0;

const slidesPart5  = [
  {
    //0
    //103
    type: "narration",
    image: baseUrl + "/assets/images/89.webp",
    texts: [],
  },
  {
    //1
    //104
    type: "narration",
    image: baseUrl + "assets/images/90.webp",
    texts: [],
  },
  {
    //2
    //105
    type: "narration",
    image: baseUrl + "assets/images/91.webp",
    texts: [],
  },
  {
    //3
    //106
    type: "narration",
    image: baseUrl + "assets/images/92.webp",
    texts: [],
  },
  {
    //4
    //107
    type: "narration",
    image: baseUrl + "assets/images/93.webp",
    texts: [],
  },
  {
    //5
    //108
    type: "narration",
    image: baseUrl + "assets/images/94.webp",
    texts: [],
    duration: 1000
  },
  {
    //6
    //109
    type: "narration",
    image: baseUrl + "assets/images/95.webp",
    texts: [],
    duration: 1000
  },
  {
    //7
    //110
    type: "narration",
    image: baseUrl + "assets/images/96.webp",
    texts: [],
    duration: 1000
  },
  {
    //8
    //111
    type: "narration",
    image: baseUrl + "assets/images/97.webp",
    texts: [],
  },
  {
    //9
    //112
    type: "narration",
    image: baseUrl + "assets/images/98.webp",
    texts: [],
  },
  {
    //10
    //113
    type: "question",
    image: baseUrl + "assets/images/99.webp",
    choices: [
      { id: "type_one", label: "ชาร์จโปรศัทพ์ทิ้งไว้", nextIndex: 11 },
      { id: "type_two", label: "ค่อยชาร์จพรุ่งนี้",  nextIndex: 12 },
    ],
  },
  {
    //11
    //114
    type: "narration",
    image: baseUrl + "assets/images/99_1.webp",
    texts: [],
    autoNextTo: 13

  },
  {
    //12
    //115
    type: "narration",
    image: baseUrl + "assets/images/99_2.webp",
    texts: [],
    autoNextTo: 13

  },
  {
    //13
    //116
    type: "narration",
    image: baseUrl + "assets/images/100.webp",
    texts: [],
  },
  {
    //14
    //117
    type: "narration",
    image: baseUrl + "assets/images/101.webp",
    texts: [],
  },
  {
    //15
    //118
    type: "narration",
    image: baseUrl + "assets/images/102.webp",
    texts: [],
  },
  {
    //16
    //119
    type: "narration",
    image: baseUrl + "assets/images/103.webp",
    texts: [],
  },
  {
    //17
    //120
    type: "narration",
    image: baseUrl + "assets/images/104.webp",
    texts: [],
  },
  {
    //18
    //121
    type: "narration",
    image: baseUrl + "assets/images/105.webp",
    texts: [],
  },
  {
    //19
    //122
    type: "narration",
    image: baseUrl + "assets/images/106.webp",
    texts: [],
  },
  {
    //20
    //123
    type: "question",
    image: baseUrl + "assets/images/107.webp",
    choices: [
      { id: "zero", label: "เบอร์ 0", nextIndex: 21 },
      { id: "one", label: "เบอร์ 1",  nextIndex: 22 },
      { id: "two", label: "เบอร์ 2",  nextIndex: 23 },
      { id: "three", label: "เบอร์ 3",  nextIndex: 24 },
    ],
    
  },
  {
    //21
    //124
    type: "narration",
    image: baseUrl + "assets/images/107_0.webp",
    texts: [],
    autoNextTo: 25

  },
  {
    //22
    //125
    type: "narration",
    image: baseUrl + "assets/images/107_1.webp",
    texts: [],
    autoNextTo: 25

  },
  {
    //23
    //126
    type: "narration",
    image: baseUrl + "assets/images/107_2.webp",
    texts: [],
    autoNextTo: 25

  },
  {
    //24
    //127
    type: "narration",
    image: baseUrl + "assets/images/107_3.webp",
    texts: [],
    autoNextTo: 25

  },
  {
    //25
    //128
    type: "narration",
    image: baseUrl + "assets/images/108.webp",
    texts: [],
  },
  {
    //26
    //129
    type: "narration",
    image: baseUrl + "assets/images/109.webp",
    texts: [],
  },
  {
    //27
    //130
    type: "narration",
    image: baseUrl + "assets/images/110.webp",
    texts: [],
  },
  {
    //28
    //131
    type: "narration",
    image: baseUrl + "assets/images/111.webp",
    texts: [],
  },
  {
    //29
    //132
    type: "narration",
    image: baseUrl + "assets/images/112.webp",
    texts: [],
  },
  {
    //30
    //133
    type: "narration",
    image: baseUrl + "assets/images/113.webp",
    texts: [],
  },
  {
    //31
    //134
    type: "narration",
    image: baseUrl + "assets/images/114.webp",
    texts: [],
  },
  {
    //32
    //135
    type: "narration",
    image: baseUrl + "assets/images/115.webp",
    texts: [],
  },
  {
    //33
    //136
    type: "narration",
    image: baseUrl + "assets/images/116.webp",
    texts: [],
  },
  {
    //34
    //137
    type: "narration",
    image: baseUrl + "assets/images/117.webp",
    texts: [],
  },
  {
    //35
    //138
    type: "narration",
    image: baseUrl + "assets/images/118.webp",
    texts: [],
  },
];

function saveScore(score) {
//   const oldScore = parseInt(localStorage.getItem("totalScore")) || 0;
//   const newScore = oldScore + score;
//   localStorage.setItem("totalScore", newScore.toString());
//   globalScore = newScore;
}

export { slidesPart5, globalScore, saveScore };
