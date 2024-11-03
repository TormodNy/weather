import { afterAll, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import * as useForecastHooks from "../../../../hooks/useForecast";
import * as useCoordinatesHooks from "../../../../hooks/useCoordinates";
import { locationForecastMock } from "../../../mockData/locationforecast";
import MyLocationBox from "../../../../components/pages/dashboard/MyLocationBox";
import { Forecast } from "../../../../clients/locationforecast";
import { MemoryRouter } from "react-router-dom";

describe("MyLocationBox", () => {
    const useForecastSpy = vi.spyOn(useForecastHooks, "useForecast");
    const useCoordinatesSpy = vi.spyOn(useCoordinatesHooks, "useCoordinates");

    afterAll(() => {
        vi.restoreAllMocks();
    });

    test("should render with message to click to get location", () => {
        useForecastSpy.mockReturnValue({
            forecast: locationForecastMock?.properties as Forecast,
            isLoading: false,
            error: null,
        });
        useCoordinatesSpy.mockReturnValue([
            {
                coordinates: null,
                error: null,
            },
            () => {},
        ]);

        render(<MyLocationBox />);
        expect(screen.getByText("Click to get location")).toBeDefined();
    });

    test("should render with temperature data from my location", () => {
        useForecastSpy.mockReturnValue({
            forecast: locationForecastMock?.properties as Forecast,
            isLoading: false,
            error: null,
        });
        useCoordinatesSpy.mockReturnValue([
            {
                coordinates: {
                    latitude: 59.911491,
                    longitude: 10.757933,
                },
                error: null,
            },
            () => {},
        ]);

        render(
            <MemoryRouter>
                <MyLocationBox />
            </MemoryRouter>,
        );
        expect(screen.getByText("My location")).toBeDefined();
        expect(screen.getByText("5.4°C")).toBeDefined();
    });

    test("should render with message about not finding position", () => {
        useForecastSpy.mockReturnValue({
            forecast: locationForecastMock?.properties as Forecast,
            isLoading: false,
            error: null,
        });
        useCoordinatesSpy.mockReturnValue([
            {
                coordinates: null,
                error: "Cannot get user location",
            },
            () => {},
        ]);

        render(<MyLocationBox />);
        expect(screen.getByText("Cannot get user location")).toBeDefined();
    });

    test("should show temperature data for my location after clicking", () => {
        useForecastSpy.mockReturnValue({
            forecast: locationForecastMock?.properties as Forecast,
            isLoading: false,
            error: null,
        });
        useCoordinatesSpy.mockReturnValueOnce([
            {
                coordinates: null,
                error: null,
            },
            () => {},
        ]);
        useCoordinatesSpy.mockReturnValueOnce([
            {
                coordinates: {
                    latitude: 59.911491,
                    longitude: 10.757933,
                },
                error: null,
            },
            () => {},
        ]);

        render(
            <MemoryRouter>
                <MyLocationBox />
            </MemoryRouter>,
        );
        fireEvent.click(screen.getAllByText("Click to get location")[0]);

        expect(screen.getByText("My location")).toBeDefined();
        expect(screen.getByText("5.4°C")).toBeDefined();
    });
});
