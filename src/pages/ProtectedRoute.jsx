import {useAuth} from "../contexts/FakeAuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(function () {
        if (!isAuthenticated) navigate('/')
    }, [isAuthenticated, navigate])

    return children
}

export default ProtectedRoute;