window.onload = function() {
    document.getElementById("game").addEventListener("click", playGame);
}

/*Prompts the visitor for his/her name
Displays the users name with an alert*/

function playGame() {
    var name = prompt("Welcome, what is your name?");
    if (name === null || name === "") {
        alert("Name cannot be empty");
    }
    else {
        alert("Welcome, " + name + " !");
    }

    //Asks the visitor to enter two numbers with a prompt
    var number1 = {value: parseInt( prompt("Please enter a number") )};
    var number2 = {value: parseInt( prompt("Please enter one more number") )};

    /*Function that adds these two visitor entered numbers
and adds them together and returns the result*/
    function calculate() {
        var sum = number1.value + number2.value;
        alert("The sum of your two numbers is: " + sum);
        if (sum > 10) {
            alert("That is a big number.");
        }
        else if (sum <= 10) {
            alert("That is a small number.");
        }
    }

    calculate(number1.value, number2.value);

    delete number1.value;
    delete number2.value;

    /* loop: prompt the user and ask if they want to add two numbers again, if
they do (check for yes/no)*/
    var answer = {value: prompt("Do you want to add 2 numbers again (yes/no)?")};
    if (answer.value === "yes") {
        do {
            number1.value = parseInt( prompt("Please enter a number") );
            number2.value = parseInt( prompt("Please enter a number") );
            calculate(number1.value, number2.value);
            delete answer.value;
            answer.value = prompt("Do you want to add 2 numbers again (yes/no)?");
            if (answer.value === "no") {
                alert("Thank you for using the program!");
            }
        } while (answer.value === "yes");
    }
    else {
        alert("Thank you for using the program!");
    }
}