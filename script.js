function compute()
{
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
}

var slide = document.getElementById('slide'),
    sliderDiv = document.getElementById("sliderAmount");

slide.onchange = function() {
    sliderDiv.innerHTML = this.value;
}
