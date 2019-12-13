// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

planets.forEach(populateDropdown);

function populateDropdown(item){
    var option = document.createElement("option");
    var planetSelected = option.textContext = item[0];
    option.value = item[1];
    document.getElementById("planets").appendChild(option).innerHTML = planetSelected;
    option.setAttribute("id", item[0]);
    
}


function calculateWeight(weight, planetName) {
    var result = weight * planetName;
    return result;
}

function handleClickEvent() {
    
    var userWeight = document.getElementById("user-weight").value;
    var select = document.getElementById("planets");
    var planetName = select.options[select.selectedIndex].text;
    var planetSize = document.getElementById("planets").value;
    var result = calculateWeight(userWeight, planetSize);

    document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
}

    function handleCheckBox() {
        if (planets[0].includes("Pluto")){
            document.getElementById("Pluto").remove();
            planets[0][0] = "";
            
        }else{
            planets[0][0] = "Pluto";
            let option = document.createElement("option");
            option.setAttribute("id", "Pluto");
            option.setAttribute("Value", 0.06);
            option.innerHTML = "Pluto";
            let pluto = document.getElementById("planets");
            pluto.prepend(option);
            pluto.selectedIndex = "0";
           
            
        }

}