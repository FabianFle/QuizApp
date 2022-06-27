let currentQuestion = 0;
let filterQuestions = [];


function initHTML() {
    let questionsFilter = questions.filter(questions => questions.category === 'HTML');
    filterQuestions.push(questionsFilter);
    showQuestion()
}

function initCSS() {
    let questionsFilter = questions.filter(question => question.category === 'CSS');
    filterQuestions.push(questionsFilter);
    showQuestion()
}

function initJS() {
    let questionsFilter = questions.filter(question => question.category === 'JS');
    filterQuestions.push(questionsFilter);
    showQuestion()
}

function initGalaxy() {
    let questionsFilter = questions.filter(question => question.category === 'Galaxy');
    filterQuestions.push(questionsFilter);
    showQuestion()
}

function initTierwelt() {
    let questionsFilter = questions.filter(question => question.category === 'Tierwelt');
    filterQuestions.push(questionsFilter);
    showQuestion()
}

function initTechnik() {
    let questionsFilter = questions.filter(question => question.category === 'Technik');
    filterQuestions.push(questionsFilter);
    showQuestion()
}


function showQuestion() {
    let question = filterQuestions[0][currentQuestion];
    document.getElementById('questionText').innerHTML = question ['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = filterQuestions[0][currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success')
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')

    }
}