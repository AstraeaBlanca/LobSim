// Gen Variables
let prev = "hq720.jpg";

// Dom Activities
let title = document.createElement("h1");
let imgHolder = document.createElement("div");
let img = document.createElement("img");
let textHolder = document.createElement("div");
let par = document.createElement("p");
let button = document.createElement("button");
let text2;

document.body.className = "body";
title.className = "title";
imgHolder.className = "imgHolder";
img.className = "img";
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
button.textContent = "Go Next";

button.addEventListener("click", function(){
    img.src = "helb.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "You are entirely maidenless and the company doesn't like that all that much. They don't want to have to deal with telling your partner (not that you'd ever net one) how you died; therefore, they intend to have you get with someone in the company :) ";
    text2 = document.createElement("button");
    textHolder.removeChild(button);
    textHolder.appendChild(text2);
    text2.textContent = "Go Next";
    text2.className = "button";
    text2.addEventListener("click", button2);
})

 function button2(){
    img.src = "ballroom.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "The company has decided to host a Grand Ball for those maidenless such as yourself."
    let text3 = document.createElement("button");
    textHolder.removeChild(text2);
    textHolder.appendChild(text3);
    text3.textContent = "Go Next";
    text3.className = "button";
    text3.addEventListener("click", button3);
};

function button3() {
    img.src = "ballroom.jpg";
    img.innerHTML = img.src;
    let inp = document.createElement("form");
    par.innerHTML = inp;
    inp.textContent = "What would you like to be called";
    let text4 = document.createElement("button");
    textHolder.removeChild(text3);
    textHolder.appendChild(text4);
    text3.textContent = "Go Next";
    text3.className = "button";
    text3.addEventListener("click", button4);
}

function button4() {

}

