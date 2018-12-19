window.onload = function() {
    document.getElementById("btn").addEventListener("click", getDegrees);
}

function displayTable() {
    var x = document.getElementById("myTable");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function getDegrees(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){

        if (request.readyState === 4 || request.readyState === 200){
            var values = JSON.parse(request.responseText);
            //display JSON in HTML table
            document.getElementById("School").innerHTML = values.degrees[0].degree.school;
            document.getElementById("Major").innerHTML = values.degrees[0].degree.major;
            document.getElementById("Type").innerHTML = values.degrees[0].degree.type;
            document.getElementById("Year").innerHTML = values.degrees[0].degree.year;
            document.getElementById("School1").innerHTML = values.degrees[1].degree.school;
            document.getElementById("Major1").innerHTML = values.degrees[1].degree.major;
            document.getElementById("Type1").innerHTML = values.degrees[1].degree.type;
            document.getElementById("Year1").innerHTML = values.degrees[1].degree.year;
        }
    }

    request.open("GET", 'degrees.json', true);
    request.send();
}