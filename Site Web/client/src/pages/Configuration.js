import 'tachyons';
import React, {useState} from 'react';
import ConfigurationDuProfil from '../components/Configurations/ConfigurationDuProfil';
import ConfigurationDuCompte from '../components/Configurations/ConfigurationDuCompte.js';
import PolitiqueDeConfidentialite from '../components/Configurations/PolitiqueDeConfidentialite';
import Navbar from '../components/Navbar';
function Configuration(){

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
            </div>
            
            
            {ConfigurationProfil &&<ConfigurationDuProfil/>}
            {ConfigurationCompte &&<ConfigurationDuCompte/>}
            {PolitiqueConfidentialite &&<PolitiqueDeConfidentialite/>}
        </>
    );
}

export default Configuration;