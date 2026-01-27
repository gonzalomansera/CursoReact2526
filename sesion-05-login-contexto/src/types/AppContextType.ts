export type theme="light"|"dark"|"system"

export interface User{
    id:string,
    name:string,
    email:string,
    avatar:string,
    rol: "admin" | "user"
    
}

