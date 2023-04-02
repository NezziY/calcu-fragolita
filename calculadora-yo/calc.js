const displayCalc = document.querySelector(".display-calc");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(boton => {
    boton.addEventListener("click", () => {
        const pushButton = boton.textContent;

        if (boton.id === "c-a"){
            displayCalc.textContent = "0";
            return;
        }

        if (boton.id == "c"){
            if (displayCalc.textContent.length === 1 || displayCalc.textContent === "Error!"){
                displayCalc.textContent = "0";
            } else {
                displayCalc.textContent = displayCalc.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "btn-equal"){
            try{
                displayCalc.textContent = eval(displayCalc.textContent);
            } catch {
                displayCalc.textContent = "Error!";
            }
            
            return;
        }

        if (displayCalc.textContent === "0" || displayCalc.textContent === "Error!"){
            displayCalc.textContent = pushButton;
        } else {
            displayCalc.textContent += pushButton;
        }
    })
})