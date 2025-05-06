import axios from "axios";
import { languages } from "eslint-plugin-prettier";

const api = axios.create ({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '66721f9a95e5ac3dd38491b5ccd7457e',
        languages: "pt-BR",
        page: 1
    }
})

export default api