const previousOperationText = document.querySelector(".previous-operation")

const currentOperationText = document.querySelector(".current-operation")

const button = document.querySelectorAll(".button-container button") 

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""

    }
    addDigit(digit){
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return
        }


        this.currentOperation = digit
        this.updateScreen()
    }

    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation 
    }

}

const cal = new Calculator(previousOperationText, currentOperationText)

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText

        if(+value >=0 || value === ".") {
            cal.addDigit(value)
        }else {

        }

        
    })
})