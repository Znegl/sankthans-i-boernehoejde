<script setup>
import leaflet from 'leaflet'
import {ref, watch} from "vue";
import 'leaflet/dist/leaflet.css';


const mapElement = ref(null)


watch(mapElement, (mapElement) => {
  const map = leaflet.map(mapElement, {scrollWheelZoom: false}).setView([55.94177, 12.51008], 17);

  leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const campfireIcon = leaflet.icon({iconUrl: '/campfire.png', iconSize: [96, 96]})

  const fireMarker = leaflet.marker([55.94152, 12.51202], {icon: campfireIcon }).addTo(map);

  // TODO Enable detailed markers if deemed necessary
  /*
  const infoMarker = leaflet.marker([55.94130, 12.51193]).addTo(map);
  const toiletMarker = leaflet.marker([55.94118, 12.51185]).addTo(map);
  const bikeParkingMarker = leaflet.marker([55.94127, 12.51126]).addTo(map);
  */

  // Display the user on the map
  // TODO Put this behind a consent button, to avoid asking users for location data when launching the page
  /*
  map.locate({setView: true, watch: true, enableHighAccuracy: true})
      .on('locationfound', function(e){
        var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
        var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
          weight: 1,
          color: 'blue',
          fillColor: '#cacaca',
          fillOpacity: 0.2
        });
        map.addLayer(marker);
        map.addLayer(circle);
      })
      .on('locationerror', function(e){
        console.log(e);
        alert("Location access denied.");
      });
   */
})
</script>

<template>
  <div ref="mapElement" class="main-map"></div>
</template>

<style scoped>
.main-map {
  height: 60vh;
  width: 100%;
  background: silver;
}
</style>