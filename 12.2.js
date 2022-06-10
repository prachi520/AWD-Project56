function checkPassword(form) {
    number1 = form.number1.value;
    if (number1 == '')
        alert ("Please enter OTP");
    if (number1.length < 6)
        alert ("Please enter 6-digit OTP"); 
    if (number1.length > 6) {
        alert ("Please enter 6-digit OTP")
        return false;
    }
}  