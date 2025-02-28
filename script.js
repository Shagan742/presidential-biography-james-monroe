//popovers enabling thing from getbootstrap, it triggers existence of a popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//answer key, it serves as answer key
let correctAnswers=['James Monroe', 'james monroe', 'James monroe', 'james Monroe', 
'Democratic-Republican', 'democratic-republican', 'democratic-Republican','Democratic-republican',
'2', 
'Era of Good Feelings', 'era of good feelings', 'Era of good feelings', 'Era Of Good Feelings', 'era of Good feelings', 'era of Good Feelings',
'Missouri Compromise', 'missouri compromise', 'Missouri compromise',
'1831']

//getting button from html
const submit = document.getElementById('submitQuiz');

//making the submit button do things
submit.addEventListener('click', function(){
    //we get the inputs of the user
    let inputQuesOne=document.getElementById('inputQuesOne').value.trim();
    let inputQuesTwo=document.getElementById('inputQuesTwo').value.trim();
    let inputQuesThree=document.getElementById('inputQuesThree').value.trim();
    let inputQuesFourOne=document.getElementById('inputQuesFourOne').value.trim();
    let inputQuesFourTwo=document.getElementById('inputQuesFourTwo').value.trim();
    let inputQuesFive=document.getElementById('inputQuesFive').value.trim();

//if first question's input matches something in correct answer array, its correct
if(inputQuesOne===correctAnswers[0] || inputQuesOne===correctAnswers[1] || inputQuesOne===correctAnswers[2] || inputQuesOne===correctAnswers[3]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkOne').innerText='✅';

} else {
    document.getElementById('checkOrXMarkOne').innerText='❌';
}

//if 2nd question's input matches something in correct answer array, its correct
if(inputQuesTwo===correctAnswers[4] || inputQuesTwo===correctAnswers[5] || inputQuesTwo===correctAnswers[6] || inputQuesTwo===correctAnswers[7]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkTwo').innerText='✅';
} else {
    document.getElementById('checkOrXMarkTwo').innerText='❌';
}

//if 3rd question's input matches something in correct answer array, its correct
if(inputQuesThree===correctAnswers[8]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkThree').innerText='✅';
} else {
    document.getElementById('checkOrXMarkThree').innerText='❌';
}

//if 4th question's first input matches something in correct answer array, its correct
if(inputQuesFourOne===correctAnswers[9] || inputQuesFourOne===correctAnswers[10] || inputQuesFourOne===correctAnswers[11] || inputQuesFourOne===correctAnswers[12]
    || inputQuesFourOne===correctAnswers[13] || inputQuesFourOne===correctAnswers[14] || inputQuesFourOne===correctAnswers[15] || inputQuesFourOne===correctAnswers[16] || inputQuesFourOne===correctAnswers[17]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkFour').innerText='✅';
} else {
    document.getElementById('checkOrXMarkFour').innerText='❌';
}

//if 4th question's second input matches something in correct answer array, its correct
if(inputQuesFourTwo===correctAnswers[9] || inputQuesFourTwo===correctAnswers[10] || inputQuesFourTwo===correctAnswers[11] || inputQuesFourTwo===correctAnswers[12]
    || inputQuesFourTwo===correctAnswers[13] || inputQuesFourTwo===correctAnswers[14] || inputQuesFourTwo===correctAnswers[15] || inputQuesFourTwo===correctAnswers[16] || inputQuesFourTwo===correctAnswers[17]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkFive').innerText='✅';
} else {
    document.getElementById('checkOrXMarkFive').innerText='❌';
}

//if 5th question's input matches something in correct answer array, its correct
if(inputQuesFive===correctAnswers[18]) {
    //display check mark next to question
    document.getElementById('checkOrXMarkSix').innerText='✅';
} else {
    document.getElementById('checkOrXMarkSix').innerText='❌';
}

})
