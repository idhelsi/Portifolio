import axios from "axios";

const request = axios.create({
    baseURL: "https://api.github.com/users/idhelsi"
})

export const api = {
    getProjetos: async () => {
        const req = await request('/repos?sort=created&direction=desc');
        return req.data;
    }
}