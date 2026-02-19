export interface Plato {
    id: number,
    nombre: string,
    categoria: string,
    origen:string,
    calorias: number,
    ingredientes: string [],
    imagen: string
}

export const API_CONFIG = {
    BASEURL: `${import.meta.env.VITE_API_URL}` ,
    ENDPOINTS: {
        PLATOS: "/api/platos",
        STATS: "stats"
    }


    }
