import React, { useState, useEffect } from 'react';
import View from './view';
import GetCep from '../../repository/buscaCep.repository';

export default () => {

    const [cep, setCep] = useState(); //dado do form
    const [result, setResult] = useState(); //resultado da api
    const [params, setParams] = useState(0); //parametros para a api
    const [logradouro, setLogradouro] = useState() //parse do resultado da api

    useEffect(() => {

        if (params) GetCep(params).then(setResult)

    }, [params])

    useEffect(() => {  //dispara quando eu tenho um retorno da api. <<< falta um errorcase
        if (result) setLogradouro(result.logradouro)
    }, [result])


    const submitClick = () => { //validar os dados antes de considerar como parametros para a api.
        setParams(cep)
    }

    return (
        <View
            cep={cep}
            setCep={setCep}
            submitClick={submitClick}
            result={result}
            logradouro={logradouro}
        />
    );
}
