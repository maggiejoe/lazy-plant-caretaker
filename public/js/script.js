let resultsUrl = "/results";
var parameters = {
    care_level: '',
    sun_exposure: ''
};

// listen for changes in input elements
let careLevel;
document.querySelector('#careLevelOptions').addEventListener('change', (event) => {
    if (event.target.value !== '') {
        careLevel = event.target.value;
    }
    console.log(careLevel);
    parameters.care_level = careLevel;
})

let sunExposure;
document.querySelector('#sunExposureOptions').addEventListener('change', (event) => {
    if (event.target.value !== '') {
        sunExposure = event.target.value;
    }
    console.log(sunExposure);
    parameters.sun_exposure = sunExposure;
})

function searchFunction(event) {
    event.preventDefault();
    console.log("Show me the plants");
    console.log(sunExposure, careLevel);

    buildUrl(resultsUrl, parameters)
};

function buildUrl(url, parameters) {
    var qs = "";
    for (var key in parameters) {
        var value = parameters[key];
        qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = resultsUrl + "?" + qs;
    }
    location.href = url;
};

document.querySelector('#show-results').addEventListener('click', searchFunction);