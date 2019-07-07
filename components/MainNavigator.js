import React from 'react';
import Link from 'next/link';
import { Menu, Icon } from 'antd';
import RouterUrls from '../constants/RouterUrls';


const MainNavigator = () => {
    const data = RouterUrls;

    return(
        <Menu
            mode='horizontal'
        >
            <Menu.Item>
                <Link href='/'>
                    <a href='/' className='logo-H'>
                        <svg viewBox="0 0 80 100">
                        <path id="logo-h" d="M5,5 
                                l20,0 
                                l0,50 
                                l20,0 
                                l0,20 
                                l-20,0 
                                l0,20 
                                l-20,0 
                                l0,-89" />
                        <path d="M75,95 
                                l-20,0 
                                l0,-50 
                                l-20,0 
                                l0,-20 
                                l20,0 
                                l0,-20 
                                l20,0 
                                l0,89" />
                    </svg>
                    </a>
                </Link>
            </Menu.Item>
            {
                data.map(item =>
                    <Menu.Item key={item.key}>
                        <Link href={item.path}><a href={item.path}>{item.label}</a></Link>
                    </Menu.Item>
                )
            }
        </Menu>
    );
}


export default MainNavigator;