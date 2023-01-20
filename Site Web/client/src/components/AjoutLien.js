import axios from 'axios';
import React, {useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, getPosts } from '../actions/post.actions';
import { UidContext } from './AppContext';
import IconeFavor from '../assets/img/logo.png';



const AjoutLien = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.user.user);
    const [displayAdd, setDisplayAdd] = useState(false);
    const [lien, setLien] = useState("");
    const [privee, setPrivee] = useState(false);
    const [image, setImage] = useState("");
    const [publique, setPublique] = useState(false);
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const [preview, setPreview] = useState({ image: '', title: '', description: '' });

    const apiPost =  () => {
        //const key = '9f24d981b6f0ddfce993ce4a20d58867';
        const keyApi = '2865b6b9d9571dc00bf940fad5728248';

        const fullLink = `http://api.linkpreview.net/?key=${keyApi}&q=${lien}`;

        axios
            .get(fullLink)
            .then((res) => setPreview(res.data))
            .catch((err) => console.error(err));

        if(preview.image === "") {
            setImage("");
        }
        else {
            console.log(typeof preview.image);
            setImage(preview.image);
         };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTags([...tags, tag]);
        setTag('');
    }


    const handlePost = async () => {
        if(isValidUrl(lien)){
            if ((description || lien) && tags.length > 0){
                apiPost();
                putData();
                dispatch(getPosts());
                cancelPost();
                setDisplayAdd(false);
                await new Promise(r => setTimeout(r, 500));
                window.location.reload();
            }else {
                alert("Veuillez compléter tous les champs et ajouter au moins un tag.")
            }
        }else{
            alert("Veuillez saisir un lien valide.")
        }
    };

    const cancelPost = () => {
        setDescription("");
        setLien("");
        setTags([]);
      };

    const putData = async() => {
        axios
          .post(`${process.env.REACT_APP_API_URL}api/post/`, { postedId: userData._id, message: description, lien: lien, tags: tags, publique: publique, privee:privee, image: image,}
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
    };

    return (
        <>
            <div className='ajoutLien'>
                {uid === null &&
                    <button className="bouttonAjoutLien" id="display" type='bouton'>
                        Se connecter
                    </button>
                }
                {uid !== null &&
                    // <button className='button-add-link'  onClick={() => setDisplayAdd(true)} >
                    //     Poster un lien
                    // </button>
                    <ul className="wrapperAjout">
  
                    <button className="iconFavor" onClick={() => setDisplayAdd(true)}>
                        <div className="flexButon">
                        {/* <img src={IconeFavor}/> */}
                        <span>Poster un lien</span>
                        
                        </div>
                    </button>
 
                    </ul>
                }
            </div>
            {displayAdd && (
                <div className="popup-ajout-container">
                    <div className="modal">
                        <h3>Ajout d'un lien</h3>
                        <span className="cross" onClick={() => setDisplayAdd(false)}>
                            &#10005;
                        </span>
                        <ul className='ul_ajout_Profil'>
                            <form className="newPoste-form-container">
                                <div className="newPoste-input">
                                    <input  type="text" 
                                            placeholder="Votre lien !"
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

                                <fieldset>
                                    <legend>Type publication:</legend>

                                    <div>
                                    <input type="checkbox" id="scales" name="scales" onChange={(e) => setPrivee(e.target.value)}
                                                value={true}/>
                                    <label for="scales">Privée</label>
                                    </div>

                                    <div>
                                    <input type="checkbox" id="horns" name="horns" onChange={(e) => setPublique(e.target.value)}
                                                value={true}/>
                                    <label for="horns">Public</label>
                                    </div>
                                </fieldset>

                                <input className='ajoutTagInput'
                                    type="text"
                                    value={tag}
                                    onChange={e => setTag(e.target.value)}
                                />
                                <i type="submit" onClick={handleSubmit}>Ajouter Tag</i>

                                <ul>
                                    {tags.map(t => (
                                    <li key={t}>{t}</li>
                                    ))}
                                </ul>

                                <div id="newPoste-buttonForm">
                                    <div>
                                        <button  onClick={() => setDisplayAdd(false)} className="newPoste-btn-cancel" >Retour</button>
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