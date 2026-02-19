import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Saludo = () => {
    const { nombre } = useParams<{nombre:string}>()
  return (
    <>
        <div className='p-20 text-center animate-spin duration-500'></div>
        <title>
            Saludos a {nombre}
        </title>
        <meta name='Descripction ' content={`Pagina personalizada para ${nombre}`} />
        <div className='mb-6'>
            <h1 className='text-6xl text-slate-900 '>Bienvenido, <span className='text-blue-600'>{nombre}</span> </h1>
            <p>Dato recuperado con el hook useParams</p>
            <Link to="/" className="mt-20 inline-block px-8 py-5 bg-slate-900 rounded-2xl font-bold shadow-lg active:scale-95 transition-all text-white">
                Volver
            </Link>
        </div>
    </>
  )
}

export default Saludo