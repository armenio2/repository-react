import React from 'react';

export default (props) => {

    return (
        <>
            <label htmlFor="CEP">
                Digite um cep
            </label>
            <input id='CEP' type='number' onChange={(e) => props.setCep(e.target.value)} />
            <input type='submit' onClick={() => props.submitClick()} />
            <br />
            <span>{props.logradouro}</span>
        </>
    );
}
