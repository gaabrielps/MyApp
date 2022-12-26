import { createContext, ReactNode, useEffect, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";

import { storageAuthTokenSave } from "../storage/storageAuthToken";
import { storageUserSave, storageUserGet, storageUserRemove } from "../storage/storageUser";

type AuthContextDataProps = {
    user: UserDTO
    getDatas: (email: string, password: string) => Promise<void>
    signOut: () => Promise<void>
}

type AuthContextProviderProps = {
    children: ReactNode;
}
export const AuthContext = createContext<AuthContextDataProps>({}as AuthContextDataProps)

export function AuthContextProvider({children}:AuthContextProviderProps) {
  //relacioando os dados com a tipagem DTO
  const[user, setUser] = useState<UserDTO>({} as UserDTO)


  async function storageUserAndToken(userData: UserDTO, token: string){
    try{
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      await storageUserSave(userData)
      storageAuthTokenSave(token)

      setUser(user)
      
    } catch(error){
      throw error
    }
  }
  

  async function getDatas(email: string, password: string){
    try {
      const {data} = await api.post('/auth/login', {email, password})
      console.log('dados-->',  data)

      if(data.user && data.token) {
        setUser(data.user)
        storageUserAndToken(data.user, data.token)
      }


    } catch(error) {
      throw error
    }


  }

  async function loadUserData() {
    const userLogged = await storageUserGet()
    if(userLogged){
      setUser(userLogged)
    }
  
  }

  async function signOut(){
    try{
      setUser({} as UserDTO)
      storageUserRemove()

    }catch(error) {
      throw error

    }
  }

  useEffect(() =>{
    loadUserData()
  }, [])
  
    return (
        <AuthContext.Provider value={{user, getDatas, signOut}}>
            {children}
          </AuthContext.Provider>
    )
}