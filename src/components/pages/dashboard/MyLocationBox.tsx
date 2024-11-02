import { useCoordinates } from "../../../hooks/useCoordinates";
import DashboardBox from "./DashboardBox";
import LocationBox from "./LocationBox";

function MyLocationBox() {
    const coordinates = useCoordinates();
    if (!coordinates) {
        return <DashboardBox>Cannot get user location</DashboardBox>;
    }
    const { latitude, longitude } = coordinates;

    return (
        <LocationBox
            locationName="My location"
            latitude={latitude}
            longitude={longitude}
        />
    );
}

export default MyLocationBox;
