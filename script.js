//popovers enabling thing from getbootstrap, it triggers existence of a popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//answer key, it serves as answer key
let correctAnswers=['James Monroe', 'Democratic-Republican', '2', 'Era of Good Feelings', 'Missouri Compromise', '1831']

//getting button from html
const submit = document.getElementById('submitQuiz');

//making the submit button do things
submit.addEventListener('click', function(){
    //we get the inputs of the user
    let inputQuesOne=document.getElementById('inputQuesOne').value;
    let inputQuesTwo=document.getElementById('inputQuesTwo').value;
    let inputQuesThree=document.getElementById('inputQuesThree').value;
    let inputQuesFourOne=document.getElementById('inputQuesFourOne').value;
    let inputQuesFourTwo=document.getElementById('inputQuesFourTwo').value;
    let inputQuesFive=document.getElementById('inputQuesFive').value;

//if first question's input matches first thing in correct answer array, its correct
if(inputQuesOne===correctAnswers[0]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkOne').innerText='✅';
} else {
    document.getElementById('checkOrXMarkOne').innerText='❌';
}

//if 2nd question's input matches 2nd thing in correct answer array, its correct
if(inputQuesTwo===correctAnswers[1]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkTwo').innerText='✅';
} else {
    document.getElementById('checkOrXMarkTwo').innerText='❌';
}

//if 3rd question's input matches 3rd thing in correct answer array, its correct
if(inputQuesThree===correctAnswers[2]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkThree').innerText='✅';
} else {
    document.getElementById('checkOrXMarkThree').innerText='❌';
}

//if 4th question's first input matches 4th thing in correct answer array, its correct
if(inputQuesFourOne===correctAnswers[3] || inputQuesFourOne===correctAnswers[4]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkFour').innerText='✅';
} else {
    document.getElementById('checkOrXMarkFour').innerText='❌';
}

//if 4th question's second input matches 5th thing in correct answer array, its correct
if(inputQuesFourTwo===correctAnswers[4] || inputQuesFourTwo===correctAnswers[3]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkFive').innerText='✅';
} else {
    document.getElementById('checkOrXMarkFive').innerText='❌';
}

//if 5th question's input matches last thing in correct answer array, its correct
if(inputQuesFive===correctAnswers[5]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkSix').innerText='✅';
} else {
    document.getElementById('checkOrXMarkSix').innerText='❌';
}

})
