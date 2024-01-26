const questions = [
    {
        'que': 'Which is the longest river in India?',
        'a': 'Ganga',
        'b': 'Jamuna',
        'c': 'Godabari',
        'd': 'Yamuna',
        'ans': 'a',
    },
    {
        'que': 'Who is the national father of India?',
        'a': 'Ganga',
        'b': 'Jamuna',
        'c': 'Mahatma Gandhi',
        'd': 'Modi',
        'ans': 'c',
    },
    {
        'que': 'Who is the prime minister of India?',
        'a': 'Rahul Gandhi',
        'b': 'Yogi',
        'c': 'Amit Sah',
        'd': 'Modi Sarkar',
        'ans': 'd',
    },
]

let idx = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll(".options");
const loadQues = () => {
    if (idx === total) {
        return quizEnd();
    } 
    if(idx === 0){
        const data = questions[idx];
        queBox.innerText = `${idx + 1}) ${data.que}`;
        optionInput[0].nextElementSibling.innerText = data.a;
        optionInput[1].nextElementSibling.innerText = data.b;
        optionInput[2].nextElementSibling.innerText = data.c;
        optionInput[3].nextElementSibling.innerText = data.d;
    }else{
        reset();
        const data = questions[idx];
        queBox.innerText = `${idx + 1}) ${data.que}`;
        optionInput[0].nextElementSibling.innerText = data.a;
        optionInput[1].nextElementSibling.innerText = data.b;
        optionInput[2].nextElementSibling.innerText = data.c;
        optionInput[3].nextElementSibling.innerText = data.d;
    
    }
        

}
loadQues();

const submitQuiz = () => {
    const data = questions[idx];
    const ans = getAnswer();
    if (ans === data.ans) {
        right++;
    } else {
        wrong++;
    }
    idx++;
    loadQues();
    return;
}
const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (e) => {
            if (e.checked) {
                answer = e.value;
            }
        }
    )
    return answer;
}

const reset = ()=>{
    optionInput.forEach(
        (e) => {
            e.checked = false;
        }
    )
}
const quizEnd = ()=>{
    document.querySelector(".box").innerHTML = `
    <h2>Thank You for Playing Quiz❤️</h2>
    <h3>${right}/${total} Correct`;
}