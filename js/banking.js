//getting deposite button
document.getElementById('deposit-button').addEventListener('click', function() {
    //getting value of deposit
    const depositAmount = document.getElementById('deposit-field');
    const newDeposittext = depositAmount.value;
    const newDepositNumber = parseFloat(depositAmount.value); //making string to folat number
    console.log(newDepositNumber);
    //set the value in deposite 
    const depositTotal = document.getElementById('deposit-amount');
    const previousDeposittext = depositTotal.innerText;
    const previousDepositNumber = parseFloat(depositTotal.innerText); //making string to number
    //adding previous and new amount
    const newTotalDeposit = previousDepositNumber + newDepositNumber;
    //seting the value of total in the deposite
    depositTotal.innerText = newTotalDeposit;
    // console.log(depositTotal);

    //Main balance update
    const mainBalance = document.getElementById('main-balance');
    const previousMainBalance = parseFloat(mainBalance.innerText);
    const currentMainBalance = previousMainBalance + newDepositNumber;
    mainBalance.innerText = currentMainBalance;




    //clearing input field
    depositAmount.value = '';


});

//withdraw handler add
document.getElementById('withdraw-button').addEventListener('click', function() {
    //getting iput withdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    console.log(newWithdrawAmount);
    //getting value from last withdraw 
    const totalWithdraw = document.getElementById('withdraw');
    const previousWithdrawAmount = parseFloat(totalWithdraw.innerText);
    //adding last withdraw and new input for withdraw
    const newTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    //set the value to show
    totalWithdraw.innerText = newTotalWithdraw;
    //again main balance update(minus )
    const balance = document.getElementById('main-balance');
    const previousBalance = parseFloat(balance.innerText);
    const substractedMianBalance = previousBalance - newWithdrawAmount;
    balance.innerText = substractedMianBalance;

    //clearing withdraw inputfield

    withdrawField.value = '';



})