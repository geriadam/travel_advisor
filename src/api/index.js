import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const options = {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'x-rapidapi-key': '1c7f3a8c97mshbeb9c2f73d227b0p140280jsn784abbd35510',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        };
        const { data: { data } } = await axios.get(URL, options);
        return data;
    } catch (e) {
        console.log(e);
    }
}
