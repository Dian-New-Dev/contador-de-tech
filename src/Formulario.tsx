import React, { useState, useRef } from 'react';
import ListaDivs from './ListaDivs';
import Aviso from './Aviso';

const Formulario: React.FC = () => {

    const [item, setItem] = useState<string>('');
    const [techsArray, setTechsArray] = useState<string[] | undefined>();

    function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
        const inputMinuscula = e.target.value.toLocaleLowerCase();
        setItem(inputMinuscula)
        //passa tudo minusculo \/        
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        //if para checar se usuario inputou valor repetido
        for (let i = 0; i < techsArray?.length; i++) {
            if (item === techsArray[i]) {
                avisoValorRepetido();
                return;
            }
        }
        //se usuario não inputou valor repetido, segue:
        //converte primeira letra para maiusculo
        

        setTechsArray([
            ...(techsArray || []), // "|| []" assegura que mesmo se techsArray for undefined, ele virará um array
            item 
        ])
    }


    //mostrar aviso de valor repetida;
    const [aviso, setAviso] = useState<boolean>(false);

    function avisoValorRepetido() {
        setAviso(true);
    }

    //apagar form após clicar em submit
    const inputRef = useRef<HTMLInputElement>(null);

    const limparInput = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }
    


    
    return (

        <div className='relative p-4 flex flex-col gap-8'>
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
                ref={inputRef}
                />
                
                <button onClick={limparInput} className='border-2 border-gray p-2 rounded-md bg-green-500 text-gray-100 hover:bg-green-800' type='submit'>Submeter</button>
                <button className='border-2 border-gray p-2 rounded-md bg-green-500 text-gray-100 hover:bg-green-800' type='reset'>Limpar</button>
            </form>

            <ListaDivs techsArray={techsArray} />

            {aviso && <Aviso item={item} setAviso={setAviso} />}


        </div>


                    

                
                

    );
};

export default Formulario;
