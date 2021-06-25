let weight_1 = 0
let weight_2 = 0
let weight_3 = 0
let weight_4 = 0
let max_weight = 100
let min_weight = 0


function getIndicatorByIndex(index) {
    return valIndicator = document.getElementsByClassName("value-indicator")[index]
}

function sendToScreen(element, index, value) {
    let valNumber = document.getElementsByClassName(element)
    let selectedValNumber = valNumber[index];

    if (selectedValNumber != null) {
        selectedValNumber.innerHTML = value
    }
    return value
}

function clearValues() {
    let valNumber = document.getElementsByClassName("value-number")
    let valIndicator = document.getElementsByClassName("value-indicator")

    for (const key in valNumber) {
        valNumber[key].innerHTML = "0"
    }

    for (const key in valIndicator) {
        valIndicator[key].className
        if (valIndicator[key].className != undefined) {
            $(`.${valIndicator[key].className}`).animate({ top: "100px" }, 50)
        }
    }
}


function animateBar(element, height) {
    element.style.top = `${(100 - height)}%`
    return height
}


function changeColor(element, top) {
    if (top <= 25) {
        element.style.backgroundColor = "green"

    } else if (top <= 50) {
        element.style.backgroundColor = "yellow"

    } else if (top <= 75) {
        element.style.backgroundColor = "orange"

    } else if (top <= 99) {
        element.style.backgroundColor = "red"
    }
}



function runTest() {
    let i = 0
    inputVal = document.getElementById("test").value

    let intervalBet = setInterval(() => {
        if (inputVal >= i) {
            changeColor(getIndicatorByIndex(0),animateBar(getIndicatorByIndex(0), sendToScreen("value-number", 0, i)))
            changeColor(getIndicatorByIndex(1),animateBar(getIndicatorByIndex(1), sendToScreen("value-number", 1, i)))
            changeColor(getIndicatorByIndex(3),animateBar(getIndicatorByIndex(3), sendToScreen("value-number", 3, i)))
            changeColor(getIndicatorByIndex(4),animateBar(getIndicatorByIndex(4), sendToScreen("value-number", 4, i)))
            i += 1
        } else {
            clearInterval(intervalBet)
            console.log("Stoped Interval");
        }
    }, 15);



    // changeColor("value-indicator")
}
// $(document).ready(function() {});

// Revebe 12 => 88%