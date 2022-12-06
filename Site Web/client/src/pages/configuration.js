import 'tachyons';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import Navbar from '../components/Navbar';
import ConfigurationDuProfil from '../components/ConfigurationDuProfil';
import ConfigurationDuCompte from '../components/ConfigurationDuCompte.js';
import PolitiqueDeConfidentialite from '../components/PolitiqueDeConfidentialite';

function Configuration(props){

        const [ConfigurationCompte, setConfigurationDuCompte] = useState(props.configCompte);
        const [ConfigurationProfil, setConfigurationDuProfil] = useState(props.configProfil);
        const [PolitiqueConfidentialite, setPolitiqueDeConfidentialite] =useState(props.PolitiqueConf)
    
        const handleModals = (e) => {
            if (e.target.id === "ConfigurationDuProfil") {
                setConfigurationDuCompte(false);
                setPolitiqueDeConfidentialite(false);
                setConfigurationDuProfil(true);
            } else if (e.target.id === "ConfigurationDuCompte") {
                setConfigurationDuCompte(true);
                setPolitiqueDeConfidentialite(false);
                setConfigurationDuProfil(false);
            } else if (e.target.id ==="PolitiqueDeConfidentialite"){
                setConfigurationDuCompte(false);
                setPolitiqueDeConfidentialite(true);
                setConfigurationDuProfil(false);
            }

        };        
    return(
        <>

            <div className='boutonDeConfigurations'>

            <button onClick={handleModals} id="ConfigurationDuProfil" className={ConfigurationProfil} >
            Configuration du profil
            </button>
            <button onClick={handleModals} id="ConfigurationDuCompte" className={ConfigurationCompte}>
            Configuration du compte
            </button>
            <button onClick={handleModals} id="PolitiqueDeConfidentialite" className={PolitiqueConfidentialite}>
            Politique de confidentialite
            </button>
            
            <div className='ligneVertical'/>
            </div>
            {ConfigurationProfil &&<ConfigurationDuProfil/>}
            {ConfigurationCompte &&<ConfigurationDuCompte/>}
            {PolitiqueConfidentialite &&<PolitiqueDeConfidentialite/>}
        </>
    );
}

export default Configuration;