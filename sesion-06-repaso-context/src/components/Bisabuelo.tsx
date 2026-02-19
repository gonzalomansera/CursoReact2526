import React from 'react'
import Abuelo from './Abuelo'
import useFamily from '../hooks/useFamily'

const Bisabuelo = () => {
  const { mensaje } = useFamily()
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-purple-500 border-4 rounded-lg p-4 bg-purple-50'>
            <h1 className='text-xl font-bold'>Bisabuelo</h1>
            <div className='mt-4 border-4 border-purple-200'>
                <strong>{mensaje}</strong>
                <Abuelo />
            </div>
        </div>
    </div>
  )
}

export default Bisabuelo