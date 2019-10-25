import React, { useState, useEffect } from 'react';
import View from './view';
import GetCep from '../../repository/getCep.repository';

export default () => {

    const [cep, setCep] = useState(); //dado do form
    const [params, setParams] = useState(0); //parametros para a api
    const [result, setResult] = useState(); //resultado da api
    const [logradouro, setLogradouro] = useState() //parse do resultado da api

    //obs: é possível a view renderizar dinamicamente oque vier da api, ou ela ser parseada na model, isso varia de acordo com o gosto.

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
