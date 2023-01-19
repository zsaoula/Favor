
import { NavLink } from "react-router-dom";
import React, { useState,useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";



const ConfigurationDuCompte =()=>{
    const userData = useSelector((state) => state.user.user);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);
    const [controlPassword, setControlPassword] = useState('');
 
    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log(userData._id);
        axios
          .put(`${process.env.REACT_APP_API_URL}api/user/update/`+ userData._id , { email, password })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }



    return(
        <div>
        <h2 className='ligneHorizontal'>Modification des informations du compte</h2>
       
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
                        <button className='buttonValidationChangements' onClick={handleUpdate}>Valider</button>
            </div>
            </form>
        <div />
        <h2 className='ligneHorizontal'>Suppression du compte</h2>
        <div className='buttonSuppressionCompte'>

        <button>
            supprimer votre compte    
        </button>
            <p className='buttonSuppressionText'>Note : Cette action est irreversible qui vous fera perdre toutes les données du compte en conséquence</p>
        </div> 
    </div>
    )
}



export default ConfigurationDuCompte;


