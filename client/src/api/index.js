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
              'X-RapidAPI-Key': '670a3c019bmsh2b4dab3762397e2p1f2edfjsn02b44e537738',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }
          );
        console.log(data);
        return data;
    } catch (error) {
        console.error(error)
    }
}