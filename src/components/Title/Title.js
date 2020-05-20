import React from 'react';
import PropTypes from 'prop-types'
import './Title.scss'
const Title = ({text, size = "big", children}) => {
    return (
        <h1 className={`title ${size}`}>{text || children}</h1>
    );
};

Title.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.string
}

export default Title;