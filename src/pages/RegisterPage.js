import React, { useContext, useState } from "react";
import {
  Link
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Swal from 'sweetalert2';

export const RegisterPage = () => {

  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "test0@test.com",
    password: "123456",
    nombre: 'test',
  });


  const onChange = ({target}) => {
    const { name, value }  = target;
    setForm({
      ...form,
      [name] : value
    });
  }

  const onSubmit = async(ev) => {
    ev.preventDefault();

    //llamar el backend
    const  { email, password, nombre } = form;

    const { ok } = await register(nombre, email,  password, );
    
    if( !ok ){
      Swal.fire('Error', 'Usuario no pudo ser creado', 'error');
    }

  }

  const todoOk = () => {
    return (form.email.length > 0 && form.password.length > 0 && form.nombre.length > 0) ? true : false;
  }

  

  return (
    <form 
      onSubmit={onSubmit}
      className="login100-form validate-form flex-sb flex-w"
    >
      <span className="login100-form-title mb-3">Chat - Registro</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          placeholder="Nombre"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Password"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button 
          type="submit"
          className="login100-form-btn"
          disabled={!todoOk()}
        >Crear cuenta</button>
      </div>
    </form>
  );
};
