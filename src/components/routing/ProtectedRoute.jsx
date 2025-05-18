import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"
import { Cog } from "lucide-react";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-muted-foreground">
                <Cog className="w-20 h-20 animate-spin opacity-50 mb-2" />
                <p className="text-sm text-white">Cargando contenido seguro...</p>
            </div>
        );
    }
    if (!user) {
        return <Navigate to="/login" replace />
    }
    return (
        children
    )
}

export default ProtectedRoute