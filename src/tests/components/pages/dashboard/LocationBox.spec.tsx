import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LocationBox from "../../../../components/pages/dashboard/LocationBox";
import * as useForecastHooks from "../../../../hooks/useForecast";
import { locationForecastMock } from "../../../mockData/locationforecast";
import { Forecast } from "../../../../clients/locationforecast";
import { MemoryRouter } from "react-router-dom";

describe("LocationBox", () => {
    const useForecastSpy = vi.spyOn(useForecastHooks, "useForecast");

    afterAll(() => {
        vi.restoreAllMocks();
    });

    test("should render with temperature data", () => {
        useForecastSpy.mockReturnValue({
            forecast: locationForecastMock?.properties as Forecast,
            isLoading: false,
            error: null,
        });

        render(
            <MemoryRouter>
                <LocationBox
                    locationName="Oslo"
                    latitude={59.911491}
                    longitude={10.757933}
                />
            </MemoryRouter>,
        );
        expect(screen.getByText("Oslo")).toBeDefined();
        expect(screen.getByText("5.4°C")).toBeDefined();
    });

    test("should display forecast error", () => {
        useForecastSpy.mockReturnValue({
            forecast: null,
            isLoading: false,
            error: "Forecast could not be fetched.",
        });

        render(
            <LocationBox
                locationName="Oslo"
                latitude={59.911491}
                longitude={10.757933}
            />,
        );
        expect(
            screen.getByText("Forecast could not be fetched."),
        ).toBeDefined();
    });
});
