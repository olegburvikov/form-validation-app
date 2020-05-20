import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.scss';

const Input = ({label, required, textarea, error, isValid, onChange, onBlur, placeholder, name}) => {
    const isShowInvalid = (!isValid && isValid !== null);
    const TagName = textarea ? 'textarea' : 'input';
    return (
        <div className="field-item">
            <label className="field-item__label">
                { label }
                { required && (<span className="required-symbol" >*</span>) }
            </label>
            <TagName 
                className={cn("field-item__input", {"field-item__input--invalid": isShowInvalid} )} 
                onChange={onChange}
                onBlur={onBlur}
                type="text"
                placeholder={placeholder}
                name={name}
                required={required}
            />
            {isShowInvalid && (
                <div className="error-message">{error.name}</div>
            )}
        </div>            
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired, 
    required: PropTypes.bool,
    textarea: PropTypes.bool,
    error: PropTypes.object,
    isValid: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired
}

export default Input;

