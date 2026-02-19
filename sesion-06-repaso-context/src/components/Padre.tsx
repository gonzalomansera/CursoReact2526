import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-red-500 border-4 rounded-lg p-4 bg-red-50'>
            <h1>Padre</h1>
            <div className='mt-4 border-4 border-purple-200'>
                <Hijo />
            </div>
        </div>
    </div>
  )
}

export default Padre