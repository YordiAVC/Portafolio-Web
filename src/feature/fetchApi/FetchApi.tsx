import React from 'react'
import axios from 'axios';
import style from './fetchApi.module.css'
import { useEffect, useState } from 'react'
import fondex from 'src/feature/fetchApi/assets/img.jpg'


export const FetchApi = () => {

    interface User {
        id_usuario: number;
        usuario_nombre: string;
        usuario_apellido: string;
        usuario_codigo: string;
        usuario_correo: string
    }
    const [name, setName] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get<User[]>(`http://84.46.241.5:40000/api/usuario`)
            .then((res) => {
                console.log(res.data);
                setName(res.data);
            });
    }, []);
    return (
        <div className={style.contenedor}>
            <nav className={style.navegador}></nav>
            <div className={style.contenedor_tabla}>
                <div className={style.cinco_columnas}>
                    <div className={style.celda}><p>id :</p></div>
                    <div className={style.celda}><p>Nombre :</p></div>
                    <div className={style.celda}><p>Apellido :</p></div>
                    <div className={style.celda}><p>Codigo :</p></div>
                    <div className={style.celda}><p>Correo :</p></div>
                </div>
                {name.map((usuario) => (
                    <div className={style.cinco_columnas} key={usuario.id_usuario}>
                        <div className={style.celda}>{usuario.id_usuario}</div>
                        <div className={style.celda}>{usuario.usuario_nombre}</div>
                        <div className={style.celda}>{usuario.usuario_apellido}</div>
                        <div className={style.celda}>{usuario.usuario_codigo}</div>
                        <div className={style.celda}>{usuario.usuario_correo}</div>
                    </div>

                ))}
            </div>

        </div>
    );
};
