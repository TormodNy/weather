interface Coordinates {
    latitude: number;
    longitude: number;
}

let coordinates: Coordinates | null = null;
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
            coordinates = {
                latitude,
                longitude,
            };
        },
    );
}

export function useCoordinates(): Coordinates | null {
    return coordinates;
}
