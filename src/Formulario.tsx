import React, { useEffect, useState } from 'react';
import ListaDivs from './ListaDivs';

const Formulario: React.FC = () => {

    const [item, setItem] = useState<string>('');
    const [techsArray, setTechsArray] = useState<string[]>();

    function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
        setItem(e.target.value)
        //setTechsArray(e.target.value)        
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setTechsArray([
            ...(techsArray || []), // "|| []" assegura que mesmo se techsArray for undefined, ele virará um array
            item 
        ])

        




    }


    
    return (

        <div className='p-4'>
            <form
            name='formulario'
            onSubmit={handleSubmit}
            className='flex gap-4'
            >
                
                <input
                className='w-[300px] p-2 rounded-md'
                onChange={handleInput}
                name='texto' 
                type="text"
                placeholder='Inserir Tech'
                />
                
                <button className='border-2 border-gray p-2 rounded-md bg-green-500 text-gray-100 hover:bg-green-800' type='submit'>Submeter</button>
                <button className='border-2 border-gray p-2 rounded-md bg-green-500 text-gray-100 hover:bg-green-800' type='reset'>Limpar</button>
            </form>

            <ListaDivs techsArray={techsArray} />


        </div>


                    

                
                

    );
};

export default Formulario;
