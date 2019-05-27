var listNames = ["Floris","Diem","Mike", "Drohn", "Evert", "Bashir", "Samir", "Oege", "Jacco"];
window.onload=showArray();

function showArray(){
    document.getElementById("listnames").innerHTML=listNames;
}

function sortNames(){

    var sortedNames = listNames.sort();
    document.getElementById("sortednames").innerHTML= sortedNames;
    }

