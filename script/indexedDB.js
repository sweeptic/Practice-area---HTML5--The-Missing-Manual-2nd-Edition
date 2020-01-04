

function LinkRecord(name, url, description, notes) {
    this.name = name;
    this.url = url;
    this.description = description;
    this.notes = notes;
}



var database;

window.onload = function () {

    var request = window.indexedDB.open("LinksDB2", 1);

    request.onsuccess = function (event) {

        database = request.result;
        showLinks();
    }


    request.onerror = function (event) {
        alert(request.error + " occured.")
    };

    request.onupgradeneeded = function (event) {
        var db = request.result;
        var objectStore = db.createObjectStore("Links", { keyPath: "url" });
    }
}



function addLink() {
    var name = document.getElementById("name").value;
    var url = document.getElementById("url").value;
    var description = document.getElementById("description").value;
    var notes = document.getElementById("notes").value;

    var linkRecord = new LinkRecord(name, url, description, notes);

    var transaction = database.transaction(["Links"], "readwrite");



    var objectStore = transaction.objectStore("Links");
    var request = objectStore.put(linkRecord);


    request.onerror = function (event) {
        alert(request.error + " occured.")
    };

    request.onsuccess = function (event) {
        showLinks()
    };
}




function showLinks() {


    var transaction = database.transaction(["Links"], "readonly");
    var objectStore = transaction.objectStore("Links");

    var request = objectStore.openCursor();

    var markupToInsert = "";

    request.onsuccess = function (event) {
        var cursor = event.target.result;


        if (cursor) {
            var linkRecord = cursor.value;


            markupToInsert += "<a href=" + linkRecord.url + ">" + linkRecord.name +
                "</a><br>";
            cursor.continue();
        }



        var resultsElement = document.getElementById("links");
        resultsElement.innerHTML = markupToInsert;


    }

}


