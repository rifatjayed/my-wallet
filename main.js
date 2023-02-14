document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const depositFieldValue = depositField.value;
    const depositFieldValueFloat = parseFloat(depositFieldValue);
    // console.log(depositFieldValueFloat);


    const depositTotal = document.getElementById("deposit-total");
    const depositTotalInnerText = depositTotal.innerText;
    const depositTotalInnerTextFloat = parseFloat(depositTotalInnerText);



    const totalDeposite = depositFieldValueFloat + depositTotalInnerTextFloat;
    depositTotal.innerText = totalDeposite;
    depositField.value = "";





    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalInnerText = balanceTotal.innerText;
    const balanceTotalInnerTextFloat = parseFloat(balanceTotalInnerText);



    const totalBalance = balanceTotalInnerTextFloat + depositFieldValueFloat;
    balanceTotal.innerText = totalBalance;



})



document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawFieldValue = withdrawField.value;
    const withdrawFieldValueFloat = parseFloat(withdrawFieldValue);



    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalInnerText = withdrawTotal.innerText;
    const withdrawTotalInnerTextFloat = parseFloat(withdrawTotalInnerText);




const totalWithdraw = withdrawFieldValueFloat+ withdrawTotalInnerTextFloat;
    withdrawTotal.innerText = totalWithdraw;
    withdrawField.value = "";


    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalInnerText = balanceTotal.innerText;
    const balanceTotalInnerTextFloat = parseFloat(balanceTotalInnerText);



    const  afterBalance= balanceTotalInnerTextFloat-withdrawFieldValueFloat;
    balanceTotal.innerText= afterBalance;









})