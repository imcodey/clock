let days = new Date();
let mydate = days.getDate();
let mymonth = days.getMonth();
// date
document.getElementById("date").innerHTML = mydate;

// months
switch (new Date().getMonth()) {
    case 0:
        mymonth = "January";
        break;
    case 1:
        mymonth = "Febuarery";
        break;
    case 2:
        mymonth = "March";
        break;
    case 3:
        mymonth = "April";
        break;
    case 4:
        mymonth = "May";
        break;
    case 5:
        mymonth = "June";
        break;
    case 6:
        mymonth = "July";
        break;
    case 7:
        mymonth = "August";
        break;
    case 8:
        mymonth = "September";
        break;
    case 9:
        mymonth = "October";
        break;
    case 10:
        mymonth = "November";
        break;
    case 11:
        mymonth = "December";
        break;
    default:
        days = " Not This Month Days"
}
document.getElementById("month").innerHTML = mymonth;
// days
switch (new Date().getDay()) {
    case 0:
        days = "Sunday";
        break;
    case 1:
        days = "Monday";
        break;
    case 2:
        days = "Tuseday";
        break;
    case 3:
        days = "Wednessday";
        break;
    case 4:
        days = "Thrusday";
        break;
    case 5:
        days = "Friday";
        break;
    case 6:
        days = "Saturday";
        break;
    default:
        days = " Not This Week Days"
}
document.getElementById("day").innerHTML = days;
// time
const clock = () => {
    let days = new Date();
    let myhr = days.getHours();
    let mymin = days.getMinutes();
    let mysec = days.getSeconds();
    document.getElementById("time").innerHTML = `${myhr}:${mymin}:${mysec}`
}
setInterval(clock, 1000)

let d = new Date();
let day = d.getHours()
console.log(day)
// wallpaper
if(day==0 && day<=6){
    document.getElementById("clock").classList.add("midnight")
}
else if(Date()>=6 && Date()<= 12){
    document.getElementById("clock").classList.add("morning")
}
else if(day>=12 && day<= 13){
    document.getElementById("clock").classList.add("midday")
}
else if(day>=13 && day<= 17){
    document.getElementById("clock").classList.add("afternoon")
}
else if(day>=17 && day<= 21){
    document.getElementById("clock").classList.add("evening")
}