import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Logo from '../components/Logo';
import '../static/styles/App.scss';
import 'antd/dist/antd.css';


class HomePage extends React.Component {
    static async getInitialProps(ctx) {
        return { page: 'home' };
	}

    render(){
        return(
            <div className='landing-page-container'>
                <div className='avatar-area'>
                    <div className='avatar'>
                        <Logo />
                    </div>
                    <div className='content'>
                        <div className='avatar-name'>Hieu Le</div>
                        <div className='avatar-title'>Front-end Developer</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HomePage;