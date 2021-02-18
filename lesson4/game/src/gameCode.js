//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var answers = []; // history of answers

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

//------------------------------------------

function getAnswers(q, answer1, answer2){
    var ok = false;
    do {
        event = +prompt(q + answer1 + answer2 + "-1 выход из игры");
        if (event == -1) {
            return -1;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch(event) {
        case 1: answers.push([q, answer1]);
            break;
        case 2: answers.push([q, answer2]);
            break;
        case -1: answers.push([q, "выход из игры"]);
            break;
    }
return event;
}

//------------------------------------------



switch (getAnswers(works.a00, works.a1, works.a2)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        switch (getAnswers(works.b00, works.b1, works.b2)){ //открылось окно 2
            case 1: 
            case 2:
                getAnswers(works.d00, works.d1, works.d2); //открылось окно 4
                break;
            case -1: 
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        switch (getAnswers(works.c00, works.c1, works.c2)){ //открылось окно 3
            case 1: 
            case 2:
                getAnswers(works.d0, works.d1, works.d2); //открылось окно 4
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;    
       
};
alert('Спасибо за игру');
console.log(answers);
var qNumber = +prompt("Введите номер вопроса");
var qHistory = "В вопросе №" + qNumber + "\n" + answers[qNumber-1][0] + "Вы выбрали\n " + answers[qNumber-1][1];
alert(qHistory);
 





