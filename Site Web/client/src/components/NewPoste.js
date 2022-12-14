import axios from 'axios';
import React, { useState } from 'react';


//e.preventDefaul(); pour ne pas recharcher la page
const NewPoste = (props) => {
    return (
        <div>
            <div class="newPoste-form-popup" id="newPoste-popupFormulaireCreationPoste">
                <form action="/action_page.php" class="newPoste-form-container">
                    <div class="newPoste-input">
                        <label for="lien">Lien:</label>
                        <input type="text" name="lien" required />
                    </div>
                    <div class="newPoste-input">
                        <label for="description">Description:</label>
                        <textarea name="description" row="250"></textarea>
                    </div>

                    <div id="newPoste-buttonForm">
                        <div>
                            <button type="button" class="newPoste-btn-cancel" onclick="closeForm()">retour</button>
                        </div>
                        <div>
                            <button type="submit" class="newPoste-btn">Poster</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>






    );
};

//ce qui écrit dans le input est récuperé par le state
export default NewPoste;