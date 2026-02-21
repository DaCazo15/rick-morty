import axios from 'axios'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const episodios = async (page = 1) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
        return response.data.results; 
    } catch (err) {
        console.error("Error en la petición interdimensional:", err.message);
        return null; 
    }
}

export const episodiosAll = async () => {

  const cachedData = localStorage.getItem('episodios');
  if (cachedData) {
      return JSON.parse(cachedData);
  }

  let allItems = [];
  for (let i = 0; i < 3; i++) {
    const delay = i > 50 ? 2 : (50 - i)
    const response = await episodios(i+1);
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
        localStorage.setItem('episodios', JSON.stringify(data));
    }
}
