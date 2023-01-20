import React, { useState } from 'react';
import { NavLink} from "react-router-dom";
import axios from "axios";
import Connexion from "./Connexion";

const Inscription = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');
    const [Popup, setPopup] = useState(false);
    const [token, setToken] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    
    
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
    /* const showText=()=>{
        const timeoutID =setTimeout(()=>{document.getElementById("textSucces").style.visibility="visible"},3000);
        clearTimeout(timeoutID);
      };
      */
    return (
        <>
            {formSubmit ? (
                  <Connexion error={true}/>
                  
            ) : ( 
                <div className="formulaire">
                    <form className="cadre" action='' onSubmit={handleRegister} >
                        <h1>Inscription</h1>
                        <div className="inputbox">
                        <span>pseudo</span>
                            <input type="text"
                                    name="pseudo"
                                    id="pseudo"
                                    onChange={(e) => setPseudo(e.target.value)}
                                    value={pseudo}/>
                          <div className='pseudo error'></div>
                        </div>
                        <br />
                        <div className="inputbox">
                        <span>email</span>
                            <input  type="text" 
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}/>
                           <div className='email error'></div>
                        </div>
                        <br />
                        <div className="inputbox">
                        <span>mot de passe</span>
                            <input  type="password"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}/>
                            <div className='password error'></div>
                        </div>
                        <br />
                        <div className="inputbox">
                        <span>comfirmation mot de passe</span>
                            <input  type="password" 
                                    name="password"
                                    id="password-conf"
                                    onChange={(e) => setControlPassword(e.target.value)}
                                    value={controlPassword}/>
                            <div className='password-confirm error'></div>
                        </div>
                        <br />
                        <div className="chexkboxConditionGenerale">
                          <input  type="checkbox" 
                                  name="terms"
                                  id="terms"/>
                          <span>J'accepte les <a className='cond' onClick={() => setPopup(true)}>conditions générales</a></span>
                          <div className="terms error"></div>
                        </div>
                        <br />
                        
                        <input type="submit" value="inscription" id="inscription"/>
                    </form>
                </div>
            )}
            {Popup && (
              <div className="popup-conditions">
              <div className="modal">
                  <h3>Conditions générales</h3>
                  <span className="cross" onClick={() => setPopup(false)}>
                  &#10005;
                  </span>
                  <p>Voici les conditions générales que vous devez respectés:</p>
                  <p>L'utilisation de notre réseau social est réservée à un usage personnel et non commercial.</p>
                  <p>Les utilisateurs s'engagent à ne pas partager de contenus illégaux, offensants ou violant les droits d'autrui.</p>
                  <p>Nous nous réservons le droit de supprimer tout contenu non conforme à ces conditions d'utilisation.</p>
                  <p>Les utilisateurs sont responsables de tout contenu qu'ils partagent sur notre réseau social.</p>
                  <p>Nous nous réservons le droit de suspendre ou de résilier l'accès de tout utilisateur en cas de non-respect de ces conditions d'utilisation.</p>
                  <p>Nous nous engageons à protéger la vie privée de nos utilisateurs conformément à notre politique de confidentialité.</p>
                  <p>Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Il est de la responsabilité de l'utilisateur de se tenir informé des modifications apportées.</p>
                  <p>En utilisant notre réseau social, les utilisateurs acceptent ces conditions d'utilisation.</p>
              </div>
              </div>
          )}
        </>
    );
};

export default Inscription;