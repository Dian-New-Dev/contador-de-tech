import React, { useEffect, useState, useCallback } from 'react';

interface ListaDivsProps {
    techsArray: string[] | undefined;
}

const ListaDivs: React.FC<ListaDivsProps> = ({ techsArray }) => {
    const [lista, setLista] = useState<JSX.Element[]>([]);

    // Função para selecionar uma div com base no índice
    const selecionarDiv = useCallback((index: number) => {
        const numero = index.toString();
        const divSelecionada = document.getElementById(numero);

        if (divSelecionada) {
            anexarPalitoNaVid(divSelecionada, index);
        } else {
            console.error(`Elemento com ID ${numero} não encontrado`);
        }
    }, []);

    // Função para anexar um palito na div e aumentar o placar
    const anexarPalitoNaVid = useCallback((div: HTMLElement, index: number) => {
        const palito = document.createElement('div');
        palito.classList.add('palitos');
        div.appendChild(palito);
        aumentarScore(index);
    }, []);

    // Função para aumentar o placar na div correta
    const aumentarScore = useCallback((index: number) => {
        const placarArray = document.querySelectorAll('.placares');
        const valorAtualStr = placarArray[index].textContent;
        const valorAtualNum = Number(valorAtualStr);
        const valorFinalStr = (valorAtualNum + 1).toString();
        placarArray[index].textContent = valorFinalStr;
    }, []);

    useEffect(() => {
        if (techsArray) {
            const divs = techsArray.map((tech, index) => (
                <div key={index} className='relative border border-gray-700 rounded-md flex'>
                    <div className='w-[25%] p-4 bg-blue-900 rounded-md'>
                        <h2 className='text-center p-4 w-full border border-gray-700 rounded-md bg-blue-950 text-green-500 font-bold text-2xl'>{tech}</h2>
                        <button 
                            className='rounded-md border border-gray-700 text-center w-full p-2 text-green-200 bg-green-500 hover:bg-green-700' 
                            onClick={() => selecionarDiv(index)}
                        >
                            Add
                        </button>
                    </div>

                    <div id={index.toString()} className='w-[75%] p-1 flex gap-1'></div>

                    <p className='placares absolute w-[50px] h-[50px] grid place-items-center border border-gray-700 bg-green-200 text-blue-950 font-bold text-2xl right-0 rounded-md'>
                        0
                    </p>
                </div>
            ));
            setLista(divs);
        }
    }, [techsArray, selecionarDiv]);

    return <div className='flex flex-col gap-8'>{lista}</div>;
};

export default ListaDivs;
