import React, { Suspense, useState } from "react"
import { PlatosList } from "./components/PlatosList"
import LoadingFallback from "./components/LoadingFallback"
import Buscar from "./components/Buscar" // Importamos el nuevo componente
import { fetchPlatos } from "./utils/Api"

function App() {
  const [platosPromise] = useState(() => fetchPlatos())
  const [busqueda, setBusqueda] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4"> 
            Menú platos <span className="text-orange-600">PREMIUM</span>
          </h1>
          <p className="text-gray-500 italic mb-4">"Si quiere una cena elegante, llévese un bogavante"</p>
          <code className="text-orange-400 bg-orange-50 px-3 py-1 rounded text-sm">REACT 19</code>
          
          {/* USAMOS EL NUEVO COMPONENTE AQUÍ */}
          <Buscar valor={busqueda} setValor={setBusqueda} />
          
        </header>

        <main>
          <Suspense fallback={<LoadingFallback message="Cocinando platos para ti...🍽️" />}>
            <PlatosList platosPromise={platosPromise} busqueda={busqueda} />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default App