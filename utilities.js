// common function 

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNum = parseFloat(inputValue);
    return inputValueNum;
}


function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNum = parseFloat(textValue);
    return textValueNum;
}


function showSectionById(id) {
    const addForm = document.getElementById('AddMoneyForm').classList.add('hidden');
    

    document.getElementById('cashOutForm').classList.add('hidden');

    // document.getElementById('transactionList').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}

