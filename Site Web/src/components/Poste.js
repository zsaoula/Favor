import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PP  from "../assets/img/photoProfileTest.png";
import coeurs from "../assets/img/coeurs.png";
import commentaire from "../assets/img/commentaire.png";
import "../styles/components/_poste.scss";

const Poste = () => {
    
    return (
        <div id="cadrePoste">
		    <div id="hautPoste">
			    <div id="cadreInfoPoste">
				    <img id="PProfile" src={PP} alt="photo de profile"/>
				    <h6 id="NomProfile">Lena 1er</h6>
			    </div>
			    <div>6 jours</div>
            </div>
		    <div id="contenuePoste">
			    /*https://my.linkpreview.net/*/
                {linkpreview("https://www.youtube.com")}
		    </div>
		    <div id="basPoste">
			    <div id="like">
				    <img src={coeurs}/>
				    <div>10k</div>
			    </div>
			    <div id="commentaire">
				    <img src={commentaire}/>
				    <div>10k</div>
			    </div>
		    </div>
	    </div>
    );
}

function linkpreview(link){
	const [preview, setPreview] = useState('');

	var key = '89aa1d8dffb8b79473be782f14a2d53b';
    link = 'http://api.linkpreview.net/?key='+key+'&q' + link;
	
	console.log(link);
	useEffect(() => {
		fetch(link).then(res => res.json()).then(setPreview)
	}, []);
    return <div>{JSON.stringify(preview)}</div>;

}

export default Poste; 