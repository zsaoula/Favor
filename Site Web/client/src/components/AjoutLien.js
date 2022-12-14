import React, {useState} from 'react';
import NewPoste from "./NewPoste";

const AjoutLien = () => {

    const handleModals = (e) => {
        <NewPoste/>
    }

    return (
        <div className='ajoutLien'>
            <button className="bouttonAjoutLien" id="display" type='bouton' onClick={handleModals}>
                Poster un lien
            </button>
        </div>
    );
};

export default AjoutLien;