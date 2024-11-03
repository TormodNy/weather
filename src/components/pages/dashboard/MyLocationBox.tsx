import { useCoordinates } from "../../../hooks/useCoordinates";
import DashboardBox from "./DashboardBox";
import LocationBox from "./LocationBox";

function MyLocationBox() {
    const [{ coordinates, error }, getUserCoordinates] = useCoordinates();

    if (!coordinates || error) {
        return (
            <DashboardBox onClick={getUserCoordinates}>
                {error ?? "Click to get location"}
            </DashboardBox>
        );
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
