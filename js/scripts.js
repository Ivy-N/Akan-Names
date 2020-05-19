var akanName=function(dd,mm,yyyy,weekday,gender){
if (dd<0 || dd>31 || mm<=0 || mm>31 || yyyy<0){
alert("You entered an invalid date. Please try again.")
}
else if (weekday===0 && gender==="male"){
alert("Your Akan Name is Kwasi!");
}
else if (weekday===1 && gender==="male"){
alert("Your Akan Name is Kwadwo!");
}
else if (weekday===2 && gender==="male"){
alert("Your Akan Name is Kwabena!");
}
else if (weekday===3 && gender==="male"){
alert("Your Akan Name is Kwaku!");
}
else if (weekday===4 && gender==="male"){
alert("Your Akan Name is Yaw!");
}
else if (weekday===5 && gender==="male"){
alert("Your Akan Name is Kofi!");
}
else if (weekday===6 && gender==="male"){
alert("Your Akan Name is Kwame!");
}
else if (weekday===0 && gender==="female"){
alert("Your Akan Name is Akosua!");
}
else if (weekday===1 && gender==="female"){
alert("Your Akan Name is Adwoa!");
}
else if (weekday===2 && gender==="female"){
alert("Your Akan Name is Abenaa!");
}
else if (weekday===3 && gender==="female"){
alert("Your Akan Name is Akua!");
}
else if (weekday===4 && gender==="female"){
alert("Your Akan Name is Yaa!");
}
else if (weekday===5 && gender==="female"){
alert("Your Akan Name is Afua!");
}
else if (weekday===6 && gender==="female"){
alert("Your Akan Name is Ama!");
}
}

var dd= Number(document.getElementById(DD));
var mm= parseInt(document.getElementById(MM));
var yyyy= parseInt(document.getElementById(YYYY));
var gender=document.getElementById(gender1);
var cc=parseInt((yyyy/100));
var yy=parseInt(yyyy-(cc*100));
var weekday=( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
var result=akanName(weekday,gender)
alert (result)
