import { useContext } from "react";
import { LoginArea } from "../../pages/Login/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({children}:{children:JSX.Element})=>{
    const auth = useContext(AuthContext);

    if(!auth.user){
       return <LoginArea />
    }

    return children;
}