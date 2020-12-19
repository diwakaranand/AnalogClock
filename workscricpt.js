const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//function so we can call this to run
function runTheClock() {

    // set up a new date object
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Min: " + min + " sec: " + sec);

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = sec * 360 / 60;

    /*this will create a smooth animation for the ticking of the seconds hand but it might not be accurate
       -- when the browser is throttled down when switching tabs
    hrPosition = hrPosition + (30 / 360);
    minPostion = minPosition + (6 / 60);
    secPosition = secPosition + 6; */

    //apply the numbers above as degrees
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//this run the function every second , using the setInterval . gets a fixed time delay between each call
var interval = setInterval(runTheClock, 1000); // every 1000 milliseconds is every second
