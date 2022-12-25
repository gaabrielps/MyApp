import { Children, createContext, ReactNode, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";

type AuthContextDataProps = {
    user: UserDTO
}

type AuthContextProviderProps = {
    children: ReactNode;
}
export const AuthContext = createContext<AuthContextDataProps>({}as AuthContextDataProps)

export function AuthContextProvider({children}:AuthContextProviderProps) {
  //relacioando os dados com a tipagem DTO
  const[user, setUser] = useState({
    id:'1',
    name:'gabriel',
    email:'araujolopesgabriel@gmail.com'
  })
    return (
        <AuthContext.Provider value={{user}}>
            {children}
          </AuthContext.Provider>
    )
}