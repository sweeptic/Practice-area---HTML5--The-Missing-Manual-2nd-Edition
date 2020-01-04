function startEdit(){
    var element = document.getElementById("editableElement");
    element.contentEditable = true;

}

function stopEdit(){
    var element = document.getElementById("editableElement");
    element.contentEditable = false;
    alert("Your edited content: " + element.innerHTML);
}
