interface MarkerConfig {
    info: string;
    title: string;
    position: { lat: number; lng: number };
}

class CustomMap {
    private _googleMapInstance: google.maps.Map;

    constructor(
        _mapDiv: Element,
        configs: { zoom: number; mapCenter: { lat: number; lng: number } }
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

    createMarker(configs: MarkerConfig): void {
        const { title, position, info } = configs;
        const marker = new google.maps.Marker({
            map: this._googleMapInstance,
            title,
            position,
        });
        const markerInfo = new google.maps.InfoWindow({
            content: info,
        });

        marker.addListener('click', (event) => {
            markerInfo.open(this._googleMapInstance, marker);
        });
    }
}

export { CustomMap };
