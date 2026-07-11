const kickoff = new Date("August 28, 2026 19:00").getTime();

function updateCountdown(){

const now=Date.now();

const diff=kickoff-now;

document.getElementById("days").textContent=Math.floor(diff/86400000);

document.getElementById("hours").textContent=Math.floor(diff%86400000/3600000);

document.getElementById("minutes").textContent=Math.floor(diff%3600000/60000);

document.getElementById("seconds").textContent=Math.floor(diff%60000/1000);

}

setInterval(updateCountdown,1000);

updateCountdown();

function flash(){

const l=document.getElementById("lightning");
  
l.animate([

{opacity:0},

{opacity:.8},

{opacity:0},

{opacity:.4},

{opacity:0}

],{

duration:450

});

setTimeout(flash,Math.random()*12000+7000);

}

flash();

function ember(){

const e=document.createElement("div");

e.className="spark";

e.style.left=Math.random()*100+"vw";

e.style.bottom="-10px";

e.style.animationDuration=(4+Math.random()*4)+"s";

document.getElementById("embers").appendChild(e);

setTimeout(()=>e.remove(),8000);

}

setInterval(ember,180);
