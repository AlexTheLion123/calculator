const buttonArray = [7,8,9,"DEL","AC",4,5,6,"x","/",1,2,3,"+","-",0,".","^","Ans","="];
const operators = ["x","/","+","-","^"];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const funcKeys = ["DEL","AC","ANS","="]

let buttonContainer = document.querySelector(".button-container");

//create buttons
for(let i=0; i< buttonArray.length; i++){
    const button = document.createElement("div");
    button.classList.add("button");
    button.textContent = buttonArray[i];
    buttonContainer.appendChild(button);

    if(i==0){
        button.style.borderTopLeftRadius = '2vh';
    }

    if(i==4){
        button.style.borderTopRightRadius = '2vh';
    }

    if(i==15){
        button.style.borderBottomLeftRadius = '2vh';
    }

    if(i==buttonArray.length-1){
        button.style.borderBottomRightRadius = '2vh';
    }
}

//add listeners
const buttonList = document.querySelectorAll('.button');
buttonList.forEach(element => {
    element.addEventListener('click', e => {
        const val = e.target.innerText;
        if(numbers.includes(parseInt(val))){
            console.log("hello");
            const output = document.querySelector(".output");
            output.textContent = val;
        }
    })
});


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function power(a,b){
    return a**b;
}

function operator(operator, a, b){
    if(operator=="+"){
        return add(a,b);
    }
    if(operator=="-"){
        return subtract(a,b);
    }
    if(operator=="x"){
        return multiply(a,b);
    }
    if(operator=="/"){
        return divide(a,b);
    }
    if(operator=="^"){
        return power(a,b);
    }
}






















