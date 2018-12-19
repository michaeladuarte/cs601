$(function() {
    $(".images").addClass("wrappedElement");
    $("#hideTheImages").click(function(event) {
        $("#fun img").toggle();
    })
    $("#showEvenTheImages").click(function(event) {
        $("#fun img:even").toggle("slow");
    })
    $("#showOddTheImages").click(function(event) {
        $("#fun img:odd").toggle("slow");
    })
    $("#rightShiftTheImages").click(function(event) {
        $("#fun img").eq(0).before($("#fun img").eq(-1));
    })
    $("#leftShiftTheImages").click(function(event) {
        $("#fun img").eq(-1).after($("#fun img").eq(0));
    })
})

var slideReel = 1;
    helloSlides(slideReel);

function moveSlides(n) {
    helloSlides(slideReel += n);
}

function theSlide(n) {
    helloSlides(slideReel = n);
}

function helloSlides(n) {
    var i;
    var slides = document.getElementsByClassName("picsbye");
    var circles = document.getElementsByClassName("circle");
    if (n > slides.length) {slideReel = 1}    
    if (n < 1) {slideReel = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    slides[slideReel-1].style.display = "block";  
    circles[slideReel-1].className += " active";
}