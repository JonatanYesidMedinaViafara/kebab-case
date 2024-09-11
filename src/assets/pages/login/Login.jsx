import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";

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
    }, [observeAuthState , user]);

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
                    <Header />
                    <p className="welcome-text">Bienvenido, {user.displayName}</p>
                    <button className="button-logout" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </>
            ) : (
                <button onClick={handleLogin}>Iniciar sesión</button>
            )}
        </div>
    )

}
