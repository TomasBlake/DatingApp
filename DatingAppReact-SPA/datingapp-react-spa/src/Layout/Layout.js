import React from 'react';
import './Layout.css';
import Header from '../Header/Header';

const Layout = ({children}) => {
    return (<div>
            <Header />
            <main className='main-container'>
            {children}
            </main>
            </div>);
}

export default Layout;