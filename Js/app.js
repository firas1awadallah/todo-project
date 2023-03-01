var userName = prompt("Enter Your Name please");
var gender = prompt("Enter Your Gender please");
if (gender !== "male" && gender !== "female") 
{
    alert(" Your gender  must be male or female");
    prompt("Enter Your Gender please");
}
var age = prompt("Enter Your Age please");
if (age <= 0 )
{
    alert("Your Age must be greater than Zero");  
    prompt("Enter Your Age please");
}
var conf = confirm("Do you wants to skip the welcoming messages")

if (conf == false)
{
 if (gender == "male")
{
    alert(" hello Mr " + userName );
    
} else if (gender == "female")
{
    alert("hello Ms " + userName );
    
} 

}



