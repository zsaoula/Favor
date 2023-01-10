import React, { useState } from 'react';
import { useSelector } from 'react-redux';
/*import PolitiqueDeConfidentialite from '../components/';
*/


const ConfigurationDuCompte =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');

    return(
        <div>
        <h2 className='ligneHorizontal'>Modifucation information du compte</h2>
       
            <form className="ModifucationInformationDuCompte">
                        
                        <div className='ModificationInformationDuCompteText alignementText'>
                        <span>email</span>
                        <span>mot de passe</span>
                        <span>comfirmation mot de passe</span>
                        </div>
                        <div>
                        <div className='ModificationInformationDuCompteText'>
                        
                        <input  type="text" 
                                name="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}/>
                        <br />
                        <div className='email error'></div>
                        <input  type="password"
                                name="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}/>
                        <br/>
                        <div className='password error'></div>
                        <input  type="password" 
                                name="password"
                                id="password-conf"
                                onChange={(e) => setControlPassword(e.target.value)}
                                value={controlPassword}/>
                                <div className='password error'></div>
                        </div>
                        <button className='buttonValidationChangements'>Valider</button>
            </div>
            </form>
        <div />
        <h2 className='ligneHorizontal'>Suppression du compte</h2>
        <div className='buttonSuppressionCompte'>

        <button>
            supprimer votre compte    
        </button>
            <p className='buttonSuppressionText'>Note : action irreversible qui vous fera perdre toutes les données du compte en conséquence</p>
        </div> 
    </div>
    )
}



export default ConfigurationDuCompte;


