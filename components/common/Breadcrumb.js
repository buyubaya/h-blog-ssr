import React from 'react';
import PropsTypes from 'prop-types';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import RouterUrls from '../../constants/RouterUrls';


const ROUTER_DATA = [
    {
        test: /a/
    }
];


class Breadcrumb extends React.Component {
    getBreadCrumb(path, prefix = 'Home') {
        let tmp = [];

        let currentPath = path;
        while (currentPath !== '') {
            currentPath = RouterUrls.find(item => item.path === currentPath);
            if (currentPath) {
                tmp.unshift(currentPath.label);
                currentPath = currentPath.path.split('/').slice(0, -1).join('/');
            }
            else {
                break;
            }
        }
        tmp.unshift(prefix);

        return tmp;
    }

    componentDidMount(){
        const path = location.pathname;
        const bc = this.getBreadCrumb(path);
        this.setState({ bc });
    }

    render() {
        const path = this.props.pathname;
        const bc = this.getBreadCrumb(path);

        return (
            <div>
                <div className='breadcrumb-area'>
                    <AntBreadcrumb>
                        {
                            bc && bc.map((item, index) =>
                                <AntBreadcrumb.Item key={index}>
                                    {item}
                                </AntBreadcrumb.Item>
                            )
                        }
                    </AntBreadcrumb>
                </div>

                <div className='pageHeader'>
                    <div className='pageTitle'>{bc && bc.pop()}</div>
                </div>
            </div>
        );
    }
}


export default Breadcrumb;