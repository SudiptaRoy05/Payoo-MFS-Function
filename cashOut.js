document.getElementById('btn-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    const cashOut = getInputFieldValueById('inputCashOut');
    const conPin = getInputFieldValueById('confirmPin');

    if(isNaN(cashOut)){
        alert('faild to cash out');
        return;
    }

    if(conPin === 1234){
        const balance = getTextFieldValueById('availableBalance');
        if(balance > cashOut){
            const newBalance = balance - cashOut;
            document.getElementById('availableBalance').innerText = newBalance;

            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${cashOut} withdraw. New Balance ${newBalance}</p>
            `

            document.getElementById('transationContainer').appendChild(div);

        }else{
            alert('insufficient balance');
        }
    }
    else{
        alert('cash out failed');
    }

})