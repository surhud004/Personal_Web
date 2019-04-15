var fontcolors = ["#FF1493", "#74EE15", "#4DEEEA", "#FFE700" , "#FF6800", "#FF355E", "#FD5B78", "#CCFF00", 
"#66FF66", "#FF00CC"];
//pink, green, blue, yellow, orange, radical red, wild watermelon, electric lime, screaming green, hot magenta

var randomcolortitle = fontcolors[Math.floor(Math.random() * fontcolors.length)];
document.getElementById('header-title').style.color = randomcolortitle;

var randomcolorbody = fontcolors[Math.floor(Math.random() * fontcolors.length)];
document.getElementById('main-content').style.color = randomcolorbody;
document.getElementByClassName('quotes').style.color = randomcolorbody;