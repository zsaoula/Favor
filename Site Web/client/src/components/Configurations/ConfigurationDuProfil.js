import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PP  from "../../assets/img/unknown.png";
import PLUS from "../../assets/img/plus.png";
import { NavLink } from "react-router-dom";


const ConfigurationDuProfil = ()=>{
   
   
    const userData = useSelector((state) => state.user.user);
    const [pseudo, setPseudo] = useState('');
    const [nomUtilisateur, setNomUtilisateur] = useState('');
    const [displayAdd, setDisplayAdd] = useState(false);
    const handleModals=()=>{
        
        
    };


    return(
    <div className='modificationDuProfilBackgroud'>
        <h2 className='ligneHorizontal' >Modifucation du Profil</h2>
        <div className='modificationDuProfil' >
            <button className='imageDeProfilConfigurationPlus imageDeProfil' >
                <img src={PLUS} className="plusButton "/>
                <img src={PP} className="imageDeProfilConfiguration imageDeProfil" onClick={() => setDisplayAdd(true)}/>
            </button>
            <div className='modificationDuProfilText'>
                <span>Pseudo: </span>
                <span>Nom d'utilisateur:</span>
            </div>
            <div className='modificationDuProfilText'>
                
                <input className='inputConfiguration' 
                    type="nomUtilisateur" 
                    name="nomUtilisateur" 
                    id="nomUtilisateur" 
                    onChange={(e) => setNomUtilisateur (e.target.value)} 
                    value={nomUtilisateur}
                />
                <input className='inputConfiguration'
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
            <div className='accesDossiersPersoValidation'>
            <input type="checkbox" name='cocher' />
            <label for="cocher" class='textAccesDossiersPerso'>Cocher si oui</label>
            </div>
            
            
            <div className='dossierPersonnel'>
                <span>dossiers</span>

            </div>
        </div> 
        
        {displayAdd && (
            <div className='popup-modificationProfil'>
                <div className="modal">
                <div className='imagesPopup'>
                    <img src={PP} className="imageDeProfilConfigurationPlus imageDeProfil"/>
                    <img src={PLUS} className="imageDeProfilConfigurationPlus imageDeProfil" onClick={handleModals}/>
                </div >
                <div className='buttonPopup'>
                <button  onClick={() => setDisplayAdd(false)}>Retour</button>
                <button /*onClick={handlePost} */>Valider</button>
                </div>
                </div>
            </div>
        )}
    </div>

    )

}

export default ConfigurationDuProfil;