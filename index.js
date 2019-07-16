const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(questionArg) {
  // questions.push(question);
  const cont = document.querySelector(".question-container");
  // const newQ = document.createTextNode(question.questionText);
  // const newQ = document.createElement(null);
  cont.innerText = questionArg.questionText;
  // cont.appendChild();
}

function askQuestionThen() {
  return new Promise((resolve, reject) => {
    question = questions[0];
    appendQuestion(question);
    resolve();
  })
}

function removeQuestion() {
  question = null;
  const cont = document.querySelector(".question-container");
  cont.innerText = "";
}

function askQuestionThenRemoveQuestion(timeout) {
  return new Promise((resolve, reject) => {
    askQuestionThen();
    setTimeout( function() {
      // resolve();
    }, timeout);
  }).then(function(){
    removeQuestion();
  });
}

function trueAndFalseButtons() {
  return [document.querySelector(".btn.green"), document.querySelector(".btn.red")];
}

function toggleTrueAndFalseButtons() {
  const buttons = trueAndFalseButtons();
  if (buttons[0].classList.contains("hide")) {
    buttons[0].classList.remove("hide");
  }
  else {
    buttons[0].classList.add("hide")
  }
  if (buttons[1].classList.contains("hide")) {
    buttons[1].classList.remove("hide");
  }
  else {
    buttons[1].classList.add("hide")
  }
}

function displayQuestionOnClick(){
  
}