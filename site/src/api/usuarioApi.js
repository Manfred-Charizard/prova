import axios from 'axios'
const api = axios.create({
    baseURL: 'http//localhost:5000'
})

export async function inseriranime(nome){
    const resposta = await api.post('/anime/inserir', {
        inserir:nome
    })
}