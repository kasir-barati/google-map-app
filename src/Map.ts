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

    createMarker(configs: {
        title: string;
        position: { lat: number; lng: number };
    }) {
        const { title, position } = configs;

        new google.maps.Marker({
            map: this._googleMapInstance,
            title,
            position,
        });
    }
}

export { CustomMap };
