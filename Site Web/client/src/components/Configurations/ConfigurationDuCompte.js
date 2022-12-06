import React from 'react';
import { NavLink } from "react-router-dom";



const ConfigurationDuCompte =()=>{
    return(
        <div>
        <h2>Modifucation information du compte</h2>
        <div className='ligneHorizontal'>
            <div>
                <span>adresse mail : mail</span>
                <span>mot de passe  : mdp</span>
                <span>confirmer le mot de passe  : mdp</span>
            </div>
        </div>
        <h2>Suppression du compte</h2>
        <div className='ligneHorizontal'/>
        <div >
        <button>
            supprimer votre compte    
        </button>
        <span>gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</span>
        </div> 
    </div>
    )
}



export default ConfigurationDuCompte;


