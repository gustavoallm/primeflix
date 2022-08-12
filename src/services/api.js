import axios from 'axios';

// base da url: https://api.themoviedb.org/3/
// url api: https://api.themoviedb.org/3/movie/now_playing?api_key=a977d3b3d872627eab01f44e573aa26e&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
