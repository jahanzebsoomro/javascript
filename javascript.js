
let dollarEl = document.getElementById('dollar-el');
let poundEl = document.getElementById('pound-el');
let euroEl = document.getElementById('euro-el');
let btnEl = document.getElementById('btn-convert');
btnEl.addEventListener('click', () => {
    let inputValue = document.getElementById('get_Value').value;
    let dollarInpkr = inputValue * 236.75;
    let poundInpkr = inputValue * 253.65;
    let euroInpkr = inputValue * 227.82;
    dollarEl.textContent = `${inputValue} Dollar  in Pakistani rupee ${dollarInpkr.toFixed(2)}`
    poundEl.textContent = `${inputValue} Pound in Pakistani rupee ${poundInpkr.toFixed(2)}`
    euroEl.textContent = `${inputValue} Euro in Pakistani rupee ${euroInpkr.toFixed(2)}`
})
