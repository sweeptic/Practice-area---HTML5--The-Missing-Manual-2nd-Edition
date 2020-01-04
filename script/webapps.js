


function saveData() {
    //get the textbox.
    var nameInput = document.getElementById("userName");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() +":" + today.getSeconds();
    //store the text from that text box.
    localStorage.setItem("user_name", nameInput.value);
    localStorage.setItem("date_time", time);



}

function loadData() {
    if (localStorage.getItem("user_name") == null) {
        alert("you have not entered a name yet.")
    } else {
        document.getElementById("userName").value =
            localStorage.getItem("user_name");

        document.getElementById("dateTime").value =
        localStorage.getItem("date_time");
    }
}

function clearData() {
    sessionStorage.clear();
}

function dumpData() {
    var datas;
    for(var i=0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var item = localStorage.getItem(key);
        datas = datas + item + ", ";
    }

    alert(datas);
}



