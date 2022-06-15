import * as c from './style'
import { useState, useEffect, ChangeEvent, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';


export const LoginArea = ()=>{

    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const [email, getEmail] = useState('')
    const [password, getPassword] = useState('');
    const [token, getToken] = useState('');

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>)=>{
        getEmail(e.target.value);
    }

    const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        getPassword(e.target.value)
    }

    const hadleLoginClick = async () => {
        if(email && password){
            const isLogged = await auth.signin(email,password);
            if(isLogged){
                navigate('/inicio');
            } else {
                alert("Nao deu certo");
            }
            
        } 
    }

    useEffect(()=>{
        
    },[email,password]);

    return(
        <c.ContainerGeral>
            <c.leftAreaLogin>
                <c.logoAreaLogin src="http://localhost/images/logo caltek.png"/>
                <c.signinTextLogin>SIGN IN</c.signinTextLogin>
                <c.inputAreaLogin>
                    <c.nameUserLogin 
                        placeholder="Digite seu e-mail" 
                        name="email" 
                        onChange={handleEmailChange} 
                        value={email}>
                    </c.nameUserLogin>

                    <c.passwordUserLogin 
                        placeholder="Digite sua senha..." 
                        name="password" 
                        onChange={handlePasswordChange} 
                        value={password}>
                    </c.passwordUserLogin>

                    <c.areaBtnLogin>
                        <c.btnLogin onClick={hadleLoginClick}>
                            Entrar
                        </c.btnLogin>
                        <c.btnLogin>
                            Criar
                        </c.btnLogin>
                    </c.areaBtnLogin>
                </c.inputAreaLogin>
            </c.leftAreaLogin>
            <c.rightAreaLogin>
                Area direita
            </c.rightAreaLogin>
        </c.ContainerGeral>
    )
};