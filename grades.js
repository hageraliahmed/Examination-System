//grades page
var gradesPage=document.getElementById("gradesPage");
var tryAgainButton=document.getElementById("tryagain");
var gradeh2=document.getElementById("gradeh2");
var ReviewAnswers=document.getElementById("Reviewanswers");
var userData=JSON.parse(localStorage.getItem("user_data"));
var userGrades=parseInt(localStorage.getItem("userGrades"));
var numberDiv=document.getElementById("number");
var myCircle=document.getElementById("mycircle");

/////////////////////////////////////////////////////////////
gradeh2.innerHTML=`${userData.userFirstName} ${userData.userLastName} your grade is ${userGrades} / 10 `;


var counter=0;
circularProgress(userGrades);

if(userGrades===0){myCircle.style.animation="myanimation0 0.5s linear forwards";}
else if(userGrades===1){myCircle.style.animation="myanimation1 0.5s linear forwards";}
else if(userGrades===2){myCircle.style.animation="myanimation2 0.5s linear forwards";}
else if(userGrades===3){myCircle.style.animation="myanimation3 0.8s linear forwards";}
else if(userGrades===4){myCircle.style.animation="myanimation4 1.1s linear forwards";}
else if(userGrades===5){myCircle.style.animation="myanimation5 1.6s linear forwards";}
else if(userGrades===6){myCircle.style.animation="myanimation6 1.8s linear forwards";}
else if(userGrades===7){myCircle.style.animation="myanimation7 2s linear forwards";}
else if(userGrades===8){myCircle.style.animation="myanimation8 2.3s linear forwards";}
else if(userGrades===9){myCircle.style.animation="myanimation9 2.7s linear forwards";}
else {myCircle.style.animation="myanimation10 3.2s linear forwards";}





ReviewAnswers.addEventListener("click",function(){
    localStorage.setItem("reviewCheck","1");
    window.location.replace("exam.html");
});



////////////////////////////////////////////////////////////////////////////
//functions

function tryAgainFun(){  
window.location.replace("exam.html");   
}




function circularProgress(userGrades){
    setInterval(function(){
        if(counter===userGrades*10){
            clearInterval;
        }
        else{
            counter+=1;
            numberDiv.innerHTML=`${counter}%`;
        }
        },30);
}
