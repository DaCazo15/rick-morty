# Rick & Morty — SPA de Personajes, Episodios y Localizaciones

Proyecto single-page application (SPA) construido con React y Vite que consume la API pública de "Rick and Morty" para mostrar personajes, episodios y localizaciones. La interfaz es responsiva y está organizada en componentes reutilizables, con enfoque en simplicidad y buen rendimiento.

**Características principales**
- **Listado y detalle de personajes:** muestra imagen, especie, estado y ubicación.
- **Catálogo de episodios:** lista de episodios con búsqueda y filtrado.
- **Localizaciones:** exploración de localizaciones con sus residentes.
- **Consumo de API:** peticiones centralizadas a la API de Rick and Morty.
- **Desarrollo con Vite:** arranque rápido, HMR y bundles eficientes.

**Estructura del repositorio**
- `src/`: código fuente de la aplicación.
	- `components/`: componentes React reutilizables (`NavBar`, `Hero`, etc.).
	- `pages/`: vistas de página (`Inicio`, `CatalogoPersonajes`, `CatalogoEpisode`, `CatalogoLocation`, `AcercaDe`).
	- `composables/helpers/`: utilidades y llamados a la API (`PeticionAPI_Personajes.js`, `PeticionAPI_Episodios.js`, `PeticionAPI_Locaciones.js`).
	- `assets/`: estilos, fuentes e imágenes.
- `public/`: activos estáticos servidos tal cual.
- `vite.config.js`, `package.json`: configuración del proyecto y scripts.

**Requisitos**
- Node.js 16+ recomendado.

**Instalación y ejecución**
1. Instalar dependencias:

```bash
npm install
```

2. Levantar servidor de desarrollo:

```bash
npm run dev
```

3. Generar build de producción:

```bash
npm run build
```

4. Previsualizar build:

```bash
npm run preview
```

**Notas sobre el desarrollo**
- Las llamadas a la API están encapsuladas en `src/composables/helpers/` para facilitar su mantenimiento y reutilización.
- El proyecto usa estilos modulares y una estructura de componentes clara para facilitar la escalabilidad.

**Contribuciones**
Pull requests y issues bienvenidos. Para cambios mayores, abre primero un issue describiendo la propuesta.

**Licencia**
Proyecto abierto para uso y aprendizaje; incluye dependencias bajo sus respectivas licencias.

