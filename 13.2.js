function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
    if (password1 == '')
        alert ("Please create Password");
    else if (password2 == '')
        alert ("Please re-enter password"); 
    else if (password1 != password2) {
        alert ("Password did not match, Please try again")
        return false;
    }
}  
