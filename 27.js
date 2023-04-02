function Clock() {
    d= new Date();
    hh= d.getHours();
    mm= d.getMinutes();
    ss= d.getSeconds();

    cTime= hh + ":" + m + ":" + ss ;
    document.getElementById('clock').innerHTML = cTime ;
}

setInterval(Clock, 1000);