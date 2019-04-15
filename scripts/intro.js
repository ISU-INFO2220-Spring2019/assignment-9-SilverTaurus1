
// Variables
var loadLast = "I loaded last."
var arrayHolder;

alert("The script in the header has run.")

if (arrayHolder == undefined)
    arrayHolder = [];
else
    alert("Array was not undefined.");

// Add numbers to array
arrayHolder[0] = 34;
arrayHolder[1] = 5.5;
arrayHolder[2] = 33.5;
arrayHolder[3] = 46.5;
arrayHolder[4] = 59;
arrayHolder[5] = 64;
arrayHolder[6] = 43;
arrayHolder[7] = 64;
arrayHolder[8] = 48;
arrayHolder[9] = 49;
arrayHolder[10] = 40;
arrayHolder[11] = 59;
arrayHolder[12] = 44;
arrayHolder[13] = 54;
arrayHolder[14] = 19.5;
arrayHolder[15] = 25;
arrayHolder[16] = 69;
arrayHolder[17] = 23;

var average = 0;
for (var index = 0; index < arrayHolder.length; index++) {
    average += arrayHolder[index];
}

average = average / arrayHolder.length;
alert(average);

// Function returns my name
function returnName() {
    return "Daniel";
}

var textOut = "";
function setDivEvents(div) {
div.onclick = function () {
    textOut += " Apple";
    alert(textOut);
}     
    var divInner = div.getElementsByTagName("div");
    divInner[0].onclick = function () { textOut += " Bananna"; }

    var para = div.getElementsByTagName("p");
    para[0].onclick = function () { textOut += " Cherry"; }

    var spns = div.getElementsByTagName("span");
    spns[0].onclick = function () { textOut += this.innerText; }

    var its = div.getElementsByTagName("i");
    its[0].onclick = function (e) {
        e = e || window.event; e.stopPropagation();
        textOut += this.innerText;
    }
}

var div = document.getElementById("divFour");
setDivEvents(div);