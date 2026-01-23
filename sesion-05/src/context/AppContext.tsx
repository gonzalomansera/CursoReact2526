import { createContext, type ReactNode } from "react";


export const AppContext = createContext<AppContextType | null>(null)

interface AppProviderProps{
    children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps)=>{
    const [state, setState] = useState<AppState>({
        user: {
            id:"1",
            nombre:"Gonzalo Mansera",
            email:"gonzalo@gmail.com",
            avatar:"image",
            role:"admin"
        },
        theme: "dark",
        lang: "es"

    })
    //Habra que usar el useEfect para cargar el idioma, tema al iniciar sesion

const setUser= (user: User | null)=>{
    //Esto funciona 
    setState({...state, user})
    // 
    // const setTheme = (theme: Theme || null)=>{
    //     setState({...state, theme})
    // }
    // const setLang = (lang: Lang || null)=>{
    //     setState({...state, lang})
    // }
}
const value{
    ...state,
    setUser
    // setTheme,
    // setLang
}
return <AppContext value={value}>{children}</AppContext>
}