import React, { useState } from 'react';

interface AvisoProps {
    item: string;
    setAviso: React.Dispatch<React.SetStateAction<boolean>>;
}

const Aviso: React.FC<AvisoProps> = ({ item, setAviso }) => {

    return (
        <div className='absolute w-full h-full grid place-items-center'>
            <div 
            className='
            bg-blue-800
            border-4
            border-black
            rounded-md
            p-16
            flex
            flex-col
            gap-4
            items-center
            justify-center
            '>
                <p 
                className='
                text-green-200
                text-3xl
                font-bold'>{item} já foi inserido</p>

                <button 
                className='
                border-2
                border-blue-950
                bg-green-500
                p-2
                rounded-lg
                font-bold
                text-green-200
                '
                onClick={() => setAviso(false)}
                >Fechar</button>

            </div>
        </div>
    );
};

export default Aviso;
