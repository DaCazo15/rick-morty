import axios from 'axios';

// Función para obtener una página individual
const fetchPage = async (page) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        return response.data.results;
    } catch (error) {
        console.error(`Fallo en la página ${page}:`, error);
        return []; // Retornamos array vacío si una página falla para no romper el push
    }
};

export const personajesAll = async () => {
    const cachedData = localStorage.getItem('personajes');
    
    if (cachedData) {
        const parsed = JSON.parse(cachedData);
        if (parsed.length > 0) return parsed; // Solo retornamos si hay datos reales
    }

    // Como experto Full-Stack, sabemos que 42 peticiones son demasiadas para un cliente.
    // Vamos a traer las primeras 10 páginas (200 personajes) de golpe para velocidad.
    const totalPages = 10; 
    const promises = [];

    for (let i = 1; i <= totalPages; i++) {
        promises.push(fetchPage(i));
    }

    try {
        const results = await Promise.all(promises);
        const allItems = results.flat(); // Aplana los arrays de cada página en uno solo
        
        if (allItems.length > 0) {
            localStorage.setItem('personajes', JSON.stringify(allItems));
        }
        return allItems;
    } catch (error) {
        console.error("Fallo masivo en el portal:", error);
        return [];
    }
};
