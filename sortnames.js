var allNames = ["Floris","Diem","Mike", "Drohn", "Evert", "Bashir", "Samir", "Oege", "Jacco"];
window.onload=showArray();

function showArray(){
     listNames= "<ul>";
    for (i=0;i<allNames.length;i++){
        listNames+="<li>" + allNames[i] + "</li>";
    }
    document.getElementById("listnames").innerHTML=listNames+="</ul>";
}

function sortNames(){

    var sortedNames = allNames.sort();

    sortedList= "<ul>";
    for (i=0;i<allNames.length;i++){
        sortedList+="<li>" + sortedNames[i] + "</li>";
    }
    document.getElementById("sortednames").innerHTML=sortedList+="</ul>";
}

