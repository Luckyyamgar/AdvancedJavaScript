
var num = 100;
console.log(num)

alert("Mission is Complet");
confirm("mission is complete or not");

let mydate = new Date();
console.log(mydate);
console.log(mydate.getDate());
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getMinutes());
console.log(mydate.getMonth());
console.log(mydate.getHours());
console.log(mydate.getDay());


//dom Manipulastion
var elem = document.getElementById("click");
console.log(elem);
//event in java script

function clicked() {
    console.log("The button was clicked");
}





document.onload = function () {
    console.log("The Document was clicked");


}

window.onload = function () {
    console.log("The document was Loaded ");
}
firstcontainer.addEventListener("mouseover", function () {
    console.log("Clicked on Containeer")
})
firstcontainer.addEventListener("mouseout", function () {
    console.log("Clicked out Containeer")
})


//Array function 
function sum(a,b){
    return a+b;
}
sub=(c,d)=>{
    return c-d;
}
