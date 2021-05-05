import React, { createContext, useCallback, useState } from 'react';
import { fetchSinToken } from '../helpers/fetch';


export const AuthContext  = createContext();


const initialState = {
  uid : null,
  checking : true,
  logged : false,
  name : null,
  email : null
}

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState(initialState);

  const login = async(email, password) => {
    const resp = await fetchSinToken('login', { email, password }, 'POST');

    if(resp.ok){
      localStorage.setItem('token', resp.token);
      const { usuario } = resp;

      setAuth({
        uid : usuario.uid,
        checking : false,
        logged : true,
        name : usuario.nombre,
        email : usuario.email
      });
    }

    return resp;
  }
  const logout = () => {

  }

  const register = (nombre, email, password) => {

  }

  const verificaToken = useCallback(() => {
      
    },[]
  );


  return (

    <AuthContext.Provider value={{
      login,
      logout,
      register,
      verificaToken,
      auth
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
