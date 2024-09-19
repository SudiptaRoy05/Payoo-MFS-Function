document.getElementById('btn-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    const cashOut = getInputFieldValueById('inputCashOut');
    const conPin = getInputFieldValueById('confirmPin');

    if(conPin === 1234){
        const balance = getTextFieldValueById('availableBalance');
        if(balance > cashOut){
            const newBalance = balance - cashOut;
            document.getElementById('availableBalance').innerText = newBalance;
        }else{
            alert('insufficient balance');
        }
    }
    else{
        alert('cash out failed');
    }

})