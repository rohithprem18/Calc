function dis(val) {
    document.getElementById("result").value += val;
}

function clr() {
    document.getElementById("result").value = "";
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function percent() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    let percentage = y / 100;
    document.getElementById("result").value = percentage;
}