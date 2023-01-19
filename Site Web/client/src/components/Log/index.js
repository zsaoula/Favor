import React, { useState } from 'react';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Logo from '../../assets/img/logo.png';

const Log = ( props ) => {
    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [signInModal, setSignInModal] = useState(props.signin);

    const handleModals = (e) => {
        if (e.target.id === "register") {
          setSignInModal(false);
          setSignUpModal(true);
        } else if (e.target.id === "login") {
          setSignUpModal(false);
          setSignInModal(true);
        }
      };
    
    return (
        <div className="connection-form">
            <div className='form-presentation'>
                <img src={Logo} alt='Favor'/>
                <p>Bienvenue!</p>
                <p>"Comment découvrir et partager des sites et des ressources sur internet de manière plus efficace et personnalisée ?"</p>
                <p></p>
            </div>
            <div className="form-container">
                <div className="info-form-container">
                    <ul className='ul-profil'>
                        <li className='info-form-right'>Bienvenue !</li>
                        <li className='info-form-right'>
                            <div className='description-type-connection'>
                                <p>Vous ne disposez pas</p> 
                                <p>de compte</p>
                            </div>
                        </li>
                        <li
                            onClick={handleModals}
                            id="register"
                            className={signUpModal ? "active-btn button-form" : "button-form"}
                        >
                            S'inscrire
                        </li>
                        <li className='info-form-right'>
                            <div className='description-type-connection'>
                                <p>Vous possédez déjà</p>
                                <p>un compte</p>       
                            </div>     
                        </li>
                        <li
                            onClick={handleModals}
                            id="login"
                            className={signInModal ? "active-btn button-form" : "button-form"}
                        >
                            Se connecter
                        </li>
                    </ul>
                </div>
                {signUpModal && <Inscription />}
                {signInModal && <Connexion />}
            </div>
        </div>
    );
};

export default Log;