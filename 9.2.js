function checkPassword(form) {
    number1 = form.number1.value;
    number2 = form.number2.value;
    if (number1.length < 16)
        alert ("Please enter a valid card number"); 
    if (number1.length > 16) {
        alert ("Please enter a valid card number")
        return false;
    }
    if (number2.length < 3)
        alert ("Please enter a valid CVV"); 
    if (number2.length > 3) {
        alert ("Please enter a valid CVV")
        return false;
    }
    else{
        alert("Your payment was successful")
    }
}  