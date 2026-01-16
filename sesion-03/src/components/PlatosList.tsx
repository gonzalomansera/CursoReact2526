import { use } from 'react'
import type { Plato } from '../Types'
import PlatoCard from './PlatoCard'

interface PlatosListProps {
  platosPromise: Promise<Plato[]>
  busqueda: string
}

export const PlatosList = ({ platosPromise, busqueda }: PlatosListProps) => {
  let platos = use(platosPromise)
  const textoBusqueda = busqueda.toLowerCase().trim();
  if (!platos) return null;
  if (textoBusqueda) {
  platos = platos.filter((plato: Plato) => 
    plato.nombre.toLowerCase().includes(textoBusqueda) || 
    plato.ingredientes.some(ing => ing.toLowerCase().includes(textoBusqueda))
  );
}

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
      {platos.map((plato: Plato) => (
        <PlatoCard key={plato.id} plato={plato} />
      ))}
    </div>
  )
}