import React, { useState } from 'react';
import { NavLink } from "react-router-dom";



const ConfigurationDuCompte =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');

    return(
        <div>
        <h2 className='ligneHorizontal'>Modifucation information du compte</h2>
       
            <div className="ModifucationInformationDuCompte">
                        
                        <div className='ModificationInformationDuCompteText'>
                        <span>email</span>
                        <span>mot de passe</span>
                        <span>comfirmation mot de passe</span>
                        </div>
                        
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
            </div>
        <div />
        <h2 className='ligneHorizontal'>Suppression du compte</h2>
        <div className='buttonSuppressionCompte'>

        <button>
            supprimer votre compte    
        </button>
        <span>gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</span>
        </div> 
    </div>
    )
}




export default ConfigurationDuCompte;


