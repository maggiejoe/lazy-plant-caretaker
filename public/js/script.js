let resultsUrl = "https://lazy-plant-caretaker.herokuapp.com/results";

// listen for changes in input elements
let sunExposure;
document.querySelector('#sunExposureOption').addEventListener('change', () => {
    if (this.value !== '') {
        sunExposure = this.value;
    }
})

let careLevel;
document.querySelector('#careLevelOptions').addEventListener('change', () => {
    if (this.value !== '') {
        careLevel = this.value;
    }
})

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
    return url;
};

var parameters = {
    sunExposure: sunExposure,
    careLevel: careLevel
};

document.querySelector('#show-results').addEventListener('submit', searchFunction);