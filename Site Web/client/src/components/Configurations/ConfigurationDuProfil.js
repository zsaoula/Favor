import React from 'react';
import PP  from "../../assets/img/unknown.png";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


const ConfigurationDuProfil = ()=>{
    const userData = useSelector((state) => state.userReducer)
    return(

        <div>
        <h2>Modifucation  du Profil</h2>
        <div className='ligneHorizontal'>
            <img src={PP}/>
            <div>
                <span>Pseudo : Pseudo</span>
                <span>Nom d'utilisateur : @Pseudo</span>
            </div>
        </div>
        <h2>Acces au dossiers personnel</h2>
        <div className='ligneHorizontal'/>
        <div >
        <caption> Rendre vos dossiers prives</caption>
        </div> 
    </div>

    )

}

export default ConfigurationDuProfil;
