let userQuery = (localStorage.getItem('userQuery'));
JSON.parse(localStorage.getItem('userQuery')) ;
{ 'sun_exposure'= '', 'care_level'= ''};

// build the query
function buildQuery() {
    // store the query
    var query = [];

    // loop through query objects
    for (var key in userQuery) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(userQuery[key]));
    }

    let newURL = "https://lazy-plant-caretaker.herokuapp.com/results" + (query.length ? '?' + query.join('&') : '');
    return(newURL);
}

// listen for changes in input elements
let sunExposure;
document.querySelector('#sunExposureOption').addEventListener('change', () => {
    if (this.value !== '') {
        sunExposure = this.value;

        userQuery['sun_exposure'] = sunExposure;

        let url = buildQuery();
    }
})

let careLevel;
document.querySelector('#careLevelOptions').addEventListener('change', () => {
    if (this.value !== '') {
        careLevel = this.value;

        userQuery['care_level'] = careLevel

        let url = buildQuery();
    }
})