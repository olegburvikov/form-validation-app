import React from 'react';
import PropTypes from 'prop-types'
import './Button.scss';

const Button = ({text, type, onClick, size, color, children, ...restProps}) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`button btn-${size} btn-${color}`}
            {...restProps}
        > 
            {text || children}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
};

export default Button;