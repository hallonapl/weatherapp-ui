import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { jest } from "@jest/globals";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import { WeatherMeasurement, WeatherResponse } from "../../models/WeatherResponse";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("WeatherDisplay Component", () => {
    const mockWeatherResponse: WeatherResponse = {
        lastUpdated: new Date("2025-04-03T12:00:00Z"),
        country: "Italy",
        city: "Rome",
        weatherMeasurements: [
            {
                timeStamp: new Date("2025-04-03T10:00:00Z"),
                temperature: 293.15,
                temperatureFeelsLike: 295.15,
                temperatureMin: 290.15,
                temperatureMax: 296.15,
                pressure: 1013,
                humidity: 60,
                seaLevel: 1015,
                groundLevel: 1010,
            },
        ],
    };

    it("renders 'Select location' when no city is selected", () => {
        render(<WeatherDisplay location={null} />);
        expect(screen.getByText("Select location")).not.toBeNull();
    });

    it("renders weather data when a location is provided", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: mockWeatherResponse });

        render(<WeatherDisplay location="Rome" />);

        // Wait for the API call to resolve and the component to update
        await waitFor(() => {
            expect(screen.getByText("The weather in Rome")).not.toBeNull();
            expect(screen.getByText("Last updated: 2025-04-03, 14:00:00 UTC")).not.toBeNull();
            expect(screen.getByText("Rome, Italy")).not.toBeNull();
        });
    });

    it("handles API errors gracefully", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("API Error"));

        render(<WeatherDisplay location="Rome" />);

        // Ensure the error is logged (you can mock console.error if needed)
        await waitFor(() => {
            expect(screen.queryByText("The weather in Rome")).toBeNull();
        });
    });
});