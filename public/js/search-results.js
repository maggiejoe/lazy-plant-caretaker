const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const care_level = urlParams.get('care_level')
const sun_exposure = urlParams.get('sun_exposure')

function getPlantsData(url) {
    console.log("This will happen on page load");
    fetch("/api/plants/query" + queryString)
        .then(function (response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    // pass response to DOM function
                    displayPlants(data);
                });
            }
            else {
                // if not successful, redirect to dashboard
                document.location.replace("./dashboard");
            }
        });
};

function displayPlants(results){
    //loop over offers
    for (var i = 0; i < results.length; i++) {

        // getting data from each result
        var name = results[i].plant_name;
        var wateringSchedule = results[i].watering_schedule;
        var description = results[i].description;

        console.log("Name: " + name)
        console.log("Watering Schedule: " + wateringSchedule)
        console.log("Description: " + description)
    }
};

window.onload = getPlantsData();