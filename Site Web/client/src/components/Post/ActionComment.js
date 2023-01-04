import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/post.actions';
import { UidContext } from '../AppContext';


const ActionComment = ( { commentaire , postId}) => {
    const [createur, setCreateur] = useState(false);
    const [edit, setEdit] = useState(false);
    const [message,setMessage] = useState('');
    const uid = useContext(UidContext);
    const dispatch = useDispatch();
    
    const handleEdit = (e) => {
        e.preventDefault();
        if(message){
            //dispatch();
            setMessage('');
            setEdit(false);
        }
    };

    const handleDelete = () => {
        //dispatch(deleteComment(postId, commentaire._id))
    };

    useEffect(() => {
        const verifCreateur = () => {
            if(uid === commentaire.commenterId){
                setCreateur(true);
            }
        }
        verifCreateur();
    }, [uid, commentaire.commenterId]);

    return (
        <div>
            {createur && edit === false && (
                <span onClick={() => setEdit(!edit)}>
                    <img src="" alt="editer"/>
                </span>
            )}
            {createur && edit && (
                <form action="" onSubmit={handleEdit}
                className="edit-form">
                    <label htmlFor='text' onClick={() => setEdit(!edit)}>Modifier le commentaire</label>
                
                    <input type="text" name="text" onChange={(e) => setMessage(e.target.value)} defaultValue={commentaire.text}/>
                    
                    <div>
                        <span onClick={() => {
                            if(window.confirm("Etes-vous sur de supprimer ce commentaire ?")){
                                handleDelete();
                            }
                        }}>
                            <img src="" alt="Icon supprimer"/>
                        </span>
                    </div>
                    <input type="submit" value="Modifier"/>
                </form>

            )}
        </div>
    );
};

export default ActionComment;