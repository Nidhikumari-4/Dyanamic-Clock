function clock(){
    var DateTime = new Date();
    var hours = DateTime.getHours();
    var minutes = DateTime.getMinutes();
    var seconds = DateTime.getSeconds();
    var days= DateTime.getDay();
    var date = DateTime.getDate();
    var months = DateTime.getMonth();
    var year = DateTime.getFullYear();

    var monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let mon = monthList[months];
    
    var week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let weekday = week[days];

    if(hours>=12){ // for am or pm
        period.innerHTML= 'PM';
    }
    else{ // for am or pm
        period.innerHTML= 'AM';
    }
    if(hours > 12){ //12 hour formate
        hours = hours - 12;
    }

    var h = document.getElementById('hour').innerHTML = hours;
    var m = document.getElementById('minutes').innerHTML = minutes;
    var s = document.getElementById('seconds').innerHTML = seconds;
    var da = document.getElementById('dayname').innerHTML = weekday;
    var dt = document.getElementById('Date').innerHTML = date;
    var mnth = document.getElementById('Month').innerHTML = mon;
    var y = document.getElementById('year').innerHTML = year;
}
setInterval(clock, 10);