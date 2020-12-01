var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var year = time.getFullYear();
var month = time.getMonth();
var day = time.getDate();

if (month == 0){
    month = "Jan";
}
if (month == 1){
    month = "Feb";
}
if (month == 2){
    month = "Mar";
}
if (month == 3){
    month = "Apr";
}
if (month == 4){
    month = "May";
}
if (month == 5){
    month = "Jun";
}
if (month == 6){
    month = "Jul";
}
if (month == 7){
    month = "Aug";
}
if (month == 8){
    month = "Sep";
}
if (month == 9){
    month = "Oct";
}
if (month == 10){
    month = "Nov";
}
if (month == 11){
    month = "Dec";
}

if(day < 10){
    day = "0"+day;
}

if(hour < 10){
    hour = "0"+hour;
}

if(min < 10){
    min = "0"+min;
}

console.log(hour);

document.getElementById("year").innerHTML = year;
document.getElementById("month").innerHTML = month;
document.getElementById("day").innerHTML = day;
document.getElementById("hours").innerHTML = hour;
document.getElementById("minutes").innerHTML = min;

var hatter = Math.round(Math.random()*7 + 1);

document.body.style.backgroundImage = "url("+hatter+".png)";

console.log(hatter);
