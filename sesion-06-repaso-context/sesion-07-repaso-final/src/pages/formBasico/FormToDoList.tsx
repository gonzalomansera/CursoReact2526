// Simular guardar en una BD 

import { useActionState } from "react";
import type { FormState, TodoData } from "../../types";

const guardarBD = async (todo: TodoData): Promise<void> => {
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    console.log("Guardando en BD ", todo)
    localStorage.setItem("todo", JSON.stringify(todo))

}

// Crear una funcion, asincrona casi siempre que ejecuta react al enviar el form 
const guardarAction=async (
    _prevState: FormState, 
    formData: FormData // formdata eS el objeto que contiene los datos del formulario
    ): Promise <FormState> =>{
    
        // Extraer todos los datos de un form 
        const nombreTodo = formData.get("nombreTodo") as string;
        const fechaTodo = formData.get("fechaTodo") as string;
        if(!nombreTodo || !fechaTodo){
            return {
                error: "Todos los campos son obligatorios",
                success: null,
            };
        }

        try {
            await guardarBD({
                nombre: nombreTodo,
                fecha: fechaTodo,
            })   
            return{
                error: null,
                success: "Todo guardado correctamente 👍🏽",
            } 
        } catch (error) {
            return {
                error: `Error al guardar el todo: ${error}}`,
                success: null,
            }
        }
}


const FormToDoList = () => {
    const [state,formAction,isPending] = useActionState(guardarAction,{
        error: null,
        success: null,
    });
  return (
    <div>
        <form action={formAction}>

        </form>
    </div>
  )

}

export default FormToDoList