var slideNumber = 0;
var req = new XMLHttpRequest();


function nextSlide() {
    if (slideNumber == 5) {
        slideNumber = 1;
    } else {
        slideNumber += 1;
    }
    history.pushState(slideNumber, null, "ChinaSites" + slideNumber + ".html")
    goToNewSlide();
    false;
}

function previousSlide() {
    if (slideNumber == 1) {
        slideNumber = 5;
    } else {
        slideNumber -= 1;
    }
    history.pushState(slideNumber, null, "ChinaSites" + slideNumber + ".html")
    goToNewSlide();
    false;
}

window.onpopstate(e) = function (e){
    alert("pop");
    if (e.state != null) {
        slideNumber = e.state;
        goToNewSlide();
        
    }
}


function goToNewSlide() {
    if (req != null) {
        // Prepare a request for the file with the slide data.
        req.open("GET", "ChinaSites" + slideNumber + "_slide" + ".html", true);
        // Set the function that will handle the slide data.
        req.onreadystatechange = newSlideReceived;
        // Send the request.
        req.send();
    }
}

function newSlideReceived() {
    if ((req.readyState == 4) && (req.status == 200)) {
        document.getElementById("slide").innerHTML = req.responseText;
    }
}