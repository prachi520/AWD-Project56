function checkPassword(form) {
    number1 = form.number1.value;
    number2 = form.number2.value;
    if (number1 == '')
        alert ("Please enter mobile number");
    else if (number2 == '')
        alert ("Please re-enter registered mobile number"); 
    else if (number1 != number2) {
        alert ("Mobile numbers did not match, Please try again")
        return false;
    }
    else if (number1 == number2){
        window.location.href='12.2.html'
    }
}  