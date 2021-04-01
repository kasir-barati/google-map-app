import { User } from './User';
import { Company } from './Company';

let user = new User();
let company = new Company();

let mapDiv = document.getElementById('googleMap');

let map = new google.maps.Map(mapDiv, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0,
    },
});

let userMarker = new google.maps.Marker({
    map,
    title: user.name,
    position: {
        lat: user.location.lat,
        lng: user.location.lng,
    },
});

let companyMarker = new google.maps.Marker({
    map,
    title: company.name,
    position: {
        lat: company.location.lat,
        lng: company.location.lng,
    },
});
