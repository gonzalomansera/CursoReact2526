import React from 'react'
import useFamily from '../hooks/useFamily'
// const [newMensaje, setNewMensaje] = useState("")
const Nieto = () => {
  const { mensaje, setMensaje } = useFamily()

  return (
    <div className='p-4 max-w-2xl mx-auto'>
        <div className='border-yellow-500 border-4 rounded-lg p-4 bg-yellow-50'>
            <h1>Nieto</h1>
            <p>{mensaje}</p>
            {/* <button className='px-4 py-2 bg-blue-500 text-white hover:bg-gray-500 transition-all' onClick={()=>setMensaje("Gonzalo")}> Cambiar nombre</button> */}
            <form action="">
                <input 
                value={mensaje}
                type="text" 
                placeholder='Escriba su nombre' 
                onChange={(e)=>setMensaje(e.target.value)} 
                className='px-4 py-2 bg-gray-900 text-white hover:bg-gray-500 transition-all' 
                />
            </form>
            <button className='px-4 py-2 bg-blue-500 text-white hover:bg-gray-500 transition-all' onClick={()=>setMensaje("Hola desde el contexto de la familia")}> Resetear mensaje</button>

        </div>
    </div>
  )
}

export default Nieto