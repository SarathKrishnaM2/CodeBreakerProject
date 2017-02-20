let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return;
    }
    attempt.value++;

    if (getResults(input.value)) {
        setMessage('You Win');
        showAnswer(true);
        showReplay();
    } else if (attempt.value >= 10) {
        setMessage('You Loose!');
        showAnswer(false);
        showReplay();
    } else {
        setMessage('Incorrect, Try Again');
    }
}
//This is to get results
function getResults(input) {
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for (i = 0; i < input.length; i++) {
        if (input.charAt(i) == answer.value.charAt(i)) {
            html += '<span class="glyphicon glyphicon-ok"></span>';
        } else if (answer.value.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;

    if (input == answer.value) {
        return true;
    }
    return false;
}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString;
    while (answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
    attempt.value = "0";
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if (input.length != 4) {
        setMessage('Guess must have exactly 4 numbers');
        return false;
    }
    return true;
}

function showAnswer() {
    let code = document.getElementById('code');
    if (success) {
        code.className += ' success';
    } else {
        code.className += ' failure';
    }
    code.innerHTML = answer.value;
}

function showReplay() {
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}