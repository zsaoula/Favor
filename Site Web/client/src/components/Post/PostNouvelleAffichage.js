import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FollowHandler from '../UserProfil/FollowHandler';
import { dateParser, isEmpty } from '../Utils';
import ButtonLike from './ButtonLike';
import Comment from './Comment';
import Commentaire from '../../assets/img/commentaire.png';

const LinkPreview = ({ link }) => {
    const [preview, setPreview] = useState({ image: '', title: '' });

    useEffect(() => {
        //const key = '9f24d981b6f0ddfce993ce4a20d58867';
        const key = '2865b6b9d9571dc00bf940fad5728248';

        const fullLink = `http://api.linkpreview.net/?key=${key}&q=${link}`;

        axios
            .get(fullLink)
            .then((res) => setPreview(res.data))
            .catch((err) => console.error(err));
    }, [link]);

    if(preview.image === "") {
        return (<div className='PreviewPostNouvelleAffichage'><a href={link}>{link}</a></div>);
    }
    else {
        return (
            <div>
                <a href={link}>
                    <img id="imageLien" className='PreviewPostNouvelleAffichage' src={preview.image} alt={preview.title}/>
                </a>
            </div>
        );
    }
};

//e.preventDefaul(); pour ne pas recharcher la page
const PostNouvelleAffichage = ( { post } ) => {
    const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.users.users);
    const [updated,setUpdate] = useState(false);
    const [message, setMessage] = useState(null);
    const [comments, setComments] = useState(false);


    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    })


    return (
        <li className='PostesProfilConteneur' key={post._id}>
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
            ):(
                <>
            <div className="unPosteNouvelleAffichage">
                <div className="dateDePublicationDuPost">
                    <div>{dateParser(post.createdAt)}</div>
                </div>
                <div className="LienDunPosteNouvelleAffichage">
                    <LinkPreview link={post.lien}/>
                    <p>{post.message}</p>
                </div>
                <div className='informationDunPosteNouvelleAffichage'>
                    <div id="like">
                        <ButtonLike post={post}/>
                        {/* <img src="coeurs.png"/> */}
                        <div>{post.likers.length}</div>
                    </div>
                    <div id="commentaire">
                    <img src={Commentaire} onClick={() => setComments(!comments)}/>
                        <div >{post.comments.length}</div>
                    </div>
                </div>
            </div>
            {comments && <Comment className="CommentaireProfil" post={post} />}
            </>
            ) }
        </li>
    );
};



//ce qui écrit dans le input est récuperé par le state
export default PostNouvelleAffichage;