import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const isHomePage = ctx.pathname === '/';
        return { ...initialProps, isHomePage };
    }

    render() {
        const { isHomePage } = this.props;
        
        return (
            <Html>
                <Head>
                </Head>
                <body className={isHomePage ? 'is-landing-page' : ''}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}


export default MyDocument;