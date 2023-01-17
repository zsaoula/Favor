import React, { useContext } from 'react';
import AjoutLien from '../components/AjoutLien';
import DisplayPosts from '../components/Post/DisplayPosts';
import Navbar from '../components/Navbar';
import SuggestFriends from '../components/UserProfil/SuggestFriends';
import { UidContext } from '../components/AppContext';

const Home = () => {
    const uid = useContext(UidContext);
    return (
        <>
            <Navbar />
            <main >
                <div className='postInMain'>
                    <DisplayPosts type={"home"}/>
                </div>
                <div className="RightBar">
                    <AjoutLien/>
                    {uid && <SuggestFriends />}
                </div>
            </main>
        </>
    );
};

export default Home;