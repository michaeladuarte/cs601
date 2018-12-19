window.onload = setInterval(michaelsClock,1000);

function michaelsClock()
{
    var d = new Date();

    var date = d.getDate();

    var month = d.getMonth();
    var allmonths =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    month=allmonths[month];

    var year = d.getFullYear();

    var day = d.getDay();
    var alldays =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    day=alldays[day];

    document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
}