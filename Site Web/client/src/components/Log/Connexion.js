import axios from 'axios';
import React, { useState } from 'react';


//e.preventDefaul(); pour ne pas recharcher la page
const Connexion = (props) => {
    const [errorMessage] = useState(props.error);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            })
    };

    return (
        <div className='formulaire'>
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

                        <p className='mdp'>Mot de passe oublié?</p>
                        
                        <br />
                        {errorMessage && <h4 className='success'>
                                            Enregistrement réussi, veuillez-vous connecter
                                         </h4>}

                </form>
        </div>
    );
};

//ce qui écrit dans le input est récuperé par le state
export default Connexion;