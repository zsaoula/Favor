import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment, editComment } from '../../actions/post.actions';
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
            dispatch(editComment(postId, commentaire._id, message));
            setMessage('');
            setEdit(false);
        }
    };

    const handleDelete = () => {
        dispatch(deleteComment(postId, commentaire._id));
    };

    useEffect(() => {
        const verifCreateur = () => {
            if(uid === commentaire.commentId){
                setCreateur(true);
            }
        }
        console.log(commentaire);
        verifCreateur();
        console.log(createur);
    }, [uid, commentaire.commenterId]);

    return (
        <div className="edit-comment">
            {createur && edit === false && (
                <span onClick={() => setEdit(!edit)}>
                    <i className='fas fa-edit'></i> 
                </span>
            )}
            {createur && edit && (
                <form action="" onSubmit={handleEdit}
                className="edit-comment-form">
                    <div className="top-edit-com">
                        <label htmlFor='text' onClick={() => setEdit(!edit)}>Annuler</label>
                <div className="btn">
                        <span onClick={() => {
                            if(window.confirm("Etes-vous sur de supprimer ce commentaire ?")){
                                handleDelete();
                            }
                        }}>
                            <i className="fas fa-trash-alt"></i>
                        </span>
                    </div>
                    
                    </div>
                    <input type="text" name="text" onChange={(e) => setMessage(e.target.value)} defaultValue={commentaire.text}/>
                    <br/>
                    
                    <input className="comment-modify" type="submit" value="Modifier"/>
                </form>

            )}
        </div>
    );
};

export default ActionComment;