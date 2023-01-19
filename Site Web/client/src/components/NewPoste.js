import axios from 'axios';
import React, { useState } from 'react';


//e.preventDefaul(); pour ne pas recharcher la page
const NewPoste = ({ post }) => {

    return (
        <div>
            <div className="newPoste-form-popup" id="newPoste-popupFormulaireCreationPoste">
                <form action="/action_page.php" className="newPoste-form-container">
                    <div className="newPoste-input">
                        <input type="text" name="lien" required />
                    </div>
                    <div className="newPoste-input">
                        <textarea name="description" row="250"></textarea>
                    </div>

                    <div id="newPoste-buttonForm">
                        <div>
                            <button type="button" className="newPoste-btn-cancel" >retour</button>
                        </div>
                        <div>
                            <button type="submit" className="newPoste-btn">Poster</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>






    );
};

//ce qui écrit dans le input est récuperé par le state
export default NewPoste;