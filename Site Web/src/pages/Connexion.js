import 'tachyons';
import React from 'react';
import '../styles/All.scss';
import '../styles/Connexion.scss';
import App from '../App';

function Connexion(){
    return(
        <div className='formulaire'>
            <div className='cadre'>
                <h1>Connexion</h1>
                <form>
                    <div className='inputbox'>
                        <input type="text" required="required"/>
                        <span>email</span>
                    </div>
                    <div class="inputbox">
                        <input type="password" required="required"/>
                        <span>mot de passe</span>
                    </div>
                    <input type="submit" value="connection"/>
    		        <button id="buttonTEL">Inscription</button>
                </form>
                <p className=''>Mot de passe oublié?</p>
            </div>
        </div>
    );
}



export default Connexion;