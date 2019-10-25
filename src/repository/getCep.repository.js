import axios from 'axios';

export default async function GetCep(cep) { // pode ou não abstrair o repository, criando novas camadas para diferenciar (api, local)
    return axios.get(`http://viacep.com.br/ws/${cep}/json/`).then(res => res.data)
}

//obs criar um folder novo para casos de erro / msg/ padronizar o retorno no front.