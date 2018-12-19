document.getElementById("contact").onsubmit = function () {
    var x = document.forms["contact"]["firstName"].value;
    var y = document.forms["contact"]["lastName"].value;
    var z = document.forms["contact"]["message"].value;

    var submit = true;

    if (x == null || x == "" || x.length <= 2 || !x.match(/^[a-zA-Z]+$/)) {
        firstNameError = "Please enter a value for first name that contains at least 2 characters and only letters.";
        document.getElementById("firstName_error").innerHTML = firstNameError;
        submit = false;
    }

    if (y == null || y == "" || y.length <=2 || !y.match(/^[a-zA-Z]+$/)) {
        lastNameError = "Please enter a value for last name that contains at least 2 characters and only letters.";
        document.getElementById("lastName_error").innerHTML = lastNameError;
        submit = false;
    }

    if (z == null || z == "") {
        messageError = "Please enter a message.";
        document.getElementById("message_error").innerHTML = messageError;
        submit = false;
    }

    return submit;
}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("firstName").onkeyup = removeWarning;
document.getElementById("lastName").onkeyup = removeWarning;
document.getElementById("message").onkeyup = removeWarning;