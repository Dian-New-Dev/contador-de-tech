import React, { useState} from 'react';
import Formulario from './Formulario';


const App: React.FC = () => {

    return (
        <div>
            <div className='grid place-items-center'>
                <div className='bg-blue-950 w-full h-full flex flex-col gap-4'>
                    <div className='bg-blue-900'>
                        <h1 className='text-2xl text-center font-bold text-green-600 italic p-8'>CONTADOR DE TECHS</h1>
                    </div>

                    <Formulario />
                    
                    
                </div>
            </div>
        </div>
  );
};

export default App;
