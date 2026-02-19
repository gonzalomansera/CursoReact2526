import { useContext } from "react";
import FamilyContext from "../context/FamilyContext";

const useFamily = () => {
    const context= useContext(FamilyContext);
    if(!context){
        throw new Error("Error al traer el contexto")
    }
    return context;
}

export default useFamily;