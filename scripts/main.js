let counter = 0;

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

display.value = counter;

btnIncrease.addEventListener("click",increaseCounter);

btnDecrease.addEventListener("click",decreaseCounter);

btnReset.addEventListener("click",resetCounter);