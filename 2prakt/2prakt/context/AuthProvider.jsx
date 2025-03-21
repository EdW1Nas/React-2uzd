import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            
            setUser(parsedUser);
        } else {
            console.log("no user found");
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/dashboard");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;