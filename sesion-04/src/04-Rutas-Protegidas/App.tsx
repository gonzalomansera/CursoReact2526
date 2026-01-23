import { NavLink, Route, Routes } from "react-router-dom";
import PublicHome from "./pages/PublicHome";
import SecretArea from "./pages/SecretArea";
import { useState } from "react";
import { ProtectedRoute } from "./helpers/Protected";
import Header from "./components/Header";

const App = () => {
  // Hooks 
  const [isAllowed, setIsAllowed] = useState(false);

  return (
    <div className='min-h-screen bg-slate-50'>
      <main>
        <Header />
        
        <nav className="max-w-5xl mx-auto flex items-center justify-between bg-slate-800 rounded-2xl p-2">
          <div className="flex gap-8 ml-6">
            {/* Corrección en la lógica de isActive y cierre de llaves */}
            <NavLink 
              to='/' 
              className={({ isActive }) => 
                `text-xs font-bold p-8 py-3 rounded-xl transition-all ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
              }
            >
              Public
            </NavLink>

            <NavLink 
              to='/secret' 
              className={({ isActive }) => 
                `text-xs font-bold p-8 py-3 rounded-xl transition-all ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
              }
            > 
              Secret Area 
            </NavLink>
          </div>

          {/* Se añadió la función para cambiar el estado y el texto del botón */}
          <button 
            onClick={() => setIsAllowed(!isAllowed)} 
            className={`px-10 py-3 mr-4 rounded-xl font-black text-xs uppercase transition-all active:scale-90 
              ${isAllowed
                ? 'bg-slate-900 text-slate-400 border border-slate-700'
                : 'bg-indigo-600 text-white shadow-lg shadow-indigo-400/20'
              }`}
          >
            {isAllowed ? 'Sing out' : 'Sign in'}
          </button>
        </nav>

        <div className="max-w-5xl mx-auto mt-8">
          <Routes>
            <Route path='/' element={<PublicHome />} />
            <Route 
              path='secret' 
              element={
                <ProtectedRoute isAllowed={isAllowed}>
                  <SecretArea />
                </ProtectedRoute> 
              } 
            />            
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;