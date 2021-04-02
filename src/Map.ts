import { Location } from './location';

interface Mappable {
    getInfo(): string;
    getTitle(): string;
    getPosition(): Location;
}

class CustomMap {
    private _googleMapInstance: google.maps.Map;

    constructor(
        _mapDiv: Element,
        configs: { zoom: number; mapCenter: Location }
    ) {
        const {
            zoom,
            mapCenter: { lat, lng },
        } = configs;

        this._googleMapInstance = new google.maps.Map(_mapDiv, {
            zoom,
            center: {
                lat,
                lng,
            },
        });
    }

    createMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this._googleMapInstance,
            title: mappable.getTitle(),
            position: mappable.getPosition(),
        });
        const markerInfo = new google.maps.InfoWindow({
            content: mappable.getInfo(),
        });

        marker.addListener('click', (event) => {
            markerInfo.open(this._googleMapInstance, marker);
        });
    }
}

export { CustomMap };
