import React, { useState } from 'react';

const Formulario: React.FC = () => {

    const [answer, setAnswer] = useState<string>('');

    function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value)        
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(answer) //esse é o que nos interessa
    }
    
    return (

        <div className='p-4'>
            <form
            name='formulario'
            onSubmit={handleSubmit}
            className='flex gap-4'
            >
                
                <input
                className='w-[300px] p-2'
                onChange={handleInput}
                name='texto' 
                type="text"
                placeholder='Inserir Tech'
                />
                
                <button className='border-2 border-gray p-2 rounded-md bg-green-500 text-gray-100 hover:bg-green-800' type='submit'>Submeter</button>
                <button className='border-2 border-gray p-2 rounded-md bg-green-500 text-gray-100 hover:bg-green-800' type='reset'>Limpar</button>
            </form>
        </div>


                    

                
                

    );
};

export default Formulario;
