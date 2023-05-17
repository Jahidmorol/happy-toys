import React from 'react';
import backgroundImage from '../../../assets/hero-bg.png'

const Home = () => {
    // const backgroundImage = 'url("../../../assets/hero-bg.png")'
    return (
        <div className='h-[100vh]' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            its home component
        </div>
    );
};

export default Home;