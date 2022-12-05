import React, { useState } from 'react';
import axios from "axios";
import Connexion from "./Connexion";

const Inscription = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const terms = document.getElementById("terms");
        const pseudoError = document.querySelector(".pseudo.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        const passwordConfirmError = document.querySelector(
          ".password-confirm.error"
        );
        const termsError = document.querySelector(".terms.error");
    
        passwordConfirmError.innerHTML = "";
        termsError.innerHTML = "";
    
        if (password !== controlPassword || !terms.checked) {
          if (password !== controlPassword)
            passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
    
          if (!terms.checked)
            termsError.innerHTML = "Veuillez valider les conditions générales";
        } else {
          await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/register`,
            data: {
              pseudo,
              email,
              password,
            },
          })
            .then((res) => {
              console.log(res);
              if (res.data.errors) {
                pseudoError.innerHTML = res.data.errors.pseudo;
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
              } else {
                setFormSubmit(true);
              }
            })
            .catch((err) => console.log(err));
        }
    };

    return (
        <>
            {formSubmit ? (
                <div className='enregistrementReussi'>
                    <Connexion error={true} />
                </div>
            ) : ( 
                <div className="formulaire">
                    <form className="cadre" action='' onSubmit={handleRegister} >
                        <h1>Inscription</h1>
                        <div className="inputbox">
                            <input type="text"
                                    name="pseudo"
                                    id="pseudo"
                                    onChange={(e) => setPseudo(e.target.value)}
                                    value={pseudo}/>
                            <span>pseudo</span>
                        </div>
                        <div className='pseudo error'></div>
                        <br />
                        
                        <div className="inputbox">
                            <input  type="text" 
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}/>
                            <span>email</span>
                        </div>
                        <div className='email error'></div>
                        <br />

                        <div className="inputbox">
                            <input  type="password"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}/>
                            <span>mot de passe</span>
                        </div>
                        <div className='password error'></div>
                        <br />

                        
                        <div className="inputbox">
                            <input  type="password" 
                                    name="password"
                                    id="password-conf"
                                    onChange={(e) => setControlPassword(e.target.value)}
                                    value={controlPassword}/>
                            <span>comfirmation mot de passe</span>
                        </div>
                        <div className='password-confirm error'></div>
                        <br />
                        
                        <div className="chexkboxConditionGenerale">
                          <input  type="checkbox" 
                                  name="terms"
                                  id="terms"/>
                          <span>J'accepte les <a href="/" target="_blank" rel='noopener noreferrer'>conditions générales</a></span>
                        </div>
                        <div className="terms error"></div>
                        <br />
                        
                        <input type="submit" value="inscription" id="inscription"/>
                    </form>
                </div>
            )}
        </>
    );
};

export default Inscription;