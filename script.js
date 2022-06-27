let currentQuestion = 0;
let filterQuestions = [];
let rightquestions = 0;

function initHTML() {
    let questionsFilter = questions.filter(questions => questions.category === 'HTML');
    filterQuestions.push(questionsFilter);
    document.getElementById('quizNumber').innerHTML = filterQuestions[0].length;
    showQuestion()
}

function initCSS() {
    let questionsFilter = questions.filter(question => question.category === 'CSS');
    filterQuestions.push(questionsFilter);
    document.getElementById('quizNumber').innerHTML = filterQuestions[0].length;
    showQuestion()
}

function initJS() {
    let questionsFilter = questions.filter(question => question.category === 'JS');
    filterQuestions.push(questionsFilter);
    document.getElementById('quizNumber').innerHTML = filterQuestions[0].length;
    showQuestion()
}

function initGalaxy() {
    let questionsFilter = questions.filter(question => question.category === 'Galaxy');
    filterQuestions.push(questionsFilter);
    document.getElementById('quizNumber').innerHTML = filterQuestions[0].length;
    showQuestion()
}

function initTierwelt() {
    let questionsFilter = questions.filter(question => question.category === 'Tierwelt');
    filterQuestions.push(questionsFilter);
    document.getElementById('quizNumber').innerHTML = filterQuestions[0].length;
    showQuestion()
}

function initTechnik() {
    let questionsFilter = questions.filter(question => question.category === 'Technik');
    filterQuestions.push(questionsFilter);
    document.getElementById('quizNumber').innerHTML = filterQuestions[0].length;
    showQuestion()
}

function quizEndSettings(){
    document.getElementById('hideAnswer').classList.add('d-none');
    document.getElementById('imgEndScene').classList.add('d-none');
    document.getElementById('imgEndScene2').classList.remove('d-none');
    document.getElementById('endScene').classList.remove('d-none');
    document.getElementById('amountOfQuestions').innerHTML = filterQuestions[0].length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightquestions;
}

function showQuestion() {
    if (currentQuestion >= filterQuestions[0].length) {
        quizEndSettings()
    } else {
        let question = filterQuestions[0][currentQuestion];
        document.getElementById('questionNummber').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = filterQuestions[0][currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success')
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')

    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswer();
    showQuestion();

}

function resetAnswer() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function progressBarInPercent() {
    let percent = (currentquestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}