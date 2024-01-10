function questions(t,a,r,i){
    this.title=t;
    this.answers=a;
    this.rightAnswer=r;
    this.id=i;
}
var question0=new questions("Which of the following is a personal pronoun?",["Dog","They","Run","Beautiful"],"Beautiful",0);
var question1=new questions("What is the past tense of the verb eat?",["Ate","Eated","Eaten","Eating"],"Ate",1);
var question2=new questions("Which word is a conjunction?",["House","But","Happy","Quickly"],"But",2);
var question3=new questions(" I came _____ America.",["from", "at","in","on"],"from",3);
var question4=new questions("Choose the correct possessive pronoun for the sentence:The book is ___.",["Me","I","Mine","Myself"],"Mine",4);
var question5=new questions("I hope everyone_____ learned something from this.",["had","have","has","has to"],"has",5);
var question6=new questions("What is the correct order of the words in a basic English sentence?",["Subject - Object - Verb","Verb - Object - Subject","Object - Subject - Verb","Verb - Subject - Object"],"Subject - Object - Verb",6);
var question7=new questions("Select the correct plural form of the noun child:",["Childs","Childes","Children","Child's"],"Children",7);
var question8=new questions("Which word functions as an adverb in the sentence: He ran quickly to catch the bus.",["Bus","Catch","Ran","Quickly"],"Quickly",8);
var question9=new questions("What is the comparative form of the adjective tall?",["Tallest","Tallness","Taller","Tallish"],"Taller",9);


//////////////////////////////////////////////////////////////////////////////////////
//exam page
var timeProgress=document.getElementById("timeprogress");
var containerDiv=document.getElementById("container");
var examDiv=document.getElementById("exam");
var markListDiv=document.getElementById("marklist");
var questionh=document.getElementById("questionh");
var answerla1=document.getElementById("answerla1");
var answerla2=document.getElementById("answerla2");
var answerla3=document.getElementById("answerla3");
var answerla4=document.getElementById("answerla4");
var answer1radio=document.getElementById("answer1radio");
var answer2radio=document.getElementById("answer2radio");
var answer3radio=document.getElementById("answer3radio");
var answer4radio=document.getElementById("answer4radio");
var previousButton=document.getElementById("previousbutton");
var qNumbersDiv=document.getElementById("qnumbers");
var nextbutton=document.getElementById("nextbutton");
var markbutton=document.getElementById("markbutton");
var unmarkbutton=document.getElementById("unmarkbutton");
var submitQuesButton=document.getElementById("submitquesbutton");
var minutesSpan=document.querySelector(".minutesSpan"); 
var SecondsSpan=document.querySelector(".SecondsSpan");




//////////////////////////////////////////////////////////////////////////////////
//variables
var time=900;              //15 minutes *60=900seconds
var questionArray=[question0,question1,question2,question3,question4,question5,question6,question7,question8,question9];
var selectedQuestions=[];
var markedQuestions=[];
var genaricNumber;
var counter=0;
var savedAnswersArr=[
    {quesNum:0,answer:""},
    {quesNum:1,answer:""},
    {quesNum:2,answer:""},
    {quesNum:3,answer:""},
    {quesNum:4,answer:""},
    {quesNum:5,answer:""},
    {quesNum:6,answer:""},
    {quesNum:7,answer:""},
    {quesNum:8,answer:""},
    {quesNum:9,answer:""}
];
var labelArr=[answerla1,answerla2,answerla3,answerla4];
var radioArr=[answer1radio,answer2radio,answer3radio,answer4radio];
var grade=0;



/////////////////////////////////////////////////////////////////////////////////////////
//local storage variables
var reviewCheck=localStorage.getItem("reviewCheck");

