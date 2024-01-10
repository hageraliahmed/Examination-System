//sign in page
var signInDiv=document.getElementById("signin");
var emailInputSignIn=document.getElementById("emailinputsignin");
var passwordInputSignIn=document.getElementById("passwordinputsignin");
var emailSpanSignIn=document.getElementById("emailspansignin");
var passwordSpanSignIn=document.getElementById("passwordspansignin");
var signInButton=document.getElementById("signinbutton");
var userData=JSON.parse(localStorage.getItem("user_data"));



//////////////////////////////////////////////////////////////////////////////////////////
//sign in page
signInButton.addEventListener("click",function(){
    if(emailInputSignIn.value===""&&passwordInputSignIn.value===""){
        emailSpanSignIn.textContent="*this field is required";
        passwordSpanSignIn.textContent="*this field is required";
    }
    else if(emailInputSignIn.value===""){
        emailSpanSignIn.textContent="*this field is required";
    }
    else if(emailInputSignIn.value!==userData.email){
        emailSpanSignIn.textContent="*email doesn't match the registered email";
    }
    else{
        emailSpanSignIn.textContent="";
        if(passwordInputSignIn.value===""){
            passwordSpanSignIn.textContent="*this field is required";
        }
        else if(passwordInputSignIn.value!==userData.password){
            passwordSpanSignIn.textContent="*password doesn't match the registered password";
        } 
        else{
            window.location.replace("exam.html");
        } 
    }
    });
