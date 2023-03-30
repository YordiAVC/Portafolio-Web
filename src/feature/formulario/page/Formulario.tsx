import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import style from '../page/Formulario.module.css'
import axios from 'axios';

export const Formulario:React.FC = () => {
  const [usuario_correo, setCorreo] = useState('');
  // const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () =>{
    try{
      const response = await axios
      .post(`http://84.46.241.5:40000/api/login`,{usuario_correo, password});
      setLoggedIn(true);
    }catch(error){
      console.error('Error al iniciar sesión:',error);
    }
  }
  if (loggedIn) {
    navigate('/');
  }

  return (
    <div className={style.contenedor}>

      <div className={style.contenedor_izquierdo}>

        <div className={style.contenedor_espacio}>

          <div className={style.caja_titulo}>
            <h1 className={style.titulo}>LOGIN</h1>
          </div>

        </div>

        <div  className={style.contenedor_form}>
        
          <div className={style.caja_form}>

            <div className={style.caja}>
              <label htmlFor="email" className={style.label}>Correo: </label>
              <input className={style.input} type="email" name="email" id="email" value={usuario_correo} onChange={(e)=>setCorreo(e.target.value)} />
            </div>

            {/* <div className={style.caja}>
              <label htmlFor="apellido" className={style.label}>Apellido: </label>
              <input className={style.input} type="text" name="apellido" id="apellido" value={apellido} onChange={cambiarApellido} />
            </div> */}

            <div className={style.caja}>
              <label htmlFor="password" className={style.label}>Contraseña: </label>
              <input className={style.input} type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div className={style.caja} >
              <button className={style.boton} onClick={handleLogin}>Guardar</button>
            </div>
          </div>

        </div>
      </div>

      <div className={style.contenedor_derecho}>

      </div>
    </div>
  )
}
