mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 9,
});

const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  "<h4>Exact location will be provided after booking</h4>"
);

new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(popup)
  .addTo(map);