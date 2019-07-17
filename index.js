const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;


function appendQuestion(question){
  let container = document.querySelector('.question-container');
  container.innerHTML = question.questionText;
  // console.log(container.innerHTML);
}

function askQuestionThen(time){
  question = questions[0];
  appendQuestion(question);
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question), time
    });
  });
}

function removeQuestion(question){
  return new Promise(function(){
    let container = document.querySelector('.question-container')
    container.innerHTML = ''
    // toggleTrueAndFalseButtons()
  });
  
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons(){
  const buttons = document.querySelector('.true-false-list').querySelectorAll('.btn');
  return buttons;
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(button){
    button.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
button = document.querySelector('a')
return button.addEventListener('click', () => {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(5000)
})

}



