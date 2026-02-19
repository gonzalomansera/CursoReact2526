import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { toast } from 'sonner'; 
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/')
  };

  useEffect(() => {
    toast.success('Hola admin', {
      description: 'Bienvenido de nuevo al panel de control.',
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      {/* Tarjeta con esquinas suavizadas (2xl) y bordes neutros */}
      <div className="bg-white p-10 rounded-2xl shadow-md border border-slate-200 text-center max-w-sm w-full">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Panel de Administración
          </h1>
          <p className="text-slate-500 text-sm mt-1">Sesión activa como administrador</p>
        </div>
    
        <div className="py-4 border-t border-b border-slate-50 mb-6">
           <p className="text-slate-600 text-sm">¿Deseas finalizar tu sesión actual?</p>
        </div>

        <button 
          onClick={handleLogout}
          /* Botón más serio: fondo gris muy claro que oscurece al pasar el mouse */
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-sm active:bg-black"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default DashBoard