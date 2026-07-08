const kickoff = new Date("August 28, 2026 19:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = kickoff-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();

function lightning(){

document.querySelector(".lightning").classList.add("flash");

setTimeout(()=>{

document.querySelector(".lightning").classList.remove("flash");

},500);

const next=Math.random()*12000+8000;

setTimeout(lightning,next);

}

lightning();
