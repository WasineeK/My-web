searchScript.js

function initSearchMap() {
  const searchLocationButton = document.getElementById("searchLocationButton");

  searchLocationButton.addEventListener("click", function() {
    // Redirect to indextest.html when the button is clicked
    window.location.href = "indextest.html";
  });
}
