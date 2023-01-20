import DiplayPostDossier from "../../Post/DisplayPost/DiplayPostDossier";





const DossiersPersonnels=({uid})=>{
    return(
    <div className='dossierPersonnel'>
     <DiplayPostDossier uid={uid}/>

    </div>
    )
}


export default DossiersPersonnels;