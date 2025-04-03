import axios from "axios";
import Grid from "@mui/material/Grid2";
import { LineChart } from "@mui/x-charts";
import type { } from '@mui/x-charts/themeAugmentation';
import { useEffect, useState } from "react";
import { WeatherMeasurement, WeatherResponse } from "../../models/WeatherResponse";


export default function WeatherDisplay({ location }: { location: string | null }) {
    const [updated, setuUpdated] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [measurements, setMeasurements] = useState<WeatherMeasurement[]>([]);

    useEffect(() => {
        const fetchWeather = async () => {
            if (!location) return;
            if (location === "") return;

            var weather = await axios.get<WeatherResponse | null>(`https://localhost:7013/api/WeatherData/weather/city/${location}`);
            if (!weather.data) return;
            if (weather.data.weatherMeasurements.length === 0) return;

            var weatherMeasurements = weather.data?.weatherMeasurements.sort((a, b) => {
                return new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime();
            });
            setMeasurements(weatherMeasurements ?? []);
            setuUpdated(weather.data?.lastUpdated ? new Date(weather.data.lastUpdated).toLocaleString() : null);
            setCity(weather.data?.city ?? null);
            setCountry(weather.data?.country ?? null);
            return;
        }
        fetchWeather()
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, [location]);

    const toCelsius = (kelvin: number) => {
        return Math.round(kelvin - 273.15);
    }

    return (
        <>
            <Grid>
                {city === null ? <h1>Select location</h1> : <h1>The weather in {city}</h1>}
                {city &&
                    <div className="card text-center">
                        <div className="card-header">Last updated: {updated} UTC</div>
                        <div className="card-body">
                            <h5 className="card-title">{city}, {country}</h5>
                            <LineChart
                                xAxis={[
                                    {
                                        dataKey: 'time',
                                        valueFormatter: (value: Date) => new Date(value).toDateString(),
                                        min: new Date(measurements[0].timeStamp),
                                        max: new Date(measurements[measurements.length - 1].timeStamp),
                                    },
                                ]}
                                series={[
                                    {
                                        dataKey: 'temperature',
                                        valueFormatter: (value) => value?.toString() ?? "",
                                        showMark: false,
                                        label: "Temperature",
                                        color: "#ff0000",
                                    },
                                    {
                                        dataKey: 'minTemperature',
                                        valueFormatter: (value) => value?.toString() ?? "",
                                        showMark: false,
                                        label: "Min temperature",
                                        color: "#00ff00",
                                    },
                                    {
                                        dataKey: 'maxTemperature',
                                        valueFormatter: (value) => value?.toString() ?? "",
                                        showMark: false,
                                        label: "Max temperature",
                                        color: "#0000ff",
                                    },                                    {
                                        dataKey: 'feelsLikeTemperature',
                                        valueFormatter: (value) => value?.toString() ?? "",
                                        showMark: false,
                                        label: "Feels like",
                                        color: "#ff00ff",
                                    },
                                ]}
                                dataset={measurements.map((measurement) => {
                                    return {
                                        time: new Date(measurement.timeStamp),
                                        temperature: toCelsius(measurement.temperature),
                                        minTemperature: toCelsius(measurement.temperatureMin),
                                        maxTemperature: toCelsius(measurement.temperatureMax),
                                        feelsLikeTemperature: toCelsius(measurement.temperatureFeelsLike),
                                    };
                                })}
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>}
            </Grid>

        </>
    );
}

//
//