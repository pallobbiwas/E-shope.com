import React from 'react';
import Banner from '../components/home/Banner';
import Products from '../components/home/Products';
import SubBanner from '../components/home/SubBanner';
import Footer from '../components/share/Footer';
import Header from '../components/share/Header';

const Home = () => {
    return (
        <div>
            <Header>
                <Banner />
                <SubBanner />
                <Products />
                <Footer />
            </Header>
        </div>
    );
};

export default Home;