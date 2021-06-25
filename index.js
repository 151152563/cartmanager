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
    // document
    // let valIndicator = element.childNodes[1].childNodes[5].className;
    let valIndicator = element
    $(`.${valIndicator}`).animate({ top: `${height}px` }, 100, changeColor(`${valIndicator}`, `${height}px`))
}


function changeColor(element, top) {
    elementSelect = document.querySelector(`.${element}`)
    if (top <= "25px") {
        $(`.${elementSelect.className}`).css("background-color", "red")

    } else if (top <= "50px") {
        $(`.${elementSelect.className}`).css("background-color", "orange")

    } else if (top <= "75px") {
        $(`.${elementSelect.className}`).css("background-color", "yellow")

    } else if (top <= "99px") {

        $(`.${elementSelect.className}`).css("background-color", "green")
    }
}



function runTest() {
    inputVal = document.getElementById("test").value
    let i = 100;
    let intervalBet = setInterval(() => {
        if (i > (inputVal)) {
            animateBar("value-indicator", i)
            i -= 1
        } else {
            clearInterval(intervalBet)
            console.log("Stoped Interval");
        }
    }, 10);
    // changeColor("value-indicator")
}
// $(document).ready(function() {});

// Revebe 12 => 88%