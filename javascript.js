let billInput = document.querySelector('#bill-input');
let billOutput = document.querySelector('#bill-output');

let addInput = document.querySelector('#input-add-people');
let addOutput = document.querySelector('#add-output');

let reset = document.querySelector('#btn-reset');

let per5 = document.querySelector('#per5');
let per25 = document.querySelector('#per25');

let per10 = document.querySelector('#per10');
let per50 = document.querySelector('#per50');

let per15 = document.querySelector('#per15');
let custom = document.querySelector('#custom');


per5.addEventListener('click', ()=>{
    let inputValue = parseFloat(billInput.value);
    let percent = (5/100)*inputValue;

    billOutput.textContent=`$ ${percent.toFixed(1)|| '0'}`;

    let howMany = addInput.value;
    let result = parseFloat(percent/howMany);

    addOutput.textContent=`$ ${result.toFixed(2)}`;
})

per25.addEventListener('click', ()=>{
    let inputValue = parseFloat(billInput.value);
    let percent = (25/100)*inputValue

    billOutput.textContent = `$ ${percent.toFixed(1)|| '0'}`;

    let howMany = addInput.value;
    let result = parseFloat(percent/howMany);

    addOutput.textContent=`$ ${result.toFixed(2)}`;
});

per10.addEventListener('click', ()=>{
    let inputValue = parseFloat(billInput.value);
    let percent = (10/100)*inputValue

    billOutput.textContent = `$ ${percent.toFixed(1)|| '0'}`;
    
    let howMany = addInput.value;
    let result = parseFloat(percent/howMany);

    addOutput.textContent=`$ ${result.toFixed(2)}`;
});

per50.addEventListener('click', ()=>{
    let inputValue = parseFloat(billInput.value);
    let percent = (50/100)*inputValue

    billOutput.textContent = `$ ${percent.toFixed(1)|| '0'}`;

    let howMany = addInput.value;
    let result = parseFloat(percent/howMany);

    addOutput.textContent=`$ ${result.toFixed(2)}`;
});

per15.addEventListener('click', ()=>{
    let inputValue = parseFloat(billInput.value);
    let percent = (15/100)*inputValue

    billOutput.textContent = `$ ${percent.toFixed(1)|| '0'}`;

    let howMany = addInput.value;
    let result = parseFloat(percent/howMany);

    addOutput.textContent=`$ ${result.toFixed(2)}`;
});

custom.addEventListener('input',()=>{
    let inputValue =  parseFloat(billInput.value);
    let inputValueCustom = parseFloat(custom.value);

    let percent = (inputValueCustom/100)* inputValue; 

    billOutput.textContent = `$ ${percent.toFixed(1) || '0'}`;

    let howMany = addInput.value;
    let result = parseFloat(percent/howMany);

    addOutput.textContent=`$ ${result.toFixed(2)}`;
});

reset.addEventListener('click',() => {
    billOutput.textContent = '$ 0.00'
    addOutput.textContent='$ 0.00'
});