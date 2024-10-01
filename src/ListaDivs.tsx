import React, { useEffect, useState } from 'react';

interface ListaDivsProps {
    techsArray: string[] | undefined;
}

const ListaDivs: React.FC<ListaDivsProps> = ({techsArray}) => {

    const [lista, setLista] = useState<JSX.Element[]>([]);

    function selecionarDiv(index:number) {
        const numero = index.toString();
        const divSelecionada = document.getElementById(numero)
        
        anexarPalitoNaVid(divSelecionada);
    }

    function anexarPalitoNaVid(div:HTMLElement) {
        console.log('função 2')
        const palito = document.createElement('div');
        console.log(palito)
        palito.classList.add('palitos');
        div.appendChild(palito);
    }

    useEffect(() => {
        if (techsArray) {
            const divs = techsArray.map((tech, index) => (
                <div key={index} className='border rounded-md flex'>
                    <div className='w-[25%] p-4 bg-blue-900 rounded-md'>
                        <h2 className='text-center p-4 w-full border rounded-md bg-blue-950 text-green-500 font-bold text-2xl'>{tech}</h2>
                        <button 
                        className='text-center w-full p-2 text-green-200 bg-green-500 hover:bg-green-600 ' 
                        onClick={() => selecionarDiv(index)}
                        >
                            Add
                        </button>
                    </div>
    
                    <div id={index.toString()} className={`w-[75%] p-1 flex gap-1`}>
    
                    </div>
    
                </div>
            ))
        setLista(divs)
        }

    }, [techsArray])


   
    
    return (

        <div className='flex flex-col gap-8'>
            {lista}
        </div>

    );
};

export default ListaDivs;

// const lista = techsArray?.map(
//     techsArray =>
//     <div className='border rounded-md flex' id={`${techsArray}'-Pilha'`} key={techsArray}>
//         <div className='w-[25%] border p-2 bg-green-50'>
//             <h2 ref={techsArrayRef} className='font-bold text-lg text-green-500'>{techsArray}</h2> 
//             <button onClick={() => aumentar(techsArrayRef)} >Add Count</button>
//         </div>

//         <div ref={index+1} className={`w-[75%] p-1`}>

//         </div>
        
//     </div>
// )
