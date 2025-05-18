import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { useEffect } from "react";
import { checkAuth, logoutUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await checkAuth();
                setUser(response?.user);
            } catch (error) {
                console.error("Error al verificar la sesión:", error);
                setUser(null);
            } finally {
                setLoading(false)
            }
        }
        fetchUser();
    }, []);
    const logout = async () => {
        const result = await logoutUser();
        if (result.success) {
            setUser(null);
            navigate("/login", { replace: true });
        } else {
            console.log("Error")
        }
    };
    return <AuthContext.Provider value={{ user, loading, setUser, logout}}>
        {children}
    </AuthContext.Provider>
}
