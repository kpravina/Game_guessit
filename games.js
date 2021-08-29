var guess=Math.floor(Math.random()*100)+1

function findNumber()
{   

    if(document.getElementById('in').value=='')
        {
         document.getElementById(("out").innerHTML)="Enter a number.."
         return 
        }
  
var num=parseInt(document.getElementById("in").value)
    // console.log(typeof num)
if(num>100 || num<1)
{
    document.getElementById("out").innerHTML="The number is out of Range"
    return
}
if(num===guess)
{
    document.getElementById("out").innerHTML="KUDOS..YOU HAVE FINDED CORRECT NUMBER"
}
else if(num>guess)
{
    document.getElementById("out").innerHTML="Guess a small number"
}
else
{
document.getElementById("out").innerHTML="Guess a greater number"
}
}