const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionContainer = document.querySelector('.question-container')

function appendQuestion(question) {
  questionContainer.innerText = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
    removeQuestion()
    }, time )
  })
}

function removeQuestion() {
  questionContainer.innerText = ""
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  const buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return buttons
}

function toggleTrueAndFalseButtons() {
trueAndFalseButtons().forEach(function(button) {
  if (button.classList.contains('hide')) {
      button.classList.remove('hide')
  }
  else {
    button.classList.add('hide')
  }
})
}

function displayQuestionOnClick() {
  askQuestionThenRemoveQuestion(5000)
}
