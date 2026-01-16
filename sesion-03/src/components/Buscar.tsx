import React from 'react';

interface BuscarProps {
  valor: string;
  setValor: (nuevoValor: string) => void;
}

const Buscar = ({ valor, setValor }: BuscarProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      <div className="relative group">
        <input
          type="text"
          placeholder="Busca por nombre o ingrediente..."
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="w-80 pl-4 pr-10 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
        />
        <span className="absolute right-3 top-2.5 text-gray-400 group-focus-within:text-orange-500">

        </span>
      </div>
      {/* El botón es opcional ya que la búsqueda es en tiempo real, pero lo dejo por diseño */}
      <button className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 shadow-md hover:shadow-lg transition-all active:scale-95">
        Buscar
      </button>
    </div>
  );
};

export default Buscar;