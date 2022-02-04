function calculate_area_perimeter(){
let length = parseInt(document.getElementById("len").value);
let breadth = parseInt(document.getElementById("width").value);
let area = length * breadth ;

let perimeter = 2*(length+breadth) ;
document.getElementById("area").innerHTML ="<br>Area of rectangle: "  + area +"Mtr.<br>";
document.getElementById("Perimeter").innerHTML ="<br>Perimeter of rectangle: " +perimeter+" Mtr. <br>";
}
