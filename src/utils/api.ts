import { fixados } from "@/components/fixed-card-item";
import axios from "axios";

const request = axios.create({
    baseURL: "https://api.github.com/users/idhelsi"
})

// const fixados = ['clone-twitter-frontend', 'briefing-marca']

export const api = {
    getProjetos: async () => {
        const req = await request('/repos?sort=created&direction=desc');
        // Filtrar repositórios para remover os fixados
        return req.data.filter((repo: any) => 
            !fixados.includes(repo.name.toLowerCase())
        );
    },
    
    getProjetosFixados: async () => {
        const res = await request.get("/repos?sort=created&direction=desc");
        // Comparação não sensível a maiúsculas/minúsculas
        return res.data.filter((repo: any) =>
            fixados.includes(repo.name.toLowerCase())
        );
    },
}