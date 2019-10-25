import React, { useState } from 'react';
import View from './view';

export default () => {

    const [cep, setCep] = useState();
    const submitForm = () => {
        alert(cep)
    }

    return (
        <View
            cep={cep}
            setCep={setCep}
            submitForm={submitForm}
        />
    );
}
