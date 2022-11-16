let bookData = [
    { pageNumber: 1, pageHeading: "Imaya Schooling", pageContent: "She studied in Govn. Hr sec school" },
    { pageNumber: 2, pageHeading: "Imaya Characteristic", pageContent: "She is very matured girl" },
    { pageNumber: 3, pageHeading: "Imaya Hobbies", pageContent: "Dancing, Singing, Reading, Watching Movies" },
]
loadTableData(bookData)

function loadTableData(data) {
    var table = document.getElementById("tableData")

    for (var i = 0; i < data.length; i++) {
        var row = "<tr><td>" + data[i].pageNumber + "</td><td>" + data[i].pageHeading + "</td><td>" + data[i].pageContent + "</td> </tr>"
        table.innerHTML += row;
    }
}
var AddToBook = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
    var textHeading = document.getElementById("text-heading");
    var textContent = document.getElementById("text-content");
    var page = {};

    page.pageNumber = bookData.length+1;
    page.pageHeading = textHeading.value;
    page.pageContent=textContent.value;
    bookData.push(page);
    document.getElementById("tableData").innerHTML="";
    loadTableData(bookData)
    textHeading.value=""
    textContent.value=""
}

    



