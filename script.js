// history Value
function getHistory() {
    return document.getElementById("history-value").innerText;
}

//print history
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
printHistory("9+9+9+9+4")


// output Value
function getOutput() {
    return document.getElementById("output-value").innerText;
}

//print output
function printOutput(num) {
    if (num=="") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

//formatted number
function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en")
    return value;
}

// reverse Number format

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}

// Operator
var operator = document.getElementsByClassName("operator");
console.log(operator);
