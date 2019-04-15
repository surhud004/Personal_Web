setTimeout(function () {
  typeWriter();
}, 5000);

var i = 0;
var txt = "Hello! My name is Surhud.";
var txt1 = "A student from India, currently studying Computer Science.";
var txt2 = "I am the creative mind behind what you see right now!";
var txt3 = "My motto is - Code but keep it simple!";
var txt4 = "Let's go to the main page!";
var txt5 = "terminal.exit";
var txt6 = "homepage.load";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    document.getElementById("typewriter1").style.visibility = "visible";
    document.getElementById("cur").style.visibility = "hidden";
    i=0;
    typeWriter1();
  }
}

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("cur1").style.visibility = "visible";
    document.getElementById("typewriter1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
  else {
    document.getElementById("typewriter2").style.visibility = "visible";
    document.getElementById("cur1").style.visibility = "hidden";
    i=0;
    typeWriter2();
  }
}

function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("cur2").style.visibility = "visible";
    document.getElementById("typewriter2").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
  else {
    document.getElementById("typewriter3").style.visibility = "visible";
    document.getElementById("cur2").style.visibility = "hidden";
    i=0;
    typeWriter3();
  }
}

function typeWriter3() {
  if (i < txt3.length) {
    document.getElementById("cur3").style.visibility = "visible";
    document.getElementById("typewriter3").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter3, speed);
  }
  else {
    document.getElementById("typewriter4").style.visibility = "visible";
    document.getElementById("cur3").style.visibility = "hidden";
    i=0;
    typeWriter4();
  }
}

function typeWriter4() {
  if (i < txt4.length) {
    document.getElementById("cur4").style.visibility = "visible";
    document.getElementById("typewriter4").innerHTML += txt4.charAt(i);
    i++;
    setTimeout(typeWriter4, speed);
  }
  else {
    document.getElementById("typewriter5").style.visibility = "visible";
    document.getElementById("cur4").style.visibility = "hidden";
    i=0;
    typeWriter5();
  }
}

function typeWriter5() {
  if (i < txt5.length) {
    document.getElementById("cur5").style.visibility = "visible";
    document.getElementById("typewriter5").innerHTML += txt5.charAt(i);
    i++;
    setTimeout(typeWriter5, speed);
  }
  else {
    document.getElementById("typewriter6").style.visibility = "visible";
    document.getElementById("cur5").style.visibility = "hidden";
    i=0;
    typeWriter6();
  }
}

function typeWriter6() {
  if (i < txt6.length) {
    document.getElementById("cur6").style.visibility = "visible";
    document.getElementById("typewriter6").innerHTML += txt6.charAt(i);
    i++;
    setTimeout(typeWriter6, speed);
  }
  else {
    document.getElementById("cur6").style.visibility = "hidden";
    document.getElementById("typewriter6").innerHTML += "<span class='cursor'>_</span>";
    i=0;
    setTimeout(function () {
      window.location.href = "home.html";
    }, 5000);
  }
}