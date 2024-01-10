//registration page
var registrationDiv=document.getElementById("registration");
var firstNameInput=document.getElementById("firstnameinput");
var lastNameInput=document.getElementById("lastnameinput");
var emailInput=document.getElementById("emailinput");
var passwordInput=document.getElementById("passwordinput");
var reenterPasswordInput=document.getElementById("reenterpasswordinput");
var firstNameSpan=document.getElementById("firstnamespan");
var lastNameSpan=document.getElementById("lastnamespan");
var emailSpan=document.getElementById("emailspan");
var passwordSpan=document.getElementById("passwordspan");
var confirmPasswordSpan=document.getElementById("confirmpasswordspan");
var rgtSubmit=document.getElementById("registerationsubmit");


////////////////////////////////////////////////////////////////////////////////


var emailREX=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordRex=/^.{8,}$/;
var nameRex=/^[a-zA-Z]+$/;



//////////////////////////////////////////////////////////////////
//registration page
rgtSubmit.addEventListener("click",function(){
if(firstNameInput.value===""&&lastNameInput.value===""&&emailInput.value===""&&passwordInput.value===""&&reenterPasswordInput.value===""){
    firstNameSpan.textContent="*this field is required";
    lastNameSpan.textContent="*this field is required"
    emailSpan.textContent="*this field is required"
    passwordSpan.textContent="*this field is required"
    confirmPasswordSpan.textContent="*this field is required"
}
else if(firstNameInput.value===""){
    firstNameSpan.textContent="*this field is required"; 
}
else if(!nameRex.test(firstNameInput.value)){
    firstNameSpan.textContent="*enter characters only"; 
}
else{
    firstNameSpan.textContent="";
    if(lastNameInput.value===""){
        lastNameSpan.textContent="*this field is required"; 
    }
    else if(!nameRex.test(lastNameInput.value)){
        lastNameSpan.textContent="*enter characters only"; 
    }
    else{
        lastNameSpan.textContent=""; 
        if(emailInput.value===""){
            emailSpan.textContent="*this field is required"; 
        }
        else if(!emailREX.test(emailInput.value)){
            emailSpan.textContent="*enter valid email"; 
        }
        else{
            emailSpan.textContent=""; 
            if(passwordInput.value===""){
                passwordSpan.textContent="*this field is required"; 
            }
            else if(!passwordRex.test(passwordInput.value)){

                passwordSpan.textContent="*password length should be more than or equal 8"; 
                
            }
            else{
                passwordSpan.textContent="";
                if(reenterPasswordInput.value===""){
                   confirmPasswordSpan.textContent="*this field is required"; 
                }
                else if(!passwordRex.test(reenterPasswordInput.value)){
                    confirmPasswordSpan.textContent="*password length should be more than or equal 8"; 
                }
                else if(reenterPasswordInput.value!==passwordInput.value){
                    confirmPasswordSpan.textContent="*password doesn't match";
                }
                else{
                    var user = {
                        userFirstName: firstNameInput.value,
                        userLastName:lastNameInput.value,
                        email: emailInput.value,
                        password:passwordInput.value
                      };
                      var jsonString = JSON.stringify(user);
                      localStorage.setItem("user_data", jsonString);
                      window.location.replace("signin.html");
                }
            }
        }
    }
}
});





  







