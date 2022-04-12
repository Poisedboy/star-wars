import * as axios from 'axios';

const useAPI = () => {

    const requestInfo = async ({category, id}) => {
        try {
            const getData = await axios.get(`https://swapi.dev/api/${category}/${id}/`);
            return getData;
        } catch(e) { 
            return e.response;
        } finally {
            console.log('GET info');
        }
    };

    const requestPicture = async ({category, number}) => {
        try {
            const getPicture = await axios.get(`https://starwars-visualguide.com/assets/img/${category}/${number}.jpg`);
            return getPicture;
        } catch(e) {
            return e.response;
        } finally {
            console.log('GET picture');
        };
    }

    return {
        requestPicture,
        requestInfo
    };
};

export default useAPI;
