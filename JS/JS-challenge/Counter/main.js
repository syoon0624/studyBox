let countNumber = 0;

const increase = () => {
    countNumber++;
    printCounter();
}

const decrease = () => {
    countNumber--;
    printCounter();
}

const reset = () => {
    countNumber = 0;
    printCounter();
}

const printCounter = () => {
    if(countNumber < 0) {
        document.getElementById("Counter").style.color = "red"
    } else if(countNumber === 0) {
        document.getElementById("Counter").style.color = "black"
    } else {
        document.getElementById("Counter").style.color = "green"
    }
    document.getElementById("Counter").innerHTML = countNumber;
}

printCounter();