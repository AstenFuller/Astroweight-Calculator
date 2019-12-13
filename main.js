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
    let option = document.createElement("option");
    let planetSelected = option.textContext = item[0];
    option.value = item[1];
    document.getElementById("planets").appendChild(option).innerHTML = planetSelected;
    option.setAttribute("id", item[0]);
    
}


function calculateWeight(weight, planetName) {
    let result = weight * planetName;
    return result;
}

function handleClickEvent() {
    let userWeight = document.getElementById("user-weight").value;

    if (isNaN(userWeight)){
        document.getElementById("output").innerHTML = "That is not a number";
    }else if (userWeight < 0){
        document.getElementById("output").innerHTML = "You chose a negative weight";
    }else{
    let select = document.getElementById("planets");
    let planetName = select.options[select.selectedIndex].text;
    let planetSize = document.getElementById("planets").value;
    let result = calculateWeight(userWeight, planetSize);

    document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
    }
}

    function handleCheckBox() {
        if (planets[0].includes("Pluto")){
            document.getElementById("Pluto").remove();
            planets[0][0] = "";
            document.getElementById("output").innerHTML = "Pluto is not a planet!";

            
        }else{
            planets[0][0] = "Pluto";
            let option = document.createElement("option");
            option.setAttribute("id", "Pluto");
            option.setAttribute("Value", 0.06);
            option.innerHTML = "Pluto";
            let pluto = document.getElementById("planets");
            pluto.prepend(option);
            pluto.selectedIndex = "0";
            document.getElementById("output").innerHTML = "Pluto is a planet!";

           
            
        }

}

    function handleAddPlanet() {
        let planetName = document.getElementById("new-planet").value;
        let planetValue = document.getElementById("new-planet-value").value;
        let planetOption = document.getElementById("planets");

        planets.push([planetName, planetValue]);

        if (isNaN(planetValue)){
            document.getElementById("new-output").innerHTML = "Your value is not a number";
        }else {
            let option = document.createElement("option");
            option.setAttribute("id", planetName);
            option.setAttribute("value", planetValue);
            option.innerHTML = planetName;
            planetOption.appendChild(option);

            document.getElementById("new-output").innerHTML = `${planetName} has been added`;
            document.getElementById("new-planet").value = "";
            document.getElementById("new-planet-value").value = "";
        }
    }