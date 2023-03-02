"use strict"
/*let userName = prompt("Enter Your Name please");
let gender = prompt("Enter Your Gender please");
if (gender !== "male" && gender !== "female") 
{
    alert(" Your gender  must be male or female");
    prompt("Enter Your Gender please");
}
let age = prompt("Enter Your Age please");
if (age <= 0 )
{
    alert("Your Age must be greater than Zero");  
    prompt("Enter Your Age please");
}
let conf = confirm("Do you wants to skip the welcoming messages")

if (conf == false)
{
 if (gender == "male")
{
    alert(" hello Mr " + userName );
    
} else if (gender == "female")
{
    alert("hello Ms " + userName );
    
} } */
let whereLiving = prompt("Do you live in jordan ?");
function living (){
if (whereLiving == "yes" || whereLiving == "no") {
     return whereLiving
}else
{
    whereLiving = "invalid"
      return whereLiving
}}
let loveProgramm = prompt("Do you love programming ?");
function loving (){
if (loveProgramm == "yes" || loveProgramm == "no") {
    return loveProgramm
}else
{
    loveProgramm = "invalid"
     return loveProgramm
}}
let knowJavascript = prompt("Do you know anything about javascript ?");
function knowing (){
if (knowJavascript == "yes" || knowJavascript == "no") {
    return knowJavascript
}else
{
    knowJavascript = "invalid"
    return knowJavascript
    
}
}
let answerArray = [];
answerArray.push(living());
answerArray.push(loving());
answerArray.push(knowing());
console.log(answerArray);




