import React, { useState, useEffect } from "react";
import axios from "axios";

function Hotels() {
    const [hotelData, setHotelData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/details',
                params: {
                    domain: 'AE',
                    hotel_id: '1105156',
                    locale: 'en_GB'
                },
                headers: {
                    'X-RapidAPI-Key': 'edd1d5ea61msh316f2d98ccac16bp1c1d18jsn25a1aebebadf',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setHotelData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!hotelData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Hotel Details</h1>
            <p>Name: {hotelData.name}</p>
            <p>Location: {hotelData.location}</p>
            {/* Render other hotel details as needed */}
        </div>
    );
}

export default Hotels;
