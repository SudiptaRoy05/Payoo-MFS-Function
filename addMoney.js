document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoney = getInputFieldValueById('inputAddMoney');
    const inputPin = getInputFieldValueById('inputPin');


    if(isNaN(addMoney)){
        alert('faild to add money');
        return;
    }

    if (inputPin === 1234) {

        const balance = getTextFieldValueById('availableBalance');
        const newBalance = balance + addMoney;

        document.getElementById('availableBalance').innerText = newBalance;

        const p = document.createElement('p');
        p.innerHTML = `Added : ${addMoney} tk. New Balance : ${newBalance} tk.`

        document.getElementById('transationContainer').appendChild(p);

    } else {
        alert('failed to add money')
    }

})