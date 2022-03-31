import * as axios from 'axios';

const useAPI = () => {

    const requestInfo = async ({category, id}) => {
        try {
            const getData = await axios.get(`https://swapi.dev/api/${category}/${id}/`);
            const response = getData.data;
            console.log(response);
            
            switch(category) {
                case 'people':
                    return {
                        name: response.name,
                        birth: response.birth_year,
                        gender: response.gender
                    };
                case 'films':
                    return {
                        title: response.title,
                        director: response.director,
                        producer: response.producer,
                        release_date: response.release_date,
                        opening_crawl: response.opening_crawl
                    };
                default:
                    return {
                        default: 'Def-title, no data'
                    };
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
