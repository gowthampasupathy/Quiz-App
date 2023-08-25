let quiz = [
  {
    q: "Javascript is an _______ language",
    Option: ["Object-Oreinted", "Object-Based", "procedural"],
    answer: 0,
  },
  {
    q: "Which of the following keywords is used to define a variable in Javascript?",
    Option: ["var", "let", "Both option"],
    answer: 2,
  },
  {
    q: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    Option: ["Throws an error", "Ignore Statments", "give warning"],
    answer: 1,
  },
  {
    q: "JWhich of the following methods is used to access HTML elements using Javascript?",
    Option: ["getElementbyId()", "getElementbyClassName()", "Both option"],
    answer: 2,
  },
  {
    q: "Which of the following methods can be used to display data in some form using Javascript?",
    Option: ["console.log()", "window.alert()", "Both option"],
    answer: 2,
  },
];

let quesnum = document.querySelector(".question-number");
let ques = document.querySelector(".question-text");
let optioncon = document.querySelector(".option-container");
let quescount = 0;
let curques;
let score = 0;
let availques = [];
let availopt = [];

function setques() {
  const totalques = quiz.length;
  for (let i = 0; i < totalques; i++) {
    availques.push(quiz[i]);
  }
}
function getnewques() {
  reset();
  quesnum.innerHTML = "Question " + (quescount + 1) + " of " + quiz.length;
  let quesindex = availques[Math.floor(Math.random() * availques.length)];
  curques = quesindex;
  ques.innerHTML = curques.q;
  let index = availques.indexOf(quesindex);
  availques.splice(index, 1);
  let oplen = curques.Option.length;
  for (i = 0; i < oplen; i++) {
    availopt.push(i);
  }
  for (let i = 0; i < oplen; i++) {
    let option = document.createElement("div");
    option.innerHTML = curques.Option[i];
    option.id = i;
    option.className = "option";
    optioncon.appendChild(option);
    option.setAttribute("onclick", "getresult(this)");
  }
}
function reset() {
  while (optioncon.firstChild) {
    optioncon.removeChild(optioncon.firstChild);
  }
}
function getresult(element) {
  let id = parseInt(element.id);
  if (id < 0) {
    alert("Please enter any choice");
  }
  if (id === curques.answer) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("incorrect");
  }
}
function next() {
  if (quescount == quiz.length - 1) {
    alert("Quiz is End");
  } else {
    quescount++;
    getnewques();
  }
}
function scoree() {
  let scr = document.getElementById("sc");
  scr.innerHTML = score;
}
window.onload = function () {
  setques();
  getnewques();
};
