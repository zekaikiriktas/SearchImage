import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 5cRGC3xhjA-ZGnd79aohk3ZWHSO587cx4PH53lxYNl0',
    },
    params: {
      query: term, 
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;
   