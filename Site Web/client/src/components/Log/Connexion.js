import React, { useState } from 'react';
import axios from 'axios';

const Connexion = (props) => {
    const [errorMessage] = useState(props.error);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
                if(res.data.errors){
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password
                } else {
                    window.location = "/";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/user/forgotpassword`,
            withCredentials: true,
            data: {
                email: forgotPasswordEmail,
            },
        })
            .then((res) => {
                if(res.data.message){
                    setForgotPasswordMessage(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='formulaire'>
            {forgotPassword ? (
                <form className='cadre' action='' onSubmit={handleForgotPassword} id="forgot-password-form">
                    <h1>Mot de passe oublié</h1>
                    <div className='inputbox'>
                        <span>email</span>
                        <input 
                            type="text" 
                            name="forgotPasswordEmail" 
                            id="forgotPasswordEmail" 
                            onChange={(e) => setForgotPasswordEmail (e.target.value)} 
                            value={forgotPasswordEmail}/>
                    </div>
                    <br />

                    <input type="submit" value="Envoyer un mail de réinitialisation" id='send-reset-email' />
                    <br/>

                    {forgotPasswordMessage && <h4 className='success'>{forgotPasswordMessage}</h4>}
                    </form>
                        ) : (
                        <form className='cadre' action='' onSubmit={handleLogin} id="sign-up-form">
                        <h1>Connexion</h1>
                        <div className='inputbox'>
                        <span>email</span>
                        <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail (e.target.value)}
                        value={email}/>
                        <div className="email error"></div>
                        </div>
                        <br />
                        <div className="inputbox">
                    <span>mot de passe</span>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e) => setPassword (e.target.value)} 
                        value={password}/>
                    <div className="password error"></div>
                </div>

                <br />
                    
                <input type="submit" value="connexion" id='connexion' />
                <br/>

                <p className='mdp' onClick={() => setForgotPassword(true)}>Mot de passe oublié?</p>
                    
                <br />
                {errorMessage && <h4 className='success'>Enregistrement réussi, veuillez-vous connecter</h4>}
            </form>
        )}
    </div>
);
};

export default Connexion;