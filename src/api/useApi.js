import * as axios from 'axios';

const useAPI = () => {

    const requestInfo = async ({category, id}) => {
        try {
            const getData = await axios.get(`https://swapi.dev/api/${category}/${id}/`);
            const response = getData.data;
            return response;
        } catch(e) {
            console.log('Error: ', e)
        } finally {
            console.log('Request info has done');
        }
    };

    const requestPicture = async ({category, number}) => {
        try {
            const fetchUrl = await axios.get(`https://starwars-visualguide.com/assets/img/${category}/${number}.jpg`);
            const response = fetchUrl.config.url;
            console.log(response);
            return response;
        } catch(e) {
            console.log('Picture error ', e);
        } finally {
            console.log('Request picture has done');
        };
    }

    return {
        requestPicture,
        requestInfo
    };
};

export default useAPI;
