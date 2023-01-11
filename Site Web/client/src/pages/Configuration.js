import 'tachyons';
import React, {useState} from 'react';
import ConfigurationDuProfil from '../components/Configurations/ConfigurationDuProfil';
import ConfigurationDuCompte from '../components/Configurations/ConfigurationDuCompte.js';
import PolitiqueDeConfidentialite from '../components/Configurations/PolitiqueDeConfidentialite';
import Navbar from '../components/Navbar';

const Configuration = () => {

        const [ConfigurationCompte, setConfigurationDuCompte] = useState(false);
        const [ConfigurationProfil, setConfigurationDuProfil] = useState(true);
        const [PolitiqueConfidentialite, setPolitiqueDeConfidentialite] =useState(false)
    
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
        <Navbar />
        <div className='configuration'>
            <div className='boutonDeConfigurations'>
            <a onClick={handleModals} id="ConfigurationDuProfil" >
            Configuration du profil
            </a>
            <a onClick={handleModals} id="ConfigurationDuCompte" >
            Configuration du compte
            </a>
            <a onClick={handleModals} id="PolitiqueDeConfidentialite" >
            Politique de confidentialite
            </a>
            </div>
            
            
            {ConfigurationProfil &&<ConfigurationDuProfil/>}
            {ConfigurationCompte &&<ConfigurationDuCompte/>}
            {PolitiqueConfidentialite &&<PolitiqueDeConfidentialite/>}
        </div>
        </>
    );
}

export default Configuration;