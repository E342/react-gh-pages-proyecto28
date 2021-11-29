import { useUserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const rolePages = {
    "admin": "/admin",
    "user": "/user"
}

const Redirect = () => {
    const {user} = useUserContext();

    if(!user) {
        return (<p>No se puede redireccionar</p>);
    }

    return <Navigate replace to={rolePages[user.role] ?? "/"} />;
}

export default Redirect;