export class WeatherResponse {
    constructor(
        public lastUpdated: Date,
        public country: string,
        public city: string,
        public weatherMeasurements: WeatherMeasurement[]
    ) {}
}

export class WeatherMeasurement {
    constructor(
        public timeStamp: Date,
        public temperature: number,
        public temperatureFeelsLike: number,
        public temperatureMin: number,
        public temperatureMax: number,
        public pressure: number,
        public humidity: number,
        public seaLevel: number,
        public groundLevel: number
    ) {}
}