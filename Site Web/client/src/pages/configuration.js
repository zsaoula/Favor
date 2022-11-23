import 'tachyons';
import React from 'react';
import PP  from "../assets/img/unknown.png";
import { NavLink } from "react-router-dom";


function configuration(){
    return(
        <div>
            <div className='ligneVertical'>
                <button ></button>
                <button ></button>
                <button ></button>
                 
            </div>
            <div>
                <h2>Modifucation information du compte</h2>
                <div className='ligneHorizontal'>
                    <img src={PP}/>
                    <div>
                        <span>Pseudo : Pseudo</span>
                        <span>Nom d'utilisateur : @Pseudo</span>
                    </div>
                </div>
                <h2>Acces au dossiers personnel</h2>
               
                <div className='ligneHorizontal'>
                <caption> Rendre vos dossiers prives</caption>

                </div>  
            </div>

        </div>
    );
}