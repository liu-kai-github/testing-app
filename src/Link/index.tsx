import * as React from 'react';

interface LinkProps {
    to: string;
    children: React.ReactNode;
}

class Link extends React.Component<LinkProps, any> {

    render() {

        const {to, children} = this.props;

        return (<a href={to}>{children}</a>);
    }
}

export default Link;
