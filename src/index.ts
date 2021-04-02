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

map.createMarker({
    title: user.name,
    position: user.location,
    info: user.userInfo(),
});

map.createMarker({
    title: company.name,
    position: company.location,
    info: company.companyInfo(),
});
