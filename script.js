// Very Crackpot code btw, I'm sorry in advance

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
let text3;
let text4;
let text5;
let text6;
let text7;
let text8;
let text9;
let text10;
let text11;
let text12;
let text13;
let text14;
let text15;
let text16;
let text17;
let text18;
let inp;
let Uname;

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

//Img Source ig?
img.src = "hq720.jpg";

//Button Stuff
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
    text3 = document.createElement("button");
    textHolder.removeChild(text2);
    textHolder.appendChild(text3);
    text3.textContent = "Go Next";
    text3.className = "button";
    text3.addEventListener("click", button3);
};

function button3() {
    img.src = "ballroom.jpg";
    img.innerHTML = img.src;
    inp = document.createElement("input");
    par.innerHTML = "What would you like to be called? ";
    par.appendChild(inp);
    Uname = inp.value;
    text4 = document.createElement("button");
    textHolder.removeChild(text3);
    textHolder.appendChild(text4);
    text4.textContent = "Go Next";
    text4.className = "button";
    text4.addEventListener("click", button4);
}

function button4() {
    Uname = inp.value
    img.src = "ballroom.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "Alright " + Uname + " should work!";
    text5 = document.createElement("button");
    textHolder.removeChild(text4);
    textHolder.appendChild(text5);
    text5.textContent = "Go Next";
    text5.className = "button";
    text5.addEventListener("click", button5);
}

function button5() {
    img.src = "ballroom.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "Now that you are ready, lets start this Match Making Ball tm";
    text6 = document.createElement("button");
    textHolder.removeChild(text5);
    textHolder.appendChild(text6);
    text6.textContent = "Go Next";
    text6.className = "button";
    text6.addEventListener("click", button6);
}

function button6(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "This is Angela, your secretary/emotional support robot";
    text7 = document.createElement("button");
    textHolder.removeChild(text6);
    textHolder.appendChild(text7);
    text7.textContent = "Go Next";
    text7.className = "button";
    text7.addEventListener("click", button7);
}

function button7(){
    img.src = "Noodles.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "Shes.... How do we say it....";
    text8 = document.createElement("button");
    textHolder.removeChild(text7);
    textHolder.appendChild(text8);
    text8.textContent = "Go Next";
    text8.className = "button";
    text8.addEventListener("click", button8);
}

function button8(){
    img.src = "Noodles.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "Special... Yea Thats Probably the right word.";
    text9 = document.createElement("button");
    textHolder.removeChild(text8);
    textHolder.appendChild(text9);
    text9.textContent = "Go Next";
    text9.className = "button";
    text9.addEventListener("click", button9);
}

function button9(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "Anyways~ this is the girl you've set your sights on (Rather creepy huh...)";
    text10 = document.createElement("button");
    textHolder.removeChild(text9);
    textHolder.appendChild(text10);
    text10.textContent = "Go Next";
    text10.className = "button";
    text10.addEventListener("click", button10);
}

function button10(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "Shes kept you sane while you watch all of your agents get brutally mangled!";
    text11 = document.createElement("button");
    textHolder.removeChild(text10);
    textHolder.appendChild(text11);
    text11.textContent = "Go Next";
    text11.className = "button";
    text11.addEventListener("click", button11);
}

function button11(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "You've finally gathered your courage to go ask her out";
    text12 = document.createElement("button");
    textHolder.removeChild(text11);
    textHolder.appendChild(text12);
    text12.textContent = "Go Next";
    text12.className = "button";
    text12.addEventListener("click", button12);
}

function button12(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = 'You walk up there and ask "Angela... Will you go out with me?"';
    text13 = document.createElement("button");
    textHolder.removeChild(text12);
    textHolder.appendChild(text13);
    text13.textContent = "Go Next";
    text13.className = "button";
    text13.addEventListener("click", button13);
}

function button13(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "...";
    text14 = document.createElement("button");
    textHolder.removeChild(text13);
    textHolder.appendChild(text14);
    text14.textContent = "Go Next";
    text14.className = "button";
    text14.addEventListener("click", button14);
}

function button14(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = ".....";
    text15 = document.createElement("button");
    textHolder.removeChild(text14);
    textHolder.appendChild(text15);
    text15.textContent = "Go Next";
    text15.className = "button";
    text15.addEventListener("click", button15);
}

function button15(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "She finally responds...";
    text16 = document.createElement("button");
    textHolder.removeChild(text15);
    textHolder.appendChild(text16);
    text16.textContent = "Go Next";
    text16.className = "button";
    text16.addEventListener("click", button16);
}

function button16(){
    img.src = "Angie.jpg";
    img.innerHTML = img.src;
    par.innerHTML = Uname + " I Like Women...";
    text17 = document.createElement("button");
    textHolder.removeChild(text16);
    textHolder.appendChild(text17);
    text17.textContent = "Go Next";
    text17.className = "button";
    text17.addEventListener("click", button17);
}

function button17(){
    img.src = "GirlKisser.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "That's Right Baby. She's GAY!!!!";
    text18 = document.createElement("button");
    textHolder.removeChild(text17);
    textHolder.appendChild(text18);
    text18.textContent = "Go Next";
    text18.className = "button";
    text18.addEventListener("click", button18);
}

function button18(){
    img.src = "getSHITON.gif";
    img.innerHTML = img.src;
    par.innerHTML = "ggs my man!";
    titleScreen = document.createElement("button");
    textHolder.removeChild(text18);
    textHolder.appendChild(titleScreen);
    titleScreen.textContent = "Go Title";
    titleScreen.className = "button";
    titleScreen.addEventListener("click", returnTitle);
}

function returnTitle() {
    img.src = "hq720.jpg";
    img.innerHTML = img.src;
    par.innerHTML = "You can't T-T";
    textHolder.removeChild(titleScreen);
}