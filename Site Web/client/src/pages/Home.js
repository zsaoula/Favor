import React from 'react';
import AjoutLien from '../components/AjoutLien';
import DisplayPosts from '../components/Post/DisplayPosts';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <main >
                <div className='postInMain'>
                    <DisplayPosts/>
                </div>
                <div className="RightBar">
                    <AjoutLien/>
                </div>
            </main>
        </>
    );
};

export default Home;