function convertCurrency() {
    let amount = document.getElementById("id_amount");
    let fromCurrency = document.getElementById("fromCurrency");
    let toCurrency = document.getElementById("toCurrency");

    let optionFrom = fromCurrency.options[fromCurrency.selectedIndex];
    let optionTo = toCurrency.options[toCurrency.selectedIndex];


    if(optionFrom.value=="VND" && optionTo.value=="USD"){
        alert(amount.value/23000+" USD");
    }if(optionFrom.value=="USD" && optionTo.value=="VND"){
        alert(amount.value*23000 + " VND");
    }if (optionFrom.value==optionTo.value){
        alert(amount.value + " " +optionFrom.value );
    }

}
