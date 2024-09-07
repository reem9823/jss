function validate(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("pass").value;
var confirm = document.getElementById("confirm").value;
var message = document.getElementById("error");
message.style.color="#fff";
message.style.textAlign="center";
message.style.backgroundColor="#f00";
message.style.transition="all 1s ease";
if(name=="" &&email=="" &&password=="" &&confirm==""){
    message.innerHTML="please inter data";
    return false;
 }else if ( name.length<5 || name.length>15){
    message.innerHTML="please inter 5-15 character in username";
    return false;
 }else if ( email.indexOf("@") =="-1"){
    message.innerHTML="please inter valid email";
    return false;
 }else if ( password.length<=8 ){
    message.innerHTML="please inter at least 8 character";
    return false;
 }else if ( password != confirm ){
    message.innerHTML="please matched password";
    return false;
 }else{
    return true ;
 }



}