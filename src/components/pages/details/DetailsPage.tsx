import { useLocation } from "react-router-dom";
import BasePage from "../base/BasePage";
import { LocationBoxProps } from "../dashboard/LocationBox";

function DetailsPage() {
    const { state } = useLocation();
    const { locationName, latitude, longitude } = state as LocationBoxProps;

    return (
        <BasePage heading={locationName} backTo="/">
            <section className="flex lg:flex-row flex-col gap-8 w-full justify-center items-center"></section>
        </BasePage>
    );
}

export default DetailsPage;
