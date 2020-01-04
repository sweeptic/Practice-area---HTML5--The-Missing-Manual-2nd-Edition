

function addValue() {
    var key = document.getElementById("key").value;
    var item = document.getElementById("item").value;

    localStorage.setItem(key, item);
}
/*
window.onload = function () {
    window.addEventListener("storage", storageChanged, false);
}
*/
function storageChanged(e) {
    var message = document.getElementById("updateMessage");
    message.innerHTML = "Local storage updated";
    message.innerHTML += "<br>Key: " + e.key;
    message.innerHTML += "<br>Old Value: " + e.oldValue;
    message.innerHTML += "<br>New Value: " + e.newValue;
    message.innerHTML += "<br>URL: " + e.url;
}

function processFiles(files) {
    var file = files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var output = document.getElementById("fileOutput");
        output.textContent = e.target.result;
    }
    reader.readAsText(file);
}

function showFileInput() {
    var fileInput = document.getElementById("fileInput");
    fileInput.click();
}

var dropBox;

window.onload = function () {
    dropBox = document.getElementById("dropBox");
    dropBox.ondragenter = ignoreDrag;
    dropBox.ondragover = ignoreDrag;
    dropBox.ondrop = drop;
}

function ignoreDrag(e) {
    e.stopPropagation();
    e.preventDefault();
}


function drop(e) {
    // Cancel this event for everyone else.
    e.stopPropagation();
    e.preventDefault();
    // Get the dragged-in files.
    var data = e.dataTransfer;
    var files = data.files;
    // Pass them to the file-processing function.
    processFiles(files);
}

function processFiles(files) {
    var file = files[0];
    // Create the FileReader.
    var reader = new FileReader();
    // Tell it what to do when the data URL is ready.
    reader.onload = function (e) {
        // Use the image URL to paint the drop box background
        dropBox.style.backgroundImage = "url('" + e.target.result + "')";
    };
    // Start reading the image.
    reader.readAsDataURL(file);
}