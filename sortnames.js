var allNames = ["Floris","Diem","Mike", "Drohn", "Evert", "Bashir", "Samir", "Oege", "Jacco"];
window.onload=showArray();

function showArray(){
     listNames= "<ul>";
    for (i=0;i<allNames.length;i++){
        listNames+="<li>" + allNames[i] + "</li>";
    }
    document.getElementById("listnames").innerHTML=listNames+="</ul>";
}

function addName(){
    var addingName = document.getElementById("inputName").value;
    allNames.push(addingName);   
    console.log(allNames) 
}

function sortNames(){
    document.getElementById("sortednames").innerHTML="";

    sortedList= "<ul>";
    for (i=0;i<allNames.length;i++){
        sortedList+="<li>" + allNames[i] + "</li>";
    }
    document.getElementById("sortednames").innerHTML=sortedList+="</ul>";
}

