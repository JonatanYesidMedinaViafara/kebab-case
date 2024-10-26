// Importamos los estilos asociados al componente desde un archivo CSS
import "./Login.css";

// Importamos los hooks de React que se utilizan para manejar funciones y efectos secundarios
import { useCallback, useEffect } from "react";

// Importamos el hook personalizado que maneja el estado de autenticación
import useAuthStore from "../../../stores/use-auth-store";

// Importamos el DAO de usuarios que permite interactuar con la base de datos de usuarios
import UserDAO from "../../daos/UserDAO";

// Importamos el hook para la navegación entre rutas en React
import { useNavigate } from "react-router-dom";

// Importamos el componente de encabezado
import Header from "../../../components/Header/Header";

// Importamos React para la definición de componentes funcionales
import React from "react";

// Definimos el componente funcional `Login`, que será exportado para ser usado en otras partes de la aplicación
export default function Login() {
    // Usamos el hook `useAuthStore` para obtener el estado del usuario y las funciones relacionadas con la autenticación
    const { user, loginGoogleWithPopUp, observeAuthState, logout } = useAuthStore();

    // Usamos `useNavigate` para obtener una función que permite navegar a diferentes rutas
    const navigate = useNavigate();

    // Obtenemos el estado del quiz, si existe, desde el store de autenticación
    const { quiz } = useAuthStore();
    console.log(quiz); // Registramos el estado del quiz en la consola para propósitos de depuración

    // Definimos la función `handleLogin` que maneja el inicio de sesión con Google mediante un popup
    const handleLogin = useCallback(() => {
        loginGoogleWithPopUp(); // Llamamos la función que abre el popup de inicio de sesión con Google
    }, [loginGoogleWithPopUp]); // Utilizamos `useCallback` para optimizar el rendimiento, evitando recrear la función innecesariamente

    // Definimos la función `handleLogout` que maneja el cierre de sesión del usuario
    const handleLogout = useCallback(() => {
        logout(); // Llamamos la función que cierra la sesión del usuario
    }, [logout]); // Utilizamos `useCallback` para optimizar el rendimiento

    // Hook de efecto que se ejecuta cada vez que el componente se monta o cambia el estado de `user`
    useEffect(() => {
        observeAuthState(); // Observamos el estado de autenticación y actualizamos si hay algún cambio en el usuario
        console.log(user); // Registramos el estado actual del usuario en la consola para propósitos de depuración
    }, [observeAuthState, user]); // Dependencias: ejecutamos el efecto cuando `observeAuthState` o `user` cambian

    // Hook de efecto que se ejecuta cuando el usuario está autenticado
    useEffect(() => {
        if (user) { // Si hay un usuario autenticado
            const newUser = {
                email: user.email, // Guardamos el correo del usuario
                name: user.displayName, // Guardamos el nombre del usuario
                photo: user.photoURL, // Guardamos la URL de la foto de perfil del usuario
            };
            UserDAO.createUser(newUser); // Creamos un nuevo usuario en la base de datos con estos datos
            navigate("/login"); // Navegamos a la página de login
        }
    }, [user, navigate]); // Dependencias: el efecto se ejecutará cuando `user` o `navigate` cambien

    // Retornamos el JSX que define la interfaz de usuario del componente
    return (
        <>
        <Header /> {/* Mostramos el componente de encabezado */}
        <div className="container-login"> {/* Contenedor principal con clase CSS */}
        
            {user ? ( // Si hay un usuario autenticado
                    <>
                    <p className="welcome-text"> {/* Texto de bienvenida */}
                        ¡ Bienvenido {user.displayName} ! {/* Muestra el nombre del usuario */}
                    </p>
                    <p className="present-text"> {/* Texto de presentación */}
                        Hola {user.displayName}, si deseas cerrar sesión, por favor presiona el botón verde
                    </p>

                    <button className="button-logout" onClick={handleLogout}> {/* Botón para cerrar sesión */}
                        <div className="sign"> {/* Contenedor del ícono del botón */}
                            <svg viewBox="0 0 512 512"> {/* Ícono SVG para el botón */}
                                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                            </svg>
                        </div>
                        <div className="text">Cerrar sesión</div> {/* Texto del botón */}
                    </button>
                    </>
            ) : ( // Si no hay un usuario autenticado
                <div className="form"> {/* Contenedor del formulario */}
                    <p>Bienvenidos {/* Texto de bienvenida */}
                        <span>iniciar sesión para continuar</span> {/* Texto adicional */}
                    </p>
                    <button className="oauthButton" onClick={handleLogin}> {/* Botón para iniciar sesión con Google */}
                        <svg className="icon" viewBox="0 0 24 24"> {/* Ícono de Google */}
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        continuar con Google {/* Texto del botón */}
                    </button>

                    <div className="separator"> {/* Separador entre opciones */}
                        <div /> {/* Línea separadora */}
                        <span>OR</span> {/* Texto "OR" */}
                        <div /> {/* Línea separadora */}
                    </div>

                    <input type="email" placeholder="Email" name="email" /> {/* Campo de texto para el email */}
                    <button className="oauthButton"> {/* Botón para continuar */}
                        Continue
                    </button>
                </div>
            )}
        </div>
        </>
    );
}
