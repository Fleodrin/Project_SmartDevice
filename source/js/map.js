const POSITION = {
  lat: 59.968302,
  lon: 30.317429,
};

const mapImage = document.querySelector(".map__canvas-picture");

const map = L.map('map');
const pin = L.icon({
  iconUrl: 'img/map/pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainMarker = L.marker(
  [POSITION.lat, POSITION.lon],
  {
    draggable: false,
    icon: pin,
  },)
  .addTo(map);


map
  .on('load', () => {
    mapImage.remove();
  })
  .setView([POSITION.lat, POSITION.lon], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
  .addTo(map);
