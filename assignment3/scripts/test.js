document.addEventListener('DOMContentLoaded', function () { 

document.getElementById("english_registration_form").onsubmit = function () {
    var x = document.forms["english_registration_form"]["name"].value;
    var y = document.forms["english_registration_form"]["email"].value;
    var z = document.forms["english_registration_form"]["telephone"].value;

    var submit = true;

    if (x == null || x == "") {
        nameError = "Please enter your name";
        document.getElementById("name_error").innerHTML = nameError;
        submit = false;
    }

    if (y == null || y == "") {
        emailError = "Please enter your email";
        document.getElementById("email_error").innerHTML = emailError;
        submit = false;
    }

    if (z == null || z == "") {
        telephoneError = "Please enter your telephone";
        document.getElementById("telephone_error").innerHTML = telephoneError;
        submit = false;
    }

    return submit;
}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("name").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("telephone").onkeyup = removeWarning;
}