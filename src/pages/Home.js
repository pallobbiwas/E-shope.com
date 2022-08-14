import React from 'react';
import Banner from '../components/home/Banner';
import Footer from '../components/share/Footer';
import Header from '../components/share/Header';

const Home = () => {
    return (
        <div>
            <Header>
                <Banner />
                <Footer />
            </Header>
        </div>
    );
};

export default Home;