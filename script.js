let currentQuestion = 0;



function initHTML() {
    document.getElementById('quizNumber').innerHTML = questionsHTML.length;
    showQuestionHTML()
}

function initCSS() {
    document.getElementById('quizNumber').innerHTML = questionsCSS.length;
    showQuestionCSS()
}

function initJS() {
    document.getElementById('quizNumber').innerHTML = questionsJS.length;
    showQuestionJS()
}

function initGalaxy() {
    document.getElementById('quizNumber').innerHTML = questionsGalaxy.length;
    showQuestionGalaxy()
}

function initTierwelt() {
    document.getElementById('quizNumber').innerHTML = questionsTierwelt.length;
    showQuestionTierwelt()
}

function initTechnik() {
    document.getElementById('quizNumber').innerHTML = questionsTechnik.length;
    showQuestionTechnik()
}



function showQuestionHTML() {
    let questionHTML = questionsHTML[currentQuestion];
    document.getElementById('questionText').innerHTML = questionHTML['question'];
    document.getElementById('answer_1').innerHTML = questionHTML['answer_1'];
    document.getElementById('answer_2').innerHTML = questionHTML['answer_2'];
    document.getElementById('answer_3').innerHTML = questionHTML['answer_3'];
    document.getElementById('answer_4').innerHTML = questionHTML['answer_4'];
}

function showQuestionCSS() {
    let questionCSS = questionsCSS[currentQuestion];
    document.getElementById('questionText').innerHTML = questionCSS['question'];
    document.getElementById('answer_1').innerHTML = questionCSS['answer_1'];
    document.getElementById('answer_2').innerHTML = questionCSS['answer_2'];
    document.getElementById('answer_3').innerHTML = questionCSS['answer_3'];
    document.getElementById('answer_4').innerHTML = questionCSS['answer_4'];
}

function showQuestionJS() {
    let questionJS = questionsJS[currentQuestion];
    document.getElementById('questionText').innerHTML = questionJS['question'];
    document.getElementById('answer_1').innerHTML = questionJS['answer_1'];
    document.getElementById('answer_2').innerHTML = questionJS['answer_2'];
    document.getElementById('answer_3').innerHTML = questionJS['answer_3'];
    document.getElementById('answer_4').innerHTML = questionJS['answer_4'];
}

function showQuestionGalaxy() {
    let questionGalaxy = questionsGalaxy[currentQuestion];
    document.getElementById('questionText').innerHTML = questionGalaxy['question'];
    document.getElementById('answer_1').innerHTML = questionGalaxy['answer_1'];
    document.getElementById('answer_2').innerHTML = questionGalaxy['answer_2'];
    document.getElementById('answer_3').innerHTML = questionGalaxy['answer_3'];
    document.getElementById('answer_4').innerHTML = questionGalaxy['answer_4'];
}

function showQuestionTierwelt() {
    let questionTierwelt = questionsTierwelt[currentQuestion];
    document.getElementById('questionText').innerHTML = questionTierwelt['question'];
    document.getElementById('answer_1').innerHTML = questionTierwelt['answer_1'];
    document.getElementById('answer_2').innerHTML = questionTierwelt['answer_2'];
    document.getElementById('answer_3').innerHTML = questionTierwelt['answer_3'];
    document.getElementById('answer_4').innerHTML = questionTierwelt['answer_4'];
}

function showQuestionTechnik() {
    let questionTechnik = questionsTechnik[currentQuestion];
    document.getElementById('questionText').innerHTML = questionTechnik['question'];
    document.getElementById('answer_1').innerHTML = questionTechnik['answer_1'];
    document.getElementById('answer_2').innerHTML = questionTechnik['answer_2'];
    document.getElementById('answer_3').innerHTML = questionTechnik['answer_3'];
    document.getElementById('answer_4').innerHTML = questionTechnik['answer_4'];
}


function answerHTML(selection) {
    let question = questionsHTML[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success')
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')

    }
}

function answer(selection) {
    let question = questionsCSS[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success')
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')

    }
}