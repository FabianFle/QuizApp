let currentQuestion = 0;
let filterQuestions = [];
let rightquestions = 0;

let AUDIO_SUCCESS = new Audio('sound/right.mp3');
let AUDIO_FAIL = new Audio('sound/wrong.mp3');
let AUDIO_HAPPY = new Audio('sound/happy.mp3');


//TO DO

// - Antworten bearbeiten (es darf keine merfach antwortmöglichkeiten geben).
// - Alle HTML Seiten für die verschiedenen Quiz fragen auf eine quiz.html seite packen.
// - Buttons anpassen (Enabel - Disenabel)
// - 


//#############################################################################################


function init(questionsFilter) {
    filterQuestions = [];
    rightquestions = 0;
    currentQuestion = 0;
    showHideContainer();
    let category = questions.filter(questions => questions.category === questionsFilter);
    filterQuestions.push(category);
    document.getElementById('quizNumber').innerHTML = filterQuestions[0].length;
    showQuestion();
}


function reset() {
    filterQuestions = [];
    rightquestions = 0;
    currentQuestion = 0;
    init();
}

function showHideContainer() {
    document.getElementById('mainShow').classList.add('d-none');
    document.getElementById('quizShow').classList.remove('d-none');
}


function quizEndSettings() {
    document.getElementById('hideAnswer').classList.add('d-none');
    document.getElementById('imgEndScene').classList.add('d-none');
    document.getElementById('imgEndScene2').classList.remove('d-none');
    document.getElementById('endScene').classList.remove('d-none');
    document.getElementById('amountOfQuestions').innerHTML = filterQuestions[0].length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightquestions;
    AUDIO_HAPPY.play();
    start();
    stop();
}


function showQuestion() {
    if (currentQuestion >= filterQuestions[0].length) {
        quizEndSettings();
        progressBarInPercent();
    } else {
        progressBarInPercent();
        furtherQuestions();
    }
}


function furtherQuestions() {
    let question = filterQuestions[0][currentQuestion];
    document.getElementById('questionNummber').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('imgEndScene').src = question['img'];
    document.getElementById('backgroundImg').scr = question['background'];
}


function answerButtonTrue() {
    document.getElementById('answer_1').disabled = false;
    document.getElementById('answer_2').disabled = false;
    document.getElementById('answer_3').disabled = false;
    document.getElementById('answer_4').disabled = false;
}
function answerButtonFalse() {
    document.getElementById('answer_1').disabled = true;
    document.getElementById('answer_2').disabled = true;
    document.getElementById('answer_3').disabled = true;
    document.getElementById('answer_4').disabled = true;
}


function answer(selection) {
    let question = filterQuestions[0][currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightquestions++;
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('nextButton').disabled = false;
    answerButtonFalse();
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    answerButtonTrue();
    resetAnswer();
    showQuestion();
}


function resetAnswer() {
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
}


function progressBarInPercent() {
    let percent = (currentQuestion) / filterQuestions[0].length;
    percent = Math.round(percent * 100);
    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style = `width: ${percent}%`;
}


function openMenu() {
    let element = document.getElementById("menuIconDiv");
    element.classList.toggle("iconDivDNone");
}

//#####################################################################################

// Confetti Start and Stop

const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};


//#####################################################################################