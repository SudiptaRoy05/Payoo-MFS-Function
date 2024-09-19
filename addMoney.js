document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();

   const addMoney = getValueById('inputAddMoney');
   console.log("Added amount",addMoney);

   const inputPin = getValueById('inputPin');
   console.log("entered pin",inputPin);
})