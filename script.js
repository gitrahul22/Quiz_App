const quest =[
    {
        quest:"Which is Largest animal in the World?",
        answers:[
            {text: "Shark",correct:false},
            {text: "Blue Whale",correct:true},
            {text: "Elephant",correct:false},
            {text: "Ghorar Dim",correct:false},
        ]
    },
    {
        quest: "How many days are there in a leap year?",
        answers: [
            {text: "365", correct: false},
            {text: "366", correct: true},
            {text: "364", correct: false},
            {text: "367", correct: false},
        ]
    },
    {
        quest: "Which is the smallest continent by land area?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},
            {text: "Australia", correct : true},
            {text: "Antarctica", correct: false},
        ]
    },
    {
        quest: "Which animal is known as the King of the Jungle?",
        answers: [
            {text: "Tiger", correct: false},
            {text: "Lion", correct: true},
            {text: "Elephant", correct: false},
            {text: "Leopard", correct: false},
        ]
    },
    {
        quest: "What is the capital of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false},
        ]
    },
    {
        quest: "How many days are there in a leap year?",
        answers: [
            {text: "365", correct: false},
            {text: "366", correct: true},
            {text: "364", correct: false},
            {text: "367", correct: false},
        ]
    }
            
]

const quesEle=document.getElementById("ques");
const ansbtns=document.getElementById("ans-bttns");
const nexButtn=document.getElementById("nxtbtn");

let curridx=0;
let score=0;

function startQuiz(){
    curridx=0;
    score=0;
    nexButtn.innerHTML="Next";
    showQues();
    // nexButtn.style.display='block';
}
function showQues(){
    resetSet();
    console.log(curridx);
    let currQ=quest[curridx];
    let qno=curridx+1;
    quesEle.innerHTML=qno+"."+currQ.quest;
    console.log(currQ.quest);
    currQ.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.classList.add("btn");
        button.innerHTML=answer.text;
        console.log(answer.text);
        ansbtns.appendChild(button);
        if(answer.correct){
                button.dataset.correct=answer.correct;
                console.log(answer.text);
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetSet(){
    nexButtn.style.display="none";
    while(ansbtns.firstChild){
        ansbtns.removeChild(ansbtns.firstChild);
    }
}

function selectAnswer(e){
    const selectbtn=e.target;
    const isCorrect=selectbtn.dataset.correct==="true";
    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(ansbtns.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nexButtn.style.display='block';
}
function showScore(){
        resetSet();
        quesEle.innerHTML=` Test Over You Scored ${score} out of ${quest.length} !!`;
        nexButtn.innerHTML="Try Again";
        nexButtn.style.display='block'
}
function handlenextbttn(){
    console.log(quest.length);
    curridx++;
    console.log(curridx);
    if(curridx<quest.length){
        showQues();
    }else{
        showScore();
    }
}
nexButtn.addEventListener("click",()=>{
     if(curridx<quest.length){
        handlenextbttn();
    }
    else{
        startQuiz();
    }
});
startQuiz();
