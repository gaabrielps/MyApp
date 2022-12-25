import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";

type AuthContextDataProps = {
    user: UserDTO
    getDatas: (email: string, first_name: string) => void
}

type AuthContextProviderProps = {
    children: ReactNode;
}
export const AuthContext = createContext<AuthContextDataProps>({}as AuthContextDataProps)

export function AuthContextProvider({children}:AuthContextProviderProps) {
  //relacioando os dados com a tipagem DTO
  const[user, setUser] = useState<UserDTO>({} as UserDTO)

  function getDatas(email: string, first_name: string){
    setUser({
      email,
      first_name
    })
  }
  
    return (
        <AuthContext.Provider value={{user, getDatas}}>
            {children}
          </AuthContext.Provider>
    )
}