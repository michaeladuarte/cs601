window.onload = function() {
    document.getElementById("btn").addEventListener("click", getDegrees);
}

function getDegrees(){
    let http_request = new XMLHttpRequest();
    http_request.open("GET",'degrees.json',true);

    http_request.onreadystatechange = function(){

        if (http_request.readyState == 4  ){
            // Javascript function JSON.parse to parse JSON data
            let jsonObj = JSON.parse(http_request.responseText);

            // jsonObj variable now contains the data structure and can
            // be accessed as jsonObj.name and jsonObj.country.
            document.getElementById("School").innerHTML = jsonObj.degrees[0].degree.school;
            document.getElementById("Major").innerHTML = jsonObj.degrees[0].degree.major;
            document.getElementById("Type").innerHTML = jsonObj.degrees[0].degree.type;
            document.getElementById("Year").innerHTML = jsonObj.degrees[0].degree.year;
            document.getElementById("School1").innerHTML = jsonObj.degrees[1].degree.school;
            document.getElementById("Major1").innerHTML = jsonObj.degrees[1].degree.major;
            document.getElementById("Type1").innerHTML = jsonObj.degrees[1].degree.type;
            document.getElementById("Year1").innerHTML = jsonObj.degrees[1].degree.year;
        }
    }

    http_request.open("GET", 'data.json', true);
    http_request.send();
}