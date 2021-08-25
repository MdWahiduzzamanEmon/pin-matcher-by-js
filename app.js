document.getElementById("generatePin").addEventListener('click', genaratePin);

function genaratePin() {
    const pin = pinNumber();
    document.getElementById('pin-input').value = pin;
    // pinNumber();
    
}

function pinNumber() {
     const pin = Math.round(Math.random() * 100000);
    const createPin = pin + "";
    
    if (createPin.length == 5) {
        return pin;
    } else {
        return pinNumber();
    }
}

// document.getElementById('buttton-parents').addEventListener('click', function (event) {
//     console.log(event.target.innerText)
// })

const buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        const value = event.target.innerText;
        const calcNumber = document.getElementById('calc-input');
        
        if (isNaN(value)) {
            if (value == "C") {
                calcNumber.value = "";
            } else if (this.id == "backspace") {
                calcNumber.value = calcNumber.value.substr(0,calcNumber.value.length-1);
            }
        } else {
        const previousValue = calcNumber.value;
        const newNumber = previousValue + value;
        calcNumber.value = newNumber;
        }
        
    })
}

document.getElementById('submitBtn').addEventListener('click', function () {
    const calcNumber = document.getElementById('calc-input').value;
    const pinNumber = document.getElementById('pin-input').value;
    if (pinNumber == "" && calcNumber == "") {
        document.getElementById('notify-notMatch').style.display = "block"
        document.getElementById('notify-match').style.display = "none";
        document.getElementById('calc-input').value = "";
        document.getElementById('pin-input').value = "";
    }
    else if (pinNumber == calcNumber) {
        document.getElementById('notify-match').style.display = "block";
        document.getElementById('notify-notMatch').style.display = "none"
        document.getElementById('calc-input').value = "";
        document.getElementById('pin-input').value = "";
    } else if (pinNumber != calcNumber) {
        document.getElementById('notify-notMatch').style.display = "block"
        document.getElementById('notify-match').style.display = "none";
        document.getElementById('calc-input').value = "";
        document.getElementById('pin-input').value = "";
    } 
})