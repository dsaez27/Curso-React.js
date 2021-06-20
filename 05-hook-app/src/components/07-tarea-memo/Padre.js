import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

import './../06-useMemo/effect.css'

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        (num) => {
            setValor( v => v + num);
        },
        [ setValor ],
    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
<<<<<<< HEAD
=======
            {/* <Hijo /> */}
>>>>>>> 1c411d669d8b8a7a4bfd1a376c980bac5880408a
        </div>
    )
}
