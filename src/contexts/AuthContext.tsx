import { Children, createContext, ReactNode } from "react";
import { UserDTO } from "../dtos/UserDTO";

type AuthContextDataProps = {
    user: UserDTO
}

type AuthContextProviderProps = {
    children: ReactNode;
}
export const AuthContext = createContext<AuthContextDataProps>({}as AuthContextDataProps)

export function AuthContextProvider({children}:AuthContextProviderProps) {
    return (
        <AuthContext.Provider value={{
            user: { //relacioando os dados com a tipagem DTO
              id:'1',
              name:'gabriel',
              email:'araujolopesgabriel@gmail.com'
            }
    
          }}>
            {children}
          </AuthContext.Provider>
    )
}