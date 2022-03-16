import * as axios from 'axios';

const useAPI = () => {

    const requestPeople = async (url) => {
        try {
            const data = await axios.get('https://swapi.dev/api/people/');
            return data.data.results;
        } catch(e) {
            console.log('Error: ', e)
        } finally {
            console.log('request has done');
        }
    };

    const requestFilms = async () => {
        try {
            const data = await axios.get('https://swapi.dev/api/films');
        } catch (e) {

        } finally {
            console.log('request films has done');
        }
    }

    return {
        requestPeople,
        requestFilms,
    };
};

export default useAPI;