///////////////////////////////////////////////////////////////////////////////////////
if(reviewCheck==="1"){
    var selectedQuestionsLocal=JSON.parse(localStorage.getItem("selectedQuestionsLocal"));
    var savedAnswersArrLocal=JSON.parse(localStorage.getItem("savedAnswersArrLocal"));
    timeProgress.style.display="none";
    generateQuestionsLocal();
    function recorrect(){
        console.log(savedAnswersArrLocal);
        console.log(savedAnswersArrLocal[parseInt(selectedQuestionsLocal[counter])].answer);
        if(savedAnswersArrLocal[parseInt(selectedQuestionsLocal[counter])].answer===questionArray[parseInt(selectedQuestionsLocal[counter])].rightAnswer)
        {
            for(var i=0;i<4;i++){
                    if(savedAnswersArrLocal[parseInt(selectedQuestionsLocal[counter])].answer===labelArr[i].textContent){
                       labelArr[i].setAttribute("class","correctanswerclass");
        }
    }

}
else{
    for(var i=0;i<4;i++){
        if(savedAnswersArrLocal[parseInt(selectedQuestionsLocal[counter])].answer===labelArr[i].textContent)
        {
            labelArr[i].setAttribute("class","wronganswerclass");
      }
       if(labelArr[i].textContent===questionArray[parseInt(selectedQuestionsLocal[counter])].rightAnswer)
       {
        labelArr[i].setAttribute("class","correctanswerclass");
}
}
}
}
      
      
      function generateQuestionsLocal(){
        console.log("hello");
        questionArray.forEach(function(el) {
            if(el.id===parseInt(selectedQuestionsLocal[counter])){
                questionh.innerHTML=`<h2>${el.title}</h2>`; 
                answerla1.textContent=el.answers[0];
                answerla2.textContent=el.answers[1];
                answerla3.textContent=el.answers[2];
                answerla4.textContent=el.answers[3];
                    }});
        labelArr.forEach(function(el){
         el.removeAttribute("class");
        });
        radioArr.forEach(function(el){
            el.disabled=true;
        });
        recorrect();
        } 
      
      
      
      function goQuestionLocal(num){
        counter=num;
        generateQuestionsLocal();
        qNumbersDiv.textContent=counter+1;
        if(counter===0){
            previousButton.style.display="none";
            nextbutton.style.display="block";
        }
        else if(counter===9){
            nextbutton.style.display="none";
            previousButton.style.display="block"; 
        }
        else{
            previousButton.style.display="block";  
            nextbutton.style.display="block";
        }
        }


//previous Button
previousButton.addEventListener("click",function(){
    counter--;
    generateQuestionsLocal();
    qNumbersDiv.textContent=counter+1;
    if(counter===0){
        previousButton.style.display="none";
    }
    if(counter<9){
        nextbutton.style.display="block";  
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////
//next button
nextbutton.addEventListener("click",function(){
    counter++;
    generateQuestionsLocal();
    previousButton.style.display="block";
    qNumbersDiv.textContent=counter+1;
    if(counter===9){
        nextbutton.style.display="none";
    }
    });

//////////////////////////////////////////////////////////////////////////////////////////////
//mark button
markbutton.addEventListener("click",function(){
    if(markedQuestions.indexOf(counter)===-1){
        markListDiv.innerHTML+=`<div class="quesInMarkList"onclick="goQuestionLocal(${counter})">mrk-Question${counter+1}</div>`;
        markedQuestions.push(counter);
        
    }
});
/////////////////////////////////////////////////////////////////////////////////////
//un mark button
unmarkbutton.addEventListener("click",function(){
var unmarkQindex=markedQuestions.indexOf(counter);            //it will return the index 
markedQuestions.splice(unmarkQindex,1);
markListDiv.innerHTML="";
markedQuestions.forEach(function(el){
markListDiv.innerHTML+=`<div class="quesInMarkList"onclick="goQuestionLocal(${el})">mrk-Question${el+1}</div>`; 
console.log(el);
});
});

////////////////////////////////////////////////////////////////////////////////////
//submit button
submitQuesButton.textContent="Go To Grades Page";
submitQuesButton.addEventListener("click",function(){
    window.location.replace("grades.html");
});
///////////////////////////////////////////////////////////////////////////
localStorage.removeItem("reviewCheck");

    }




else{
    var setIntervalReference=setInterval(function(){
        timeProgress.value+=1;
        setTime(time--);
        if(timeProgress.value===timeProgress.max){
            clearInterval(setIntervalReference);
            window.location.replace("timeout.html");
    
        }
        },1000);
    
    /////////////////////////////////////////////////////////////
    for(var i=0;i<10;i++){
        do{
        genaricNumber=Math.floor(Math.random()*10);
        }while(selectedQuestions.indexOf(genaricNumber)!==-1);
        selectedQuestions.push(genaricNumber); }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //calling
    setTime(time--);
    generateQuestions();
    
    ///////////////////////////////////////////////////////////////////////////////////////
    //next button
    nextbutton.addEventListener("click",function(){
        counter++;
        generateQuestions();
        previousButton.style.display="block";
        qNumbersDiv.textContent=counter+1;
        if(counter===9){
            nextbutton.style.display="none";
        }
        });
     //////////////////////////////////////////////////////////////////////////////////////
    //previous Button
    previousButton.addEventListener("click",function(){
            counter--;
            generateQuestions();
            qNumbersDiv.textContent=counter+1;
            if(counter===0){
                previousButton.style.display="none";
            }
            if(counter<9){
                nextbutton.style.display="block";  
            }
        });
        //////////////////////////////////////////////////////////////////////////////////////
        //submit button
      submitQuesButton.addEventListener("click",function(){
        for(var i=0;i<10;i++){
        if(savedAnswersArr[i].answer===questionArray[i].rightAnswer){
            grade++;
        }}
        localStorage.setItem("selectedQuestionsLocal",JSON.stringify(selectedQuestions));
        localStorage.setItem("savedAnswersArrLocal",JSON.stringify(savedAnswersArr));
        localStorage.setItem("userGrades",grade);
        window.location.replace("grades.html");
        });

        //////////////////////////////////////////////////////////////////////////////////////////////
        //mark button
        markbutton.addEventListener("click",function(){
            if(markedQuestions.indexOf(counter)===-1){
                markListDiv.innerHTML+=`<div class="quesInMarkList"onclick="goQuestion(${counter})">mrk-Question${counter+1}</div>`;
                markedQuestions.push(counter);
                
            }
        });
        /////////////////////////////////////////////////////////////////////////////////////
        //un mark button
        unmarkbutton.addEventListener("click",function(){
        var unmarkQindex=markedQuestions.indexOf(counter);            //it will return the index 
        markedQuestions.splice(unmarkQindex,1);
        markListDiv.innerHTML="";
        markedQuestions.forEach(function(el){
        markListDiv.innerHTML+=`<div class="quesInMarkList"onclick="goQuestion(${el})">mrk-Question${el+1}</div>`; 
        console.log(el);
        });
        });


}

////////////////////////////////////////////////////////////////////////////////////////

//functions
function setTime(time){
    var min=parseInt(time/60);
    var sec=time%60;
    if(min<10)min=`0${min}`;
    if(sec<10)sec=`0${sec}`;
    minutesSpan.textContent=min;
    SecondsSpan.textContent=sec;
  }



function checkedHandle(){
  if(savedAnswersArr[selectedQuestions[counter]].answer!==""){
      for(var i=0;i<4;i++){
              if(savedAnswersArr[selectedQuestions[counter]].answer===labelArr[i].textContent){
                 radioArr[i].checked=true;
  }}}}


function generateQuestions(){
  questionArray.forEach(function(el) {
      if(el.id===selectedQuestions[counter]){
          questionh.innerHTML=`<h2>${el.title}</h2>`; 
          answerla1.textContent=el.answers[0];
          answerla2.textContent=el.answers[1];
          answerla3.textContent=el.answers[2];
          answerla4.textContent=el.answers[3];
              }});
  answer1radio.checked=false;
  answer2radio.checked=false;
  answer3radio.checked=false;
  answer4radio.checked=false;
  checkedHandle();
  } 



function goQuestion(num){
  counter=num;
  generateQuestions();
  qNumbersDiv.textContent=counter+1;
  if(counter===0){
      previousButton.style.display="none";
      nextbutton.style.display="block";
  }
  else if(counter===9){
      nextbutton.style.display="none";
      previousButton.style.display="block"; 
  }
  else{
      previousButton.style.display="block";  
      nextbutton.style.display="block";
  }
  } 
  


function savedAnswer(x){
  savedAnswersArr[selectedQuestions[counter]].answer=document.querySelectorAll("#exam label")[x].textContent;
  }    






