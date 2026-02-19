import { useState, type FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const esAdmin = login(email, password)
        navigate(esAdmin ? '/dashboard' : '/home');    
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
            {/* Cambiado: rounded-2xl en lugar de 3xl y bordes grisáceos */}
            <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md border border-slate-200">
                <div className="text-left mb-10">
                    <h1 className="text-2xl font-bold text-slate-800 mb-1 tracking-tight">Acceso al Sistema</h1>
                    <p className="text-slate-500 text-sm">Por favor, introduce tus datos.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Email</label>
                        <input 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="usuario@dominio.com"
                            /* Cambiado: bordes más finos y focus en azul */
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Contraseña</label>
                        <input 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none"
                        />
                    </div>

                    <button 
                        type="submit"
                        /* Cambiado: color azul marino y sin sombras de colores */
                        className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-lg shadow-sm transition-all active:bg-black"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm