window.onload = function() {
    document.getElementById("btn").addEventListener("click", getDegrees);
}

function getDegrees() {
    let degreeRequest = new XMLHttpRequest();
    degreeRequest.open('get','degrees.json',true);

    degreeRequest.onreadystatechange = function(){
        if (degreeRequest.readyState === 4){
            if (degreeRequest.status === 200) {
                let degreeData = JSON.parse(degreeRequest.responseText);
                let size = degreeData.degrees.length;
                
                let insertPoint = document.getElementById("btn");
                insertPoint.insertAdjacentHTML('afterend', size);
                document.getElementById("btn").style.display = "none";
            }
        }
    };
    
    degreeRequest.send();
};