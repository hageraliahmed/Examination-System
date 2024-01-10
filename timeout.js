//time out page
var timeoutDiv=document.getElementById("timeoutdiv");
var userData=JSON.parse(localStorage.getItem("user_data"));



//////////////////////////////////////////////////////////////////
timeoutDiv.innerHTML+=`<br><br><br><center><h2>Sorry ${userData.userFirstName} ${userData.userLastName} Exam time is out</h2></center>`;