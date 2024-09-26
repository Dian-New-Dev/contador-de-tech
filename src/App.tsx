import React, { useEffect, useState } from 'react';

const App: React.FC = () => {

    const [answer, setAnswer] = useState<string>('');

    function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value)        
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(answer) //esse é o que nos interessa
    }
    
    return (
        <div className='grid place-items-center'>
            <div className='bg-blue-950 w-full h-full'>
                <div>
                    <h1>CONTADOR DE TECHS</h1>
                </div>

                <div>
                    <form name='formulario' onSubmit={handleSubmit} className='flex gap-4'>
                        
                        <input onChange={handleInput} name='texto'  type="text" placeholder='Tech' />
                        <button type='submit'>Submeter</button>
                        
                        <button type='reset'>Limpar</button>
                    </form>

                <div>

                </div>


                    
                </div>
                
                
            </div>
        </div>
  );
};

export default App;
