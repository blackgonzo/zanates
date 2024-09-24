var mapa = L.map('mapa').setView([19.4326, -99.1332], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

var marker = L.marker([19.4326, -99.1332]).addTo(mapa);
marker.bindPopup('<b>Ciudad de México</b>').openPopup();
