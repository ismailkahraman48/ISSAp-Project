Api_url = "https://api.wheretheiss.at/v1/satellites/25544";

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNtYWlsaGVybyIsImEiOiJjbDFxOWUwYTYwYWxhM2VvM3l1NXhiYjM3In0.WGh-jFaUsTAu7KLUzS351Q';

const map = new mapboxgl.Map({  
container: 'map', // container ID
style: 'mapbox://styles/ismailhero/cl1qaq8r000lu15qs6veq9qm2', // style URL
center: [0, 0], // starting position [lng, lat]
zoom: 2 // starting zoom
});

const el = document.createElement('div');
el.className = 'marker';

const marker = new mapboxgl.Marker(el)
    .setLngLat([0,0]).addTo(map)




async function getISS(url) {
    const response = await fetch(Api_url)
    const data = await response.json()
    const { latitude, longitude } = data;
    document.getElementById("lat").textContent = latitude.toFixed(2);
    document.getElementById("log").textContent = longitude.toFixed(2);
    document.getElementById("alt").textContent = data.altitude.toFixed(4);
    document.getElementById("vel").textContent = data.velocity.toFixed(4);
    const marker = new mapboxgl.Marker(el)
        .setLngLat([longitude,latitude]).addTo(map)
        .setPopup(
            new mapboxgl.Popup({offset:25})
                .setHTML(
                    `<h3>What is this?: ${data.name}</h3>`
                )
        )
    
    
}

getISS(Api_url)

setInterval(getISS,1000);




