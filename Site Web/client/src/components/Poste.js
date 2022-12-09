import axios from 'axios';
import React, { useState } from 'react';


//e.preventDefaul(); pour ne pas recharcher la page
const Poste = (props) => {
    return (
        <div id="cadrePoste">
            <div id="hautPoste">
                <div id="cadreInfoPoste">
                    <img id="PhotoProfile" src="https://i.pinimg.com/originals/5c/a0/cf/5ca0cf624647dced23ec5329ed0cde6f.png"/>
                    <h6 id="NomProfile">Lena 1er</h6>
                </div>
                <div>6 jours</div>
            </div>

            <div id="contenuePoste">
                /*utliser leakpreview*/
            </div>

            <div id="basPoste">
                <div id="like">
                    <img src="coeurs.png"/>
                    <div>10k</div>
                </div>
                <div id="commentaire">
                    <img src="commentaire.png"/>
                    <div>10k</div>
                </div>
            </div>
        </div>
    );
};

//ce qui écrit dans le input est récuperé par le state
export default Poste;