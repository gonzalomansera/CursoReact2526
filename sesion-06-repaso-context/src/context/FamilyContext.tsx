import { createContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";


// Crear el contexto con un hook personalizado llamado createContext

const FamilyContext= createContext<FamilyContextType | null>(null);


// Estado inicial el contexto 
const estadoInicial: FamilyState = {
    mensaje: "Hola desde el contexto de la familia",
    contador: 0 
}

// Crear el Provider (aquello que envuelve a los componentes que van a consumir el contexto)
export function FamilyProvider({ children }: { children: ReactNode }){
    // hooks
    // Cambia el estado del contexto
    const [state, setState] = useState<FamilyState>(estadoInicial);


    // funciones para cambiar los elementos del contexto 
    const setMensaje= (newMensaje:string) => {
        setState(prev => ({...prev, mensaje:newMensaje}))
    }
    const incrementarContador= () => {
        setState(prev=> ({...prev, contador: prev.contador+1}))
    }
    const decrementarContador= () => {
        setState(prev=> ({...prev, contador: prev.contador-1}))
    }

    // Valor para pasarle al FamilyContext
    const value= {
        ...state,
        setMensaje,
        incrementarContador,
        decrementarContador
    }
    return (
        <FamilyContext value={value}>{children}</FamilyContext>
    )

}

// Exportamos el contexto 
export default FamilyContext;


