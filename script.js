// history Value
function getHistory() {
    return document.getElementById("history-value").innerText;
}

//print history
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}


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
    if (num == "-") {
        return "";
    }
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

for(var i = 0; i< operator.length; i++) {
    operator[i].addEventListener("click", function() {
        // Clear
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        // Backspace
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();

            if (output) { //If Output has a value
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        } 
        else {
            var output = getOutput();
            var history = getHistory();

            // Check output is empty and history's last is operator
            if(output == "" && history!="") {
                if(isNaN(history[history.length-1])) {
                    history = history.substr(0, history.length-1);
                }
            }

            if (output!="" || history!= "") {
                output = output == "" ? output:reverseNumberFormat(output);
                history += output;

                // Equal operator
                if(this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } 
                // Other operator
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }


    })
}
// numbers
var number = document.getElementsByClassName("number");

for(var i = 0; i< number.length; i++) {
    number[i].addEventListener("click", function() {
        var output = reverseNumberFormat(getOutput());
        output += this.id;
        printOutput(output);
    })
}