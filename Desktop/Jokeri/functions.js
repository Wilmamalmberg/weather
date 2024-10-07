function myCreateFunction() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "";
    for (var i = 0; i < 7; i++) {
        var numberDiv = document.createElement("div");
        numberDiv.innerHTML = Math.floor(Math.random() * 10);
        numberDiv.className = "number-box";
        cell.appendChild(numberDiv);
    }
    var rowCount = document.getElementById("rowCount");
    rowCount.innerHTML = parseInt(rowCount.innerHTML) + 1;
}