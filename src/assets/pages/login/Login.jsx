import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import React from "react";


export default function Login() {
    const { user, loginGoogleWithPopUp, observeAuthState, logout } = useAuthStore();

    const navigate = useNavigate();

    const { quiz } = useAuthStore();
    console.log(quiz)

    const handleLogin = useCallback(() => {
        loginGoogleWithPopUp();
    }, [loginGoogleWithPopUp]);

    const handleLogout = useCallback(() => {
        logout();
    }, [logout]);

    useEffect(() => {
        observeAuthState();
        console.log(user)
    }, [observeAuthState, user]);

    useEffect(() => {
        if (user) {
            const newUser = {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            };
            UserDAO.createUser(newUser);
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div className="container-login">
            {user ? (
                <>
                    {/* Encabezado */}
                    <Header />
                    {/* Texto de bienvenida con el nombre del usuario */}
                    <p className="welcome-text">¡ Bienvenido {user.displayName} !</p>
                    <p className="present-text">Querido {user.displayName} si deseas cerrar sesion, por favor precionar el boton verde</p>

                    {/* Botón de cierre de sesión */}
                    <button className="button-logout" onClick={handleLogout}>
                        {/* Icono de la flecha de salida */}
                        <div className="sign">
                            <svg viewBox="0 0 512 512">
                                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                            </svg>
                        </div>

                        {/* Texto del botón */}
                        <div className="text">Cerrar sesión</div>
                    </button>
                </>

            ) : (
                <div className="form">
                    <p>Bienvenidos
                        <span>iniciar sesion para continuar</span> 
                    </p>

                    <button className="oauthButton" onClick={handleLogin}>
                        <svg className="icon" viewBox="0 0 24 24">
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
                        continuar con Google
                    </button>
                    <div className="separator">
                        <div />
                        <span>OR</span>
                        <div />
                    </div>
                    <input type="email" placeholder="Email" name="email" />
                    <button className="oauthButton">
                        Continue
                    </button>
                </div>
            )}
        </div>
    )
}

