let counter = 0;

display.value = counter;

const increaseCounter = () => {
    counter++;
    display.value = counter;
    if (counter > 0) {
        display.style.color = "green";
    }
}

const decreaseCounter = () => {
    if (counter > 0) {
        counter--;
        display.value = counter;
    }
    if (counter === 0) {
        display.style.color = "black"
    }
}

const resetCounter = () => {
    counter = 0;
    display.value = counter;
    display.style.color = "black"
}


btnIncrease.addEventListener("click",increaseCounter);
btnDecrease.addEventListener("click",decreaseCounter);
btnReset.addEventListener("click",resetCounter);

