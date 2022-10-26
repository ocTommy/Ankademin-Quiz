

const quizData = [
    {
        question: "Is Lissabon the capital of Portugal?",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "Is Barcelona the capital of Spain?",
        a: "True",
        b: "False",
        correct: "b",
    },
    {
        question: "Is Paris the capital of France?",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "Is Stockholm the capital of Sweden?",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "Is Lima the capital of Peru?",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "Is Zagreb the capital of Slovenia?",
        a: "True",
        b: "False",
        correct: "b",
    },
    {
        question: "Is Melbourne the capital of Australia?",
        a: "True",
        b: "False",
        correct: "b",
    },
    {
        question: "Is Hanoi the capital of Vietnam?",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "Is Nairobi the capital of Kenya?",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "Is Medellín the capital of Colombia?",
        a: "True",
        b: "False",
        correct: "b",
    },

];
let quiz= document.querySelector("#quiz")
let answerEls = document.querySelectorAll("input.answer")
let questionEl = document.querySelector("#question")
let optionA = document.querySelector("#option-a")
let optionB = document.querySelector("#option-b")
let submitBtn = document.querySelector("#submit")
let currentQuiz = 0
let score = 0
let resultText =""
let color = ""
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    scoreGrad()
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else { 
           quiz.innerHTML = `
           <h2>Your score is ${score}/${quizData.length} </h2>
           <span style='color: ${color};'> Du är: ${resultText}</span>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }   

})



function scoreGrad (){
    if (score>=7){
    color = "green"
        return resultText = "Mycket väl godkänd!"
    } else if (score>=5){
    color = "orange"
        return resultText = "godkänd"
    } else if (score<5){ 
    color = "red"
        return resultText = "underkänd"
    }
}



let darkModeBtn = document.querySelector ("#dark-mode");
let lightModeBtn = document.querySelector ("#light-mode");
let resultsBtn = document.querySelector ("#results");


darkModeBtn.addEventListener ("click", () => {
    document.body.style.backgroundColor = 'darkslategray';
    document.body.style.color = 'white';
});

lightModeBtn.addEventListener ("click", () => {
    document.body.style.backgroundColor = 'lightgoldenrodyellow';
    document.body.style.color = "black";
});