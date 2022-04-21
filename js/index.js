"use strict";

// de leaflet library is reeds geimporteerd, en beschikbaar als "L"
// dit via de script en css tag in de index.html, en de "map" div die werd toegevoegd.


const app = {
    map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie

    init() {
        // initialise de kaart
        console.log("Map:");
        var map = L.map('map').setView([51.505, -0.09], 13);

        // voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
        L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(map);
        // vergeet openstreetmap attributie niet

        // gebruik de functie "loadMarkers" om de markers toe te voegen

        var marker = L.marker([51.5, -0.09]).addTo(map);
        var circle = L.circle([51.508, -0.21], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        this.loadMarkers();
    },
    loadMarkers() {

        // fetch de data van opendata.brussels.be
        console.log("Fetching");
        fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=toiletten&q=')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });

        // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart


    },
    addMarker(lat, lon) {
        // voeg een marker toe op lat, lon
        var marker = L.marker([lat, lon]).addTo(this.map);
    }
};

app.init();