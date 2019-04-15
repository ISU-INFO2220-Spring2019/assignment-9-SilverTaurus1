

function moveMouse(e) {
    var evnt = e || window.event;
    var x = e.x;
    var y = e.y;
    var div = document.getElementById("mouseCoords");
    div.innerText = "x: " + x + " y: " + y;
    
}

function mousePressed(e) {
    var evnt = e || window.event;
    var trgt = evnt.target || evnt.srcElement;
    var ctrgt = evnt.currentTarget;
    if (!(trgt == ctrgt)) {
        trgt.className = "pressed";
    }
    
}

function resetClass(e) {
    var evnt = e || window.event;
    var trgt = evnt.target || evnt.srcElement;
    trgt.className = "";
}

function mouseHeadOver(e) {
    var evnt = e || window.event;
    var ctrgt = evnt.currentTarget;
    ctrgt.className = "overHead";
}

window.onload = function (e) {
    var section = document.getElementById("secMouser");
    // section
    section.onmousemove = moveMouse;
    section.onmousedown = mousePressed;
    section.onmouseup = resetClass;

    // h1
    var header = document.getElementsByTagName("h1");
    for (var i = 0; i < header.length; i++) {
        header[i].onmouseover = mouseHeadOver;
        header[i].onmouseout = resetClass;
    }


    // button
    var btn = document.getElementById("btnSayHello");
    btn.onclick = function () { alert("hello"); }
    btn.onmousemove = function (e) {
        var evnt = e || window.event;
        evnt.cancelBubble = true;
        evnt.stopPropagation();

        var div = document.getElementById("mouseCoords");
        div.innerText = "Over the button";

    } 

}

