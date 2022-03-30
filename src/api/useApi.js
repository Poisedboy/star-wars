import * as axios from 'axios';

const useAPI = () => {

    const requestInfo = async ({category, id}) => {
        try {
            const getData = await axios.get(`https://swapi.dev/api/${category}/${id}/`);
            const response = getData.data;
            return {
                name: response.name,
                birth: response.birth_year,
                gender: response.gender
            };
        } catch(e) { 
            console.log(e.message);
        } finally {
            console.log('GET info');
        }
    };

    const requestPicture = async ({category, number}) => {
        try {
            const getPicture = await axios.get(`https://starwars-visualguide.com/assets/img/${category}/${number}.jpg`);
            const response = getPicture.config.url;
            return response;
        } catch(e) {
            console.log(e.message);
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
