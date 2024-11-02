import BasePage from "../base/BasePage";
import LocationBox from "./LocationBox";
import MyLocationBox from "./MyLocationBox";

function DashboardPage() {
    return (
        <BasePage heading="Dashboard">
            <section className="flex lg:flex-row flex-col gap-8 w-full justify-center items-center">
                <MyLocationBox />
                <LocationBox
                    locationName="London"
                    latitude={51.509865}
                    longitude={-0.118092}
                />
                <LocationBox
                    locationName="Berlin"
                    latitude={52.520008}
                    longitude={13.404954}
                />
            </section>
        </BasePage>
    );
}

export default DashboardPage;
