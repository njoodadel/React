import React from 'react';
import Container from 'react-bootstrap/Container';

function Layout(props) {
    return (
        <div style={{ backgroundColor: '#17223B', height: window.innerHeight, width: window.innerWidth }}>
            {props.children}
        </div>
    )
}
export default Layout
