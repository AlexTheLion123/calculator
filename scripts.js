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
let digitMemory = '';
let numMemory = '';
let operatorMemory;
let anyMemory = '';
let ans;
let oldMemory;
let newMemory;



const output = document.querySelector(".output");
const memory = document.querySelector('.memory');
const answerOutput = document.querySelector(".answerOutput");
buttonList.forEach(element => {
    element.addEventListener('click', e => {
        const val = e.target.innerText;
        if(anyMemory = "="){
            anyMemory = val;
            answerOutput.textContent = '';
        }


        if(numbers.includes(parseInt(val))){
            digitMemory += val;
            output.textContent = digitMemory;
            return;
        }

        if(operators.includes(val)){
            operatorMemory = val;
            newMemory = output.textContent;
            oldMemory = memory.textContent;

            if(!newMemory) {
                console.log("Enter a number first");
                return;
            };

            // if there is nothing in memory, it is first in memory, if there is something in memory, call the operator
            memory.textContent = oldMemory ? operate(val, parseInt(oldMemory), parseInt(newMemory)) : newMemory;        
            
            digitMemory = '';
            output.textContent = '';
            return;        
        }

        if(val === "="){
            newMemory = output.textContent;
            oldMemory = memory.textContent;
            if(!newMemory){ // nothing typed in output
                console.log("nothing typed in output");
                return;
            }
            if(!oldMemory){ // if there is nothing in memory, ans in the new number
                ans = newMemory;
                answerOutput.textContent = ans;
            }
            if(oldMemory && newMemory){ // if both oldMemory and newMemory exist, operate and put the answer in the ans box
                answerOutput.textContent = operate(operatorMemory, parseInt(oldMemory), parseInt(newMemory)); 
            }
            output.textContent = '';
            memory.textContent = '';
            clearMemory();
            anyMemory = "=";
            ans = answerOutput.textContent;
            return;
        }

        if(val == "AC"){
            clearAll();
        }

        if(val == "DEL"){

        }
    })
});


function clearAll(){
    clearMemory();
    clearOutput();
}

function clearMemory(){
    digitMemory = '';
    numMemory = '';
    operatorMemory;
    anyMemory = '';
    ans;
    oldMemory;
    newMemory;
}

function clearOutput(){
    output.textContent = '';
    memory.textContent = '';
    answerOutput.textContent = '';
}

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

function operate(operator, a, b){
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






















