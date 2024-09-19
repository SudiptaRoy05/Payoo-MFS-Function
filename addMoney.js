document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoney = getInputFieldValueById('inputAddMoney');
    const inputPin = getInputFieldValueById('inputPin');

    if (inputPin === 1234) {

        const balance = getTextFieldValueById('availableBalance');
        const newBalance = balance + addMoney;

        document.getElementById('availableBalance').innerText = newBalance;

    } else {
        alert('failed to add money')
    }

})