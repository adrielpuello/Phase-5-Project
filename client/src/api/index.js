import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '8bf48981d8msh81c57e182b54ee7p170522jsn838de06a17bf',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }
          );

        return data;
    } catch (error) {
        console.error(error)
    }
}