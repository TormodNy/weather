import { afterAll, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as useForecastHooks from "../../../../hooks/useForecast";
import * as useCoordinatesHooks from "../../../../hooks/useCoordinates";
import { locationForecastMock } from "../../../mockData/locationforecast";
import MyLocationBox from "../../../../components/pages/dashboard/MyLocationBox";

describe("MyLocationBox", () => {
    const useForecastSpy = vi.spyOn(useForecastHooks, "useForecast");
    const useCoordinatesSpy = vi.spyOn(useCoordinatesHooks, "useCoordinates");

    test("should render with temperature data from my location", () => {
        useForecastSpy.mockReturnValue(locationForecastMock);
        useCoordinatesSpy.mockReturnValue({
            latitude: 59.911491,
            longitude: 10.757933,
        });

        render(<MyLocationBox />);
        expect(screen.getByText("My location")).toBeDefined();
        expect(screen.getByText("5.4°C")).toBeDefined();
    });

    test("should render with message about not finding position", () => {
        useForecastSpy.mockReturnValue(locationForecastMock);
        useCoordinatesSpy.mockReturnValue(null);

        render(<MyLocationBox />);
        expect(screen.getByText("Cannot get user location")).toBeDefined();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });
});
