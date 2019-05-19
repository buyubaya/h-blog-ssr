import React from 'react';
import Logo from '../components/Logo';
import '../static/styles/App.scss';
import '../static/styles/pages/landing.scss';


class HomePage extends React.Component {
    componentWillMount(){
        // document.body.classList.add('is-landing-page');
        // this.unlisten = this.props.history.listen((location, action) => {
        //     if(location.pathname !== '/'){
        //         document.body.classList.remove('is-landing-page');
        //     }
        // });
    }

    componentWillUnMount(){
        // document.body.classList.remove('is-landing-page');
        // this.unlisten();
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