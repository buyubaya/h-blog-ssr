import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';


const withBreadcrumb = containerClassName => Comp => {
    const page = (props, context) => {
        return (
            <div className={containerClassName}>
                <Breadcrumb {...props} />
                <Comp {...props} />
            </div>
        );
    };

    page.getInitialProps = ctx => {
        return Comp.getInitialProps ? Comp.getInitialProps(ctx) : {};
    };

    return page;
};


export default withBreadcrumb;