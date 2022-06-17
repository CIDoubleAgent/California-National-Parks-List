
const APIKey = 'Z6zdp7ZT2n5gT0GoFhtSflRhfb02qkTZecfzsVaS';

const getApiData = () => {
    fetch('https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=12&api_key=' + APIKey).then(response => {
        if (response.ok) {
        return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    }).then(parkData => {
        console.log(parkData);
        displayPark(parkData);
    }).catch((error) => console.error("FETCH ERROR:", error));
}

const displayPark = (parkData) => {
    document.getElementById('park-name').innerHTML = parkData.data[0].fullName;
    document.getElementById('park-description').innerHTML = parkData.data[0].description;
    document.getElementById('park-image').setAttribute("src", parkData.data[0].images[0].url);
    document.getElementById('park-coordinates').innerHTML = parkData.data[0].latLong;
    document.getElementById('park-activities').innerHTML = parkData.data[0].activities[0].name;
    document.getElementById('park-links').innerHTML = parkData.data[0].url;
}

getApiData();

