import axios from 'axios'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const locaciones = async (page = 1) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
        console.log(response.data)
        return response.data.results; 
    } catch (err) {
        console.error("Error en la petición interdimensional:", err.message);
        return null; 
    }
}

export const locacionesAll = async () => {

  const cachedData = localStorage.getItem('location');
  if (cachedData) {
      return JSON.parse(cachedData);
  }

  let allItems = [];
  for (let i = 0; i < 7; i++) {
    const delay = i > 50 ? 2 : (50 - i)
    const response = await locaciones(i+1);
    if (Array.isArray(response)) {
      allItems.push(...response);
    }
    await sleep(Math.max(0, delay))
  }
  saveLocal(allItems)
  return allItems;
}

const saveLocal = (data) => {
    if (data && data.length > 0) {
        localStorage.setItem('location', JSON.stringify(data));
    }
}
