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
    /*const [updateImage, setUpdateImage]= useState(false);
    const setimageDeProfile=()=>{
        if(updateImage=true){
        useState("");
        setDisplayAdd(false);
        }
        else{
            setDisplayAdd(false);
        }
    }*/
    var handleLoadFile=(e)=>{
        var image = document.getElementById("output");
        image.src = URL.createObjectURL(e.target.files[0]);
        
    };
    var a=PP;
    return(
    <div className='modificationDuProfilBackgroud'>
        <h2 className='ligneHorizontal' >Modifucation du Profil</h2>
        <div className='modificationDuProfil' >
            <button className='imageDeProfilConfigurationPlus imageDeProfil' >
                <img src={PLUS} className="plusButton "/>
                <img src={a} className="imageDeProfilConfiguration imageDeProfil" onClick={() => setDisplayAdd(true)}/>
            </button>
            <div className='modificationDuProfilText alignementText'>
                <span>Pseudo: </span>
                <span>Nom d'utilisateur:</span>
            </div>
            <div>
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
            <button className='buttonValidationChangements'>Valider</button>
            </div>
        </div>
        
        <h2 className='ligneHorizontal' >Acces au dossiers personnel</h2>
        <div className='accesDossiersPerso'>
            <div className='accesDossiersPersoValidation'>
            <input type="checkbox" name='cocher' />
            <label for="cocher" class='textAccesDossiersPerso'>Cocher si oui</label>
            </div>
           
        </div> 
        
        {displayAdd && (
            <div className='popup-modificationProfil'>
                <div className="modal">
                <div className='imagesPopup'>
                    <img src={PP} className="imageDeProfilConfigurationPlus imageDeProfil"/>
                    <div className="imageDeProfilConfigurationPlus imageDeProfil profile-pic" >
                        <label className="-label" for="file">
                        <span class="camera"></span>
                            <span>Changer</span>
                        </label>
                        <input type="file" id="file" onChange={handleLoadFile}/>
                        <img src={PLUS} id="output" />
                    </div>
                </div >
                <div className='buttonPopup'>
                <button  onClick={() => setDisplayAdd(false)/*&&setUpdateImage(true)*/}>Retour</button>
                <button /*onClick={} */>Valider</button>
                </div>
                </div>
            </div>
        )}
    </div>

    )

}

export default ConfigurationDuProfil;