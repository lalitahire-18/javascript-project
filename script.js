
function ageInDay(){
    var age=prompt("what is your year of birth");
    var ageDay=(2023-age)*365;
    var h1=document.createElement("h1");
    var text=document.createTextNode("your age in days "+ageDay);
    h1.setAttribute("id","run");
    h1.appendChild(text);
    document.getElementById("res").appendChild(h1);
}
function rese(){
    document.getElementById("run").remove();
}