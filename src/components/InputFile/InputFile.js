import React from 'react';
import PropTypes from 'prop-types';

import folderSvg from '../../assets/icons/folder.svg'
import './InputFile.scss'

const InputFile = ({name,text, filesCount, onChange}) => {

    return (
        <div className="inputfile-item-wrapper">
            <input multiple type="file" name={name} id={name} onChange={onChange} />

            <label htmlFor={name} className="inputfile">
                <div className="inputfile-left-wrapper">
                    <img src={folderSvg} alt="folder icon" className="inputfile__icon"/>
                    <span className="inputfile__text" >{text}</span>
                </div>
                <div className="inputfile__files-counter">
                    {filesCount} files attached
                </div>
            </label>
        </div>
    );
};

InputFile.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    filesCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default InputFile;