import React from 'react';
import Header from '../components/Header';
import Banner from './Banner';
import Category from '../pages/Category';

const HomeLayout = () => {
    return (
        <div className="font-roboto">
            <header className='w-11/12 mx-auto'>
                <Header></Header>
                <section>
                    <Banner></Banner>
                </section>
                <main>
                    <Category></Category>
                </main>
            </header>
            <nav>

            </nav>
            <main>

            </main>
        </div>
    );
};

export default HomeLayout;