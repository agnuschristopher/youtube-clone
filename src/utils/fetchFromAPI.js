import axios from 'axios';

// Ensure there are NO trailing slashes or extra path folders on this base domain
const BASE_URL = 'https://youtube-data-api-v33.p.rapidapi.com'; 

export const fetchFromAPI = async (url) => {
  const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '7810556b9dmshbb0be3970c0ffbbp1b15a0jsnf2b8ff728c7e',
      'X-RapidAPI-Host': 'youtube-data-api-v33.p.rapidapi.com' // ✅ Fixed: Changed v31 to v33 to match BASE_URL
    } // ✅ Fixed: Added missing closing bracket for headers object
  }; // ✅ Fixed: Added missing closing bracket for options object

  try {
    // Stitch the base domain path together cleanly with axios
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("RapidAPI Endpoint Connection Error:", error?.response?.data || error.message);
    throw error;
  }
};