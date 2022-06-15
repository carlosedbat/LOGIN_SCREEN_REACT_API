import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useApi } from '../../hooks/useapi';
import * as c from './styled';

type props = {
    haveAnUser:boolean
}
export const Home= (data:props)=>{
    const auth = useContext(AuthContext);
    const api = useApi();

    const navigate = useNavigate();
    
    const handleLogout = async () => {
        auth.signout();
        
        navigate('/')
    }

    return (
        <div>
            olá {auth.user?.name}
            {data.haveAnUser && <button onClick={handleLogout} >Sair</button>}
            pagina inicial
        </div>
    )
}