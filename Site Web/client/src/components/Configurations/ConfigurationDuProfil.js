import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PP  from "../../assets/img/unknown.png";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


const ConfigurationDuProfil = ()=>{
    const userData = useSelector((state) => state.userReducer)
    return(

    <div className='modificationDuProfilBackgroud'>
        <h2 className='ligneHorizontal' >Modifucation  du Profil</h2>
        <div className='modificationDuProfil' >
            <img src={PP} className="imageDeProfil"/>
                <span>Pseudo: </span>
                <div className='modificationDuProfilText'>
                <div className="inputbox">
                    <input 
                        type="pseudo" 
                        name="pseudo" 
                        id="pseudo" 
                        value={userData.pseudo}
                        onChange={(e) => setPseudo (e.target.value)} 

                    />

                </div>
                <div className="inputbox">
                    <span>Nom d'utilisateur</span>
                    <input 
                        type="nomUtilisateur" 
                        name="nomUtilisateur" 
                        id="nomUtilisateur" 
                        onChange={(e) => setNomUtilisateur (e.target.value)} 
                        value={userData.pseudo}
                    />
                </div>
            </div>
        </div>
        <h2 className='ligneHorizontal' >Acces au dossiers personnel</h2>
        <div className='accesDossiersPerso'>
            <input type="checkbox" id="accesDossiersPerso" name='cocher' />
            <label for="cocher">Cocher si oui</label>
        </div> 
    </div>

    )

}

export default ConfigurationDuProfil;
