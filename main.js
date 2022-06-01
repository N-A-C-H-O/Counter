let counter = 0;

display.value = counter;

const increaseCounter = () => {
    counter++;
    display.value = counter;
}

const decreaseCounter = () => {
    if (counter > 0) {
        counter--;
        display.value = counter;
    }
}

const resetCounter = () => {
    counter = 0;
    display.value = counter;
}

btnIncrease.addEventListener("click",increaseCounter);
btnDecrease.addEventListener("click",decreaseCounter);
btnReset.addEventListener("click",resetCounter);

