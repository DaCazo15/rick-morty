import axios from 'axios'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const personajes = async (page = 1) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        return response.data.results; 
    } catch (err) {
        console.error("Error en la petición interdimensional:", err.message);
        return null; 
    }
}

export const personajesAll = async () => {

  const cachedData = localStorage.getItem('personajes');
  if (cachedData) {
      return JSON.parse(cachedData);
  }

  let allItems = [];
  for (let i = 0; i < 42; i++) {
    const delay = i > 5 ? 0 : (5 - i)
    const response = await personajes(i+1);
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
        localStorage.setItem('personajes', JSON.stringify(data));
    }
}
