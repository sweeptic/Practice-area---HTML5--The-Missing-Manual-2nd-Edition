
var req = new XMLHttpRequest();

function askServer() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var dataToSend = "?number1" + number1 + "&number2" + number2;

    req.open("GET", "WebCalculator.php" + dataToSend, true);
    req.onreadystatechange = handleServerResponse;
    req.send();

    document.getElementById("result").innerHTML = "The request has benn sent.";
}


function handleServerResponse() {
    if((req.status == 200) && (req.readyState == 4)) {
        var result = req.responseText;
        document.getElementById("result").innerHTML = "The answer is: " + result + ".";
    }
}

