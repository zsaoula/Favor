import React from 'react';
import AjoutLien from '../components/AjoutLien';
import Navbar from '../components/Navbar';
import DisplayPosts from '../components/Post/DisplayPosts';

const Discover = () => {
    return (
        <>
            <Navbar />
            <main >
                <div className='postInMain'>
                    <DisplayPosts type={"discover"}/>
                </div>
                <div className="RightBar">
                    <AjoutLien/>
                </div>
            </main>
        </>
    );
};

export default Discover;