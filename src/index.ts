import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

let user = new User();
let company = new Company();

let mapDiv = document.getElementById('googleMap');

let map = new CustomMap(mapDiv, {
    zoom: 1,
    mapCenter: {
        lat: 0,
        lng: 0,
    },
});

map.createMarker(user);
map.createMarker(company);
