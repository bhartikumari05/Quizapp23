//selecting all required elements
const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector("result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timetext = document.querySelector(".timer .time_left_text");
const timecount = document.querySelector(".timer .timer_sec");

//show info box
info_box.classList.add("activeInfo");//show info box
//if continuequiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo");
    quiz_box.classList.add("activequiz");
    showQuestions(0);
    quecounter(1);
    startTimer(10);
    startTimerLine(0);
}
1
let timevalue = 10;
let que_count = 0;
letque_numb = 1;
let userscore = 0;
let counter;
let counterline;
let widthvalue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("active quiz");
    result_box.classList.remove("activeresult");
    timevalue = 10;
    que_count = 0;
    que_numb = 1;
    userscore = 0;
    widthvalue = 0;
    showQuestion(que_count);
    quecounter(que_numb);
    clearInterval(counter);
    clearInterval(counterline);
    startTimer(timevalue);
    startTimer(widthvalue);
    timetext.textcounter = "time left";
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestion(que_count);
        quecounter(que_numb);
        clearInterval(counter);
        clearInterval(counterline);
        startTimer(timevalue);
        startTimer(widthvalue);
        timetext.textContent = "time left";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterline);
        showresult();
    }
}

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb+ - "." +
    questions[index].Question +'</span>';
    let option_tag ='<div class="option"><span>'+questions[index].option[0]+'</span></div>'
    + '<div class="option"><span>'+Questions[index].option[1]
    +'</span></div>'
    + '<div class="option"><span>'+Questions[index].option[2]
    +'</span></div>'
    + '<div class="option"><span>'+Questions[index].option[3]
    +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option =option_list.querySelector(".option");
    for(i=0; i< option.length; i++){
        option[i].setAttribute("onclick","optionselected(this)");
    }
}
let tickicontag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
letcrossicontag = '<div class"icon cross"><i class="fas fa -times"></i></div>';
function optionselected(answer){
    clearInterval(counter);
    clearInterval(counterline);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const alloptions = option_list.children.length;
    if(userAns == correcAns){
        userscore +=1;
        answer.classlist.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("correct Answer");
        console.log("Your correct answers =" + userscore);
        
        }else{
            answer.classList.add("incorrect");
            answer.insertAdjacentHTML("beforeend",crossIconTag);
            console.log("wrong answer");
            for(i=0; i< alloptions; i++){
                if(option_list.children[i].textContent == correcAns)
                    {
                        option_list.children[i].setAttribute("class","option correct");
                        option_list.children[i].insertAdjacentHTML("beforend", tickIcontag);
                        console.log("Auto selected correct answer.");
                    }
            }
        }
        for(i=0; i< alloptions; i++){
            option_list.children.add("disable");
        }
        next_btn.classList.add("show");
}
function showresult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
    let scoreTag = '<span><congrats! , you got <p>'+ userScore + '</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;
    }
    else if(userscore > 1){
        let scoreTag = '<span>and nice , you got <p>'+ userscore scoreText.innerHTML = scoreTag;
        }
        else{
            let scoreTag = '<span>and sorry , you got only <p>'+ userscore +'</p> out of <p>'+ questions.length +'</p></span>';
            scoreText.innerHTML = scoreTag;

        }
}
function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timecount.textContent = time;
        time--;
        if(time < 9){
            let addzero = timecount.textContent;
            timecount.textContent = "0" + addzero;
        }
        if(time < 0){
            clearInterval(counter);
            time.text.textContent = "time End";
            const alloptions = option_list.children.length;
            let correcAns = questions[que_count].answer;
            for(i=0; i< alloptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class","option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("time off: Auto selected correct answer.");
                }
            }
            for(i=0; i < alloptions; i++){
               if (option_list.children[i].textContent == correcAns){
                option_list.children[i].setAttribute("class","option correct");
                option_list.children[i].insertAdjacentHTML("beforeend",tickIconTag);
                console.log("time off: auto selected correct answer.");
               }

        }
        for(i=0; i < alloptions; i++){
            option_list.children[i].classList.add("disabled");
        }
        next_btn.classList.add("show");
    }
}


}
function startTimerLine(time){
    counterline = setInterval(timer,29);
    function timer(){
        time += 1;
        time_line.computedStyleMap.width = time + "px";
        if(time > 549){
            clearInterval(counterline);
            }
        }
    }
    function quecounter(index){
        let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
        bottom_ques_counter.innerHTML = totalQueCounTag;
    }



