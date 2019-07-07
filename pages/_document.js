import PropsTypes from 'prop-types';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import MainNavigator from '../components/MainNavigator';
import '../static/styles/App.scss';
import 'antd/dist/antd.css';


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const isHomePage = ctx.pathname === '/';
        const isContactPage = ctx.pathname === '/contact';
        let bodyClassName = [];
        if(isHomePage){
            bodyClassName.push('is-landing-page');
        }
        if(isContactPage){
            bodyClassName.push('is-contact-page');
        }
        return { ...initialProps, bodyClassName };
    }

    // static childContextTypes = {
    //     ctx: PropsTypes.object
    // };

    // getChildContext(){
    //     console.log(22222, this.props);
    //     return({
    //         ctx: this.props
    //     });
    // }

    render() {
        const { bodyClassName } = this.props;
        
        return (
            <Html>
                <Head></Head>
                <body className={bodyClassName.join(' ')}>
                    <MainNavigator />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}


export default MyDocument;