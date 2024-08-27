const is = document.getElementById("vivek");
var s;
function Onsubmit() {
    s = is.value;
    tododiv(s);
}

function tododiv(s) {
    var div = document.createElement("div");
    div.innerHTML = s;
    document.body.append(div);
    localStorage.setItem("todo", s);
}


function onreload(){
    var div = document.createElement("div");
    div.innerHTML = localStorage.getItem("todo");
    document.body.append(div);
}

function onremove(){
    localStorage.clear();
    window.location.reload();
}

function deletetask(s){
    localStorage.removeItem(s);
    window.location.reload();
}






