import React from 'react';
import Nieto from './Nieto';
import useFamily from '../hooks/useFamily';

const Hijo = () => {
  // Extraemos las funciones del hook
  const { incrementarContador, decrementarContador } = useFamily();

  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <div className='border-orange-500 border-4 rounded-xl p-6 bg-orange-50 shadow-lg'>
        <h1 className='text-2xl font-bold text-orange-700 mb-4'>Hijo (Sección Compras)</h1>
        
        <div className='mt-4 p-6 border-4 border-purple-200 rounded-lg bg-white flex flex-col gap-4'>
          <div className='flex gap-4'>
            
            <button 
              type="button" 
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md border-b-4 border-blue-800'
              onClick={() => incrementarContador()}
            >
              +
            </button>

            <button 
              type="button" 
              className='flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md border-b-4 border-red-800'
              onClick={() => decrementarContador()}
            >
              -
            </button>
          </div>

          <div className="mt-6 border-t pt-4">
            <Nieto />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hijo;