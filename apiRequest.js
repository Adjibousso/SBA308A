export async function fetchWeatherData(apiUrl, city, apiKey) {
    try {
        const response = await fetch(`${apiUrl} ${city}`,
            // {

            //     headers: {
            //         "x-api-key": apiKey,
            //     }
            // }


        );
        console.log(response);
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data for ${city}`);
        }
        const data = await response.json();
        console.log(data);
        return data;

    }
    catch (error) {
        console.log("Error fetching weather data:", error);
        throw error;
    }
}