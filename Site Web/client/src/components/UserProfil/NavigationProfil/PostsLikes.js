import DisplayPostLikeProfil from "../../Post/DisplayPost/DisplayPostLikeProfil";





const PostLikes=({uid})=>{


return(

    <div className='postPersonnel'>
    <DisplayPostLikeProfil uid={uid}/>
    </div>
)

}


export default PostLikes;