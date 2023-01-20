import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    let { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Les mots de passe ne correspondent pas");
            return;
        }
        console.log(token);

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/user/reset/${token}`,
            withCredentials: true,
            data: {
                password,
            },
        })
            .then((res) => {
                if(res.data.errors){
                    setErrorMessage(res.data.errors.password);
                } else {
                    window.location = "/";
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div className='formulaire'>
            <form className='cadre' action='' onSubmit={handleSubmit}>
                <h1>Réinitialisation de mot de passe</h1>
                <div className='inputbox'>
                <span>Nouveau mot de passe</span>
                <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword (e.target.value)}
                value={password}
                />
                </div>
                <br />
                <div className='inputbox'>
                <span>Confirmer le nouveau mot de passe</span>
                <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword (e.target.value)}
                value={confirmPassword}
                />
                </div>
                <br />
                <input type="submit" value="Réinitialiser le mot de passe" id='connexion' />
                <br />
                {errorMessage && <h4 className='error'>{errorMessage}</h4>}
                </form>
        </div>
);
};

export default ResetPassword;