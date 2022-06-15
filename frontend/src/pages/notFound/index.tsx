import * as c from './styled';
import {Link} from 'react-router-dom'

export const NotFound = ()=>{
    return(
        <>
            Página não encontrada
            <br/>
            <Link to={'/inicio'}>Retornar ao inicio</Link>
        </>
    )
};