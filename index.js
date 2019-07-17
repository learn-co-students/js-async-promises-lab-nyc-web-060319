const questions = [
  { questionText: "Lightning never strikes in the same place twice", answer: false },
  { questionText: "Humans can distinguish between over one trillion different smells", answer: true },
  { questionText: "Goldfish only have a memory of about three seconds", answer: false }
]

let question;

function appendQuestion(quest) {
  contain = document.querySelector('.question-container');
  contain.innerText = quest.questionText;
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve()
    }, time)
  })
}

function removeQuestion() {
  contain = document.querySelector('.question-container');
  contain.innerText = "";
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(function () {
    removeQuestion()
  })
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  if (trueAndFalseButtons()[0].classList.contains('hide')) {
    trueAndFalseButtons().forEach(function (btn) {
      btn.classList.remove('hide')
    })
  }
  else {
    trueAndFalseButtons().forEach(function (btn) {
      btn.classList.add('hide')
    })
  }
}
function displayQuestionOnClick() {
  askQuestionThenRemoveQuestion(5000).then(
    function () {
    }
  )
}

