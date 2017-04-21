var current = 0;
var images = ['img/Gintama.jpg', 'img/Hyouka.jpg', 'img/Kyoukai%20no%20Kanata.jpg', 'img/Noragami.jpg', 'img/Tokyo%20Ghoul.jpg'];
var descriptions = ['Gintama', 'Hyouka', 'Kyoukai no Kanata', 'Noragami', 'Tokyo Ghoul'];
var interval;
var time = 2000;
var action = "";

var thumbs = ["gintama", "hyouka", "kyoukai", "noragami", "tokyo"];

function changeThumbs() {
    
    for(var i = 0; i < images.length; i++) {
        if(i !== current)
            document.getElementById(thumbs[i]).style.opacity = 0.5;
    }
    
    document.getElementById(thumbs[current]).style.opacity = 1;
    
}

changeThumbs();

function clickThumbs(imgSrc) {
    
    for(var i = 0; i < images.length; i++) {
        if("img/" + imgSrc.replace(/^.*[\\\/]/, '') == images[i]) {
            document.getElementById("slideshow").src = images[i];
            document.getElementById('desc').innerHTML = descriptions[i];
            current = i;
            changeThumbs();
        }
    }
    
}

function playSlideShow() {
    
    action = document.getElementById('playButton').innerHTML;
    
    if(action == "Play") {
        document.getElementById('playButton').innerHTML = "Stop";
        interval = setInterval(nextImg, time);
        document.getElementById("playFirst").disabled = true;
        document.getElementById("playFirst").style.opacity = 0.25;
        document.getElementById("playPrev").disabled = true;
        document.getElementById("playPrev").style.opacity = 0.25;
        document.getElementById("playNext").disabled = true;
        document.getElementById("playNext").style.opacity = 0.25;
        document.getElementById("playLast").disabled = true;
        document.getElementById("playLast").style.opacity = 0.25;
        
    } else {
        document.getElementById('playButton').innerHTML = "Play";
        clearInterval(interval);
        document.getElementById("playFirst").disabled = false;
        document.getElementById("playFirst").style.opacity = 1;
        document.getElementById("playPrev").disabled = false;
        document.getElementById("playPrev").style.opacity = 1;
        document.getElementById("playNext").disabled = false;
        document.getElementById("playNext").style.opacity = 1;
        document.getElementById("playLast").disabled = false;
        document.getElementById("playLast").style.opacity = 1;
        
    }
    
}

function nextImg() {
    
    if(current < images.length - 1) {
        current++;
    } else {
        current = 0;
    }
    
    document.getElementById("slideshow").src = images[current];
    document.getElementById("desc").innerHTML = descriptions[current];
    changeThumbs();
    
}

function prevImg() {
    
    if(current == 0) {
        current = images.length - 1;
    } else {
        if(current > 0) {
            current--;
        } else {
            current = images.length - 1;
        }   
    }
    
    document.getElementById("slideshow").src = images[current];
    document.getElementById("desc").innerHTML = descriptions[current];
    changeThumbs();
    
}

function firstImg() {
    
    document.getElementById("slideshow").src = images[0];
    document.getElementById('desc').innerHTML = descriptions[0];
    current = 0;
    changeThumbs();
    
}

function lastImg() {
    
    document.getElementById("slideshow").src = images[images.length - 1];
    document.getElementById('desc').innerHTML = descriptions[descriptions.length  - 1];
    current = images.length - 1;
    changeThumbs();
    
}