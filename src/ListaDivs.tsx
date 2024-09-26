import React, { useEffect, useState } from 'react';

interface ListaDivsProps {
    techsArray: string[];
}

const ListaDivs: React.FC<ListaDivsProps> = ({techsArray}) => {

    const [lista, setLista] = useState<JSX.Element[]>([]);
    const [numeroDeHits, setNumeroDeHits] = useState<number[]>([]);

    useEffect(() => {
        if (techsArray?.length !== 0) {
            const lista = techsArray?.map(techsArray =>
                <div className='border rounded-md flex' id={`${techsArray}'-Pilha'`} key={techsArray}>
                    <div className='w-[25%] border p-2 bg-green-50'>
                        <h2 className='font-bold text-lg text-green-500'>{techsArray}</h2> 
                    </div>

                    <div className={`w-[75%] p-1 numero-de-hits-${numeroDeHits}  `}>

                    </div>
                    
                </div>
            )
            setLista(lista);
        }
    }, [techsArray])
    
    return (

        <div className='m-8 p-8 bg-blue-800 rounded-md flex flex-col gap-4'>
            {lista}
        </div>
    );
};

export default ListaDivs;
