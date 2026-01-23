import LoadingFallback from "./components/LoadingFallback";
import PlatoCard from "./components/PlatoCard";
import { useFetch } from "./hooks/useFetch"
import { API_CONFIG, type Plato} from "./Types";


const AppReact18 = () => {
    const url= `${API_CONFIG.BASEURL}${API_CONFIG.ENDPOINTS.PLATOS}`
    const { data:platos, loading, error } = useFetch<Plato[]>(url)

    useFetch(url)
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
          
        </header>

        <main>
          {loading && (<LoadingFallback message="Cocinando platos para ti...🍽️" />)}
          {error && (<div> Error cargando</div>)}
          {platos && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {platos.map((plato: Plato) => (
                <PlatoCard key={plato.id} plato={plato} />
                ))}
            </div>
          )}
          
        </main>
      </div>
    </div>
  )
}

export default AppReact18