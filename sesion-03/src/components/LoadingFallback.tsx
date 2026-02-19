import React from 'react'
interface LoadingFallbackProps {
  message?: string
}
const LoadingFallback = ({ message="Cargando..." }:LoadingFallbackProps) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <div className='text-center'>
            <div className='animate-spin rounded-full h-16 w-16 border-2 border-sky-700 mx-auto mb-4'></div>

        </div>
        <p>{message}</p>
    </div>
  )
}

export default LoadingFallback