import DashboardBox from "./DashboardBox";
import LocationBox from "./LocationBox";

interface Coordinates {
    latitude: number | null;
    longitude: number | null;
}

let { latitude, longitude }: Coordinates = {
    latitude: null,
    longitude: null,
};
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    });
}

function MyLocationBox() {
    if (latitude === null || longitude === null) {
        return <DashboardBox>Cannot get user location</DashboardBox>;
    }

    return (
        <LocationBox
            locationName="My location"
            latitude={latitude}
            longitude={longitude}
        />
    );
}

export default MyLocationBox;
