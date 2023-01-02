import axios from 'axios';
import React, {useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, getPosts } from '../actions/post.actions';
import { UidContext } from './AppContext';

const AjoutLien = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.user.user);
    const [displayAdd, setDisplayAdd] = useState(false);
    const [lien, setLien] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handlePost = async () => {
      if(isValidUrl(lien))
        if ((description || lien) ){
            putData();
            dispatch(getPosts());
            cancelPost();
            setDisplayAdd(false);
            window.location.reload();
        }else {
            alert("Veuillez compléter tous les champs.")
        }
      else{
        alert("Ce n'est pas lien!")
      }
    };


    const cancelPost = () => {
        setDescription("");
        setLien("");
      };

    const putData = async() => {
        axios
          .post(`${process.env.REACT_APP_API_URL}api/post/`, { postedId: userData._id, message: description, lien: lien}
        )
          .then((res) => {
          //   if (res.data.errors) {
          //     dispatch(setPostError({payload: res.data.errors }));
          //   } else {
          //     dispatch(setPostError({payload: "" }));
          //   }
          })};
  
    const isValidUrl = (url) => {
      try {
        new URL(url);
        return true;
      }catch {
        return false;
      }
    }

    return (
        <>
            <div className='ajoutLien'>
                {uid === null &&
                    <button className="bouttonAjoutLien" id="display" type='bouton'>
                        Se connecter
                    </button>
                }
                {uid !== null &&
                    <button className='button-add-link'  onClick={() => setDisplayAdd(true)} >
                        Poster un lien
                    </button>
                }
            </div>
            {displayAdd && (
                <div className="popup-profil-container">
                    <div className="modal">
                        <h3>Ajout d'un lien</h3>
                        <span className="cross" onClick={() => setDisplayAdd(false)}>
                            &#10005;
                        </span>
                        <ul>
                            <form className="newPoste-form-container">
                                <div className="newPoste-input">
                                    <input  type="text" 
                                            placeholder="Votre lien!"
                                            onChange={(e) => setLien(e.target.value)}
                                            value={lien}
                                            required />
                                </div>
                                <div className="newPoste-input">
                                    <textarea   type="text"
                                                row="250" 
                                                placeholder="Description de votre post"
                                                onChange={(e) => setDescription(e.target.value)}
                                                value={description}
                                                required
                                                />
                                </div>

                                <div id="newPoste-buttonForm">
                                    <div>
                                        <button  onClick={() => setDisplayAdd(false)} className="newPoste-btn-cancel" >retour</button>
                                    </div>
                                    <div>
                                        <button onClick={handlePost} className="newPoste-btn">Poster</button>
                                    </div>
                                </div>
                            </form>
                        </ul>
                    </div>
                </div>
                
            )}
        </>
    );
};

export default AjoutLien;