// Dom Activities
let title = document.createElement("h1");
let imgHolder = document.createElement("div");
let img = document.createElement("img");
let textHolder = document.createElement("div");
let par = document.createElement("p");
let button = document.createElement("button");

document.body.className = "body";
title.className = "title";
imgHolder.className = "imgHolder";
textHolder.className = "textHolder";
par.className = "par";
button.className = "button";

document.body.appendChild(title);
document.body.appendChild(imgHolder);
imgHolder.appendChild(img);
document.body.appendChild(textHolder);
textHolder.appendChild(par);
textHolder.appendChild(button);

// Title Shenanigans
title.innerHTML = "Lobotomy Sim";

//Img(ination) ig?
img.src = "hq720.jpg";

//Butt(on) Stuff
button.textContent = "Click Me!!!!"