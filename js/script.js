
var btn = document.getElementById("btn");
var isik = document.getElementById("isik");
var yazi = document.getElementById("yazi");
function toggleBtn()
{
    btn.classList.toggle("active");
    isik.classList.toggle("on");
    yazi.classList.toggle("ac")
    
}


var typed = new Typed(".typing", {
    strings:["","Sen söndüreceksİn",
 ],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});