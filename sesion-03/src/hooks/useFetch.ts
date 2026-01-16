import { useEffect, useState } from "react";

// T ==> generica
export function useFetch<T>(url:string){
    // Aqui guardaremos la data 
    const [data, setData] = useState<T | null>(null)

    // mostrar o no un loop que diga cargando...
    const [loading, setLoading] = useState<boolean>(true)
    
    // por si tenemos errores o fallamos 
    const [error, setError] = useState<Error | null>(null)
    

    useEffect(() => {
      setLoading(true)
      setError(null)
      // Creamos un mando a distancia para abortar el fetch 
      const controller = new AbortController()
      // El signal es una señal que va por el cable del fetch
      const { signal }= controller
      const fetchData = async () => {
        try {
          // Hacemos la llamada y pasamos la señal de cancelacion 
          const response = await fetch(url, { signal })
          if (!response.ok) {
            setError(error as Error)
            throw new Error("Error al cargar los datos")
          }
          const result = await response.json()
          setData(result)
        } catch (error:unknown) {
            setError(error as Error)
          setLoading(false)
        } finally {
            setLoading(false)
        }
      }

      //************ HAY QUE LLAMAR A LA FUNCION DENTRO DE USEEFECCT */
      fetchData()
      // El return se ejecuta cuando se va a desmontar el componente 
      return () => {
        controller.abort()
      }
    }, [url])
    return {data, loading, error}
  
    
}