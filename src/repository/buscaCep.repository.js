import axios from 'axios';

export default async function GetCep(cep) {
    return axios.get(`http://viacep.com.br/ws/${cep}/json/`).then(res => res.data)
}