// searchScript.js

// let map;
// let marker;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 0, lng: 0 },
//     zoom: 8,
//   });

//   // Show current location and add a marker
//   showCurrentLocation();
// }

// function showCurrentLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const currentLocation = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };

//         map.setCenter(currentLocation);

//         // Remove existing marker
//         if (marker) {
//           marker.setMap(null);
//         }

//         // Add a new marker at the current location
//         marker = new google.maps.Marker({
//           position: currentLocation,
//           map: map,
//           title: "My Location",
//         g});
//       },
//       (error) => {
//         console.error("Error getting current location:", error);
//       }
//     );
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
//  }

function initSearchMap() {
    const searchLocationButton = document.getElementById("searchLocationButton");
  
    searchLocationButton.addEventListener("click", function() {
      // Redirect to indextest.html when the button is clicked
      window.location.href = "indextest.html";
    });
  }
  
