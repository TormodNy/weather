import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LocationBox from "../../../../components/pages/dashboard/LocationBox";
import * as useForecastHooks from "../../../../hooks/useForecast";
import { locationForecastMock } from "../../../mockData/locationforecast";

describe("LocationBox", () => {
    const useForecastSpy = vi.spyOn(useForecastHooks, "useForecast");

    test("should render with temperature data", () => {
        useForecastSpy.mockReturnValue(locationForecastMock);

        render(
            <LocationBox
                locationName="Oslo"
                latitude={59.911491}
                longitude={10.757933}
            />,
        );
        expect(screen.getByText("Oslo")).toBeDefined();
        expect(screen.getByText("5.4°C")).toBeDefined();

        useForecastSpy.mockRestore();
    });
});
