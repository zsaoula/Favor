import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PP  from "../../assets/img/unknown.png";
import { NavLink } from "react-router-dom";


const ConfigurationDuProfil = ()=>{
    const userData = useSelector((state) => state.user.user);
    const [pseudo, setPseudo] = useState('');
    const [nomUtilisateur, setNomUtilisateur] = useState('');

    return(

    <div className='modificationDuProfilBackgroud'>
        <h2 className='ligneHorizontal' >Modifucation  du Profil</h2>
        <div className='modificationDuProfil' >
            <img src={PP} className="imageDeProfilConfiguration imageDeProfil"/>

                <div className='modificationDuProfilText'>
                <span>Pseudo: </span>
                <span>Nom d'utilisateur:</span>
                </div>
                <div className='modificationDuProfilText'>
                
                    <input 
                        type="nomUtilisateur" 
                        name="nomUtilisateur" 
                        id="nomUtilisateur" 
                        onChange={(e) => setNomUtilisateur (e.target.value)} 
                        value={pseudo}
                    />
                    <input 
                        type="pseudo" 
                        name="pseudo" 
                        id="pseudo" 
                        value={pseudo}
                        onChange={(e) => setPseudo (e.target.value)} 
                    />
                </div>
                
        </div>
        <h2 className='ligneHorizontal' >Acces au dossiers personnel</h2>
        <div className='accesDossiersPerso'>
            <input type="checkbox" name='cocher' />
            <label for="cocher" class='textAccesDossiersPerso'>Cocher si oui</label>
        </div> 
    </div>

    )

}

export default ConfigurationDuProfil;
