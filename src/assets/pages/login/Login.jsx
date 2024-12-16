import "./Login.css";
import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../../Stores/use-auth-store";
import UserDAO from "../../DAO/UserDaAO";
import Header from "../../Pages/Header/Header";

export default function Login() {
    const { user, loginGoogleWithPopUp, observeAuthState, logout, quiz } = useAuthStore();
    const navigate = useNavigate();

    // Maneja el inicio de sesión con Google
    const handleLogin = useCallback(() => loginGoogleWithPopUp(), [loginGoogleWithPopUp]);

    // Maneja el cierre de sesión
    const handleLogout = useCallback(() => logout(), [logout]);

    // Observa el estado de autenticación al montar el componente
    useEffect(() => {
        observeAuthState();
    }, [observeAuthState]);

    // Crea un nuevo usuario y navega si el usuario está autenticado
    useEffect(() => {
        if (user) {
            UserDAO.createUser({
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            });
            navigate("/login");
        }
    }, [user, navigate]);

    // Renderiza el componente
    return (
        <div>
            {user ? (
                <>
                    <Header />
                    <div>
                        <h1 className="welcome-message">¡Bienvenido {user.displayName}!</h1>
                        <div className="content-container">
                            {/* Columna izquierda: Contenido del texto */}
                            <div className="intro-box">
                                <p className="intro-text">
                                    Aprenderás sobre la importancia de cuidar el medio ambiente mientras recolectas monedas y evitas desperdicios.
                                </p>
                                <p className="intro-text">
                                    Para iniciar la partida, presiona el botón y prepárate para conocer más a fondo los problemas naturales de nuestra Tierra.
                                </p>
                            </div>

                            {/* Columna derecha: Contenedor del modelo 3D */}
                            <div className="model-view">
                                {/* Botón encima del texto */}
                                <li className="start-button">
                                    <span className="start-icon">♻️</span>
                                    <Link to="/introduction" className="start-button-title">Iniciar</Link>
                                </li>
                                <p>Espacio para modelo 3D</p>
                            </div>
                        </div>


                    </div>
                </>
            ) : (
                <div className="form">
                    <p>Bienvenidos <span>iniciar sesión para continuar</span></p>
                    <button className="oauthButton" onClick={handleLogin}>
                        <svg className="icon" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        continuar con Google
                    </button>
                    <div className="separator">
                        <div />
                        <span>OR</span>
                        <div />
                    </div>
                    <input type="email" placeholder="Email" name="email" />
                    <button className="oauthButton">Continue</button>
                </div>
            )}
        </div>
    );
}
