import { API_CONFIG, type Plato } from "../Types";

// Api hara un fetching a mi api para traer todos los platos 

export const fetchPlatos= async ():Promise<Plato[]> => {
    const url= `${API_CONFIG.BASEURL}${API_CONFIG.ENDPOINTS.PLATOS}`
    try {
        const reponse= await fetch(url)
        if (!reponse.ok){
            throw new Error("Error al cargar los platos");
        }
        return await reponse.json()
        
    } catch (error) {
        console.log(error)
        return []
    }
}