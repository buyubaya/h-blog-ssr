import React, { Component } from 'react';
import { compose } from 'recompose';
import withBreadcrumb from '@/components/HOCs/withBreadcrumb';
import ContactMeChatBox from '../components/ContactPage/ContactMeChatBox';
import '../static/styles/App.scss';
import 'antd/dist/antd.css';
import { ApolloProvider } from 'react-apollo';
import client from '../apollo/client';


class ContactPage extends Component {
    state = {
        maskPosition: true
	}

	static async getInitialProps(ctx) {
        console.log('CONTACT PAGE INITIAL PROPS', ctx);
        return { page: 'contact', pathname: ctx.pathname };
	}

    handleSwitch = () => {
        this.setState(state => ({ maskPosition: !state.maskPosition }));
    }

    render() {
		const { maskPosition } = this.state;

        return (
            <ApolloProvider client={client}>
            <div className='main-content'>
<div className={maskPosition ? 'contact-me-area is-right' : 'contact-me-area is-left'}>
	<div className='mask-area right'>
		<div className='full-area'>
			<div className='half-area get-in-touch-area'>
				<div className='get-in-touch-header'>
					<h2 className='get-in-touch-title'>Say hello to me!</h2>
					<h3 className='get-in-touch-subtitle'>
						Let's talk business or just have a coffe.
					</h3>
				</div>
				<div className='btn-switch' onClick={this.handleSwitch}>Switch to Contact</div>
			</div>
			<div className='half-area get-in-touch-area'>
				<div className='get-in-touch-header'>
					<h2 className='get-in-touch-title'>Get in touch!</h2>
					<h3 className='get-in-touch-subtitle'>Always within your reach</h3>
				</div>
				<div className='btn-switch' onClick={this.handleSwitch}>Switch to Chat</div>
			</div>
		</div>
	</div>
	<div className='full-area'>
		<div className='contact-me-info half-area left-half'>
			<div className='half-inner'>
				<div className='contact-me-header'>
					<div className='contact-me-header-title'>
						Hieu Le
					</div>
					<div className='contact-me-header-subtitle'>
						Front-end Developer
					</div>
				</div>
				<div>
					<dl className='contact-info-item'>
						<dt>Address</dt>
						<dd>New York City, US</dd>
					</dl>
					<dl className='contact-info-item'>
						<dt>Phone</dt>
						<dd>0123456789</dd>
					</dl>
					<dl className='contact-info-item'>
						<dt>Email</dt>
						<dd>hieu.lnd@gmail.com</dd>
					</dl>
				</div>
			</div>
		</div>
		<div className='half-area right-half'>
			<div className='half-inner'>
				<ContactMeChatBox />
			</div>
		</div>
	</div>
</div>
            </div>
            </ApolloProvider>
        )
    }
}


export default compose(
    withBreadcrumb('contact-page')
)(ContactPage);