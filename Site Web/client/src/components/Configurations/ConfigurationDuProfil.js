import React, { useState, useEffect,useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PLUS from "../../assets/img/plus.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { uploadPicture } from '../../actions/user.actions';
import { useParams } from 'react-router-dom';
import { UidContext } from '../AppContext';

const ConfigurationDuProfil = ()=>{
   
    const userData = useSelector((state) => state.user.user);
    const [pseudo, setPseudo] = useState(userData.pseudo);
    const [userPicture, setUserPicture] = useState(userData.picture.data);
    const [tmpImage, setTmpImage] =useState(null);
    const [tmpAffichageImage, setTmpAffichageImage]=useState(PLUS);
    const [displayAdd, setDisplayAdd] = useState(false);
    const [message, setMessage] = useState('');

    const handleLoadFile=(e)=>{
        const file=e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        setTmpImage({
            data: reader.result,
            contentType: file.type,
            
        });
        console.log("eeee");
    };
    console.log("rrrrrr");
   setTmpAffichageImage(`${tmpImage.data}`);
   console.log("uuuuuuuuuuuu");
   console.log(tmpImage);
    };

    const handleTPM =()=> {
        console.log("test");
        console.log(tmpImage);
        console.log("test8888");
        console.log(userPicture);
    }
    const handleUpdate = async (e) => {

        e.preventDefault();
        try {
            await axios.patch( `${process.env.REACT_APP_API_URL}api/user/${userData.id}/image`, tmpImage);
            setMessage("Image de profil mise à jour avec succès!");
          } catch (err) {
            setMessage("Erreur lors de la mise à jour de l'image de profil");
          }
          
          userPicture(tmpAffichageImage);
          console.log(userPicture);
          setDisplayAdd(false);
        //const pseudoError = document.querySelector(".pseudo.error");
      /*  const pictureError =document.querySelector(".picture.error");
          await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/upload`,
            data: {
             // pseudo,
              userPicture,
              
            }
            , 
          })
             .then((res) => {
               console.log(res);
               if (res.data.errors) {
                //pseudoError.innerHTML = res.data.errors.pseudo;
                pictureError.innerHTML = res.data.errors.picture;
               } 
            })
            .catch((err) => console.log(err));*/
    };










    return(
    <div className='modificationDuProfilBackgroud'>
        
        <h2 className='ligneHorizontal' >Modification des informations du Profil</h2>
        <form action='' onSubmit={handleUpdate} >
        <div className='modificationDuProfil' >
            <>
            <button className='imageDeProfilConfigurationPlus imageDeProfil' >
                <img src={PLUS} className="plusButton "/>
                <img src={userPicture} className="imageDeProfilConfiguration imageDeProfil" onClick={() => setDisplayAdd(true)}/>
            </button>
            <div className='picture error'></div>
            </>
            <div className='modificationDuProfilText alignementText'>
                <span>Pseudo: </span>
            </div>
            <div>
            <div className='modificationDuProfilText'>
                
                <input className='inputConfiguration'
                    type="pseudo" 
                    name="pseudo" 
                    id="pseudo" 
                    value={pseudo}
                    onChange={(e) => setPseudo (e.target.value)} 
                />
               {/* <div className='pseudo error'></div>*/}

            
            </div>
            <button type='submit' className='buttonValidationChangements' id='update' value='update' >Valider</button>
            </div>
        </div>
        </form>
        
        <h2 className='ligneHorizontal' >Acces au dossiers personnel</h2>
        <div className='accesDossiersPerso'>
            <div className='accesDossiersPersoValidation'>
            <input type="checkbox" name='cocher' />
            <label for="cocher" className='textAccesDossiersPerso'>Cocher si oui</label>
            </div>
           
        </div> 
        
        {displayAdd && (
            <div className='popup-modificationProfil'>
                <div className="modal">
                <div className='imagesPopup'>
                    <div className='imageModifSpace'>
                    <img src={userPicture} className=" imageDeProfil "/>
                    </div>
                    <div className='profile-pic '>
                        <label className="-label" for="file">
                        <span className="camera"></span>
                            <span>Changer</span>
                        </label>
                        <input type="file" id="file" name='file' accept=".jpg, .jpeg, .png" onChange={handleLoadFile}/> {/*onChange={handleLoadFile} onChange={(e)=> setTmpImage(e.target.files[0].name)} */}
                        <img src={tmpAffichageImage} className="imageDeProfil"id="output" />
                    </div>
                </div >
                <div className='buttonPopup'>
                <button  onClick={()=>setDisplayAdd(false)}>Retour</button>
                <button onClick={handleUpdate} >Valider</button>
                
                </div>
                </div>
            </div>
        )}
    </div>


    )

}

export default ConfigurationDuProfil;