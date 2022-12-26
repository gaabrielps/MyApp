import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTHTOKEN_STORAGE } from "./storageConfig";

export async function storageAuthTokenSave(token: string){
    await AsyncStorage.setItem(AUTHTOKEN_STORAGE, token)
}

export async function storageAuthTokenGet(){
    const token =  await AsyncStorage.getItem(AUTHTOKEN_STORAGE)

    return token
}


