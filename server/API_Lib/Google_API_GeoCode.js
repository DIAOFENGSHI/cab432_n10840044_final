const axios = require("axios");
const key_GeoCode_Google_API = `AIzaSyC0PfusUf85gIK2Oi_jpbElNLFL8JItxzk`;

async function getGeoLocation(location) {
  const url_geocode = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyC0PfusUf85gIK2Oi_jpbElNLFL8JItxzk`;
  return await axios
    .get(url_geocode)
    .then((resp) => {
      if (resp.data.status === "ZERO_RESULTS") {
        return null;
      }
      if (resp.data.status === "OK") {
        const lat = resp.data.results[0].geometry.location.lat;
        const lng = resp.data.results[0].geometry.location.lng;
        return { lat: lat, lng: lng };
      }
    })
    .catch((error) => {
      console.log(
        "Google_API_GeoCode: Error in getting the location: " + location
      );
      return null;
    });
}

exports.getGeoLocation = getGeoLocation;
