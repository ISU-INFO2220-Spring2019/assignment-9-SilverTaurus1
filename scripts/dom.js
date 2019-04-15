


var fName = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var lName = ["Flinstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var ages = [36, 34, 7, 34, 32, 8];

function showInnerText() {
    var pNode = document.getElementById("pOne");
    var text = pNode.innerText;
    alert(text);
}

function ShowInnerHTML() {
    var pNode = document.getElementById("pOne");
    var HTML = pNode.innerHTML;
    alert(HTML);
}

function numberList() {
    var pNode = document.getElementsByTagName("li");
    var num = 1;
    for (var i = 0; i < pNode.length; i++) {
        var textNode = document.createTextNode(num);
        var liNode = pNode[i];
        liNode.innerText += " " + num;
        num++;
    }
 
}

function markRows() {
    var pNode = document.getElementsByTagName("tr");
    for (var i = 0; i < pNode.length; i++) {
        if (!(i % 2 == 0)) {
            pNode[i].className = "other";
        }
    }
}

function addRows() {
    var pNode = document.getElementById("tblAddRows");

    for (var i = 0; i < fName.length; i++) {
        pNode.innerHTML += "<tr><td>" + fName[i] + "</td><td>" + lName[i] + "</td><td>" + ages[i] + "</td></tr>";
    }
    markRows();
}


function addSuccess() {
    createDiv("success", "This is a Success Message.");
}

function addWarning() {
    createDiv("warning", "This is a Warning Message!");
}

function addError() {
    createDiv("error", "This is an Error Message.");
}


function createDiv(divClassName, divMessage) {
    var divNode = document.createElement("div");
    divNode.className = divClassName;
    var textNode = document.createTextNode(divMessage);
    divNode.appendChild(textNode);
    var pNode = document.getElementById("divMessages");
    pNode.appendChild(divNode);
}