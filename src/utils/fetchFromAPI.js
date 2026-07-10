import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': '7810556b9dmshbb0be3970c0ffbbp1b15a0jsnf2b8ff728c7e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// Exporting BOTH ways so Vite cannot possibly fail to find it:
export { fetchFromAPI }; 
export default fetchFromAPI;