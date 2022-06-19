const APIKey = 'Z6zdp7ZT2n5gT0GoFhtSflRhfb02qkTZecfzsVaS';

const getApiData = () => {
    fetch('https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=12&api_key=' + APIKey).then(response => {
        if (response.ok) {
        return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    }).then(parkData => {
        // console.log(parkData);
        displayPark(parkData);
    }).catch((error) => console.error("FETCH ERROR:", error));
}

const displayPark = (parkData) => {
    // console.log(parkData);
    const cardsContainer = document.querySelector(".cards-container");
    parkData.data.forEach(park => {
        // console.log(park);
        const {activities, description, images, name, latLong, url} = park;
        const cardBody = document.createElement("article");
        const parkName = document.createElement("h2");
        const parkDescription = document.createElement("p");
        const parkImage = document.createElement("img");
        const coordinatesTitle = document.createElement("h3");
        const coordinates = document.createElement("p");
        const activitiesDiv = document.createElement("div");
        const parkLink = document.createElement("a");
        
        parkName.innerHTML = name;
        parkDescription.innerHTML = description;
        coordinates.innerHTML = latLong;
        activitiesDiv.innerHTML = "Activities at this park include:";
        parkLink.innerHTML = "Park Website";

        parkImage.src = images[0].url;
        parkLink.href = url;

        cardBody.classList.add("cardBody");
        parkImage.classList.add("park-image");
        activitiesDiv.classList.add("activity");
        coordinates.classList.add("park-coordinates");
        parkLink.classList.add("park-links");
        activities.forEach((activity, i) => {
            if (i<=2) {const p = document.createElement("p");
                p.innerHTML = activity.name;
                activitiesDiv.appendChild(p);}
        });

        cardBody.appendChild(parkName);
        cardBody.appendChild(parkDescription);
        cardBody.appendChild(parkImage);
        cardBody.appendChild(coordinatesTitle);
        cardBody.appendChild(coordinates);
        cardBody.appendChild(activitiesDiv);
        cardBody.appendChild(parkLink);
        cardsContainer.appendChild(cardBody);

    });
}

getApiData();

