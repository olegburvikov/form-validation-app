import React from 'react';
import PropTypes from 'prop-types'

import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile'
import Button from '../Button/Button';
import { inputValidation, VALIDATION_TYPES } from '../../services/validationService';
import { getAllFieldsValue, updateFieldData } from '../../services/FormService';

import './Form.scss';

export default class Form extends React.Component {
    state = {
        data: {
            name: {
                value: '',
                isValid: true,
            },
            peopleCount: {
                value: '',
                isValid: null,
                validationRules: {
                    [VALIDATION_TYPES.isNotEmty]: {},
                    [VALIDATION_TYPES.length]: {
                        min: 1,
                        max: 99,
                    },
                },
            },
            bussinessArea: {
                value: '',
                isValid: null,
                validationRules: {
                    [VALIDATION_TYPES.isNotEmty]: {},
                },
            },
            description: {
                value: '',
                isValid: null,
                validationRules: {
                    [VALIDATION_TYPES.isNotEmty]: {},
                },
            },
            companyFiles: {
                value: '',
                isValid: true,
                filesCount: 0
            }
        }
    };

    isAllFieldsValid = () => {
        const {data} = this.state;
        let result = true;
        Object.keys(data).forEach(item => {
            const {isValidBoolean, errorMessage} = inputValidation(data[item].value, data[item].validationRules);
            if(!isValidBoolean) result = false;
            this.setState(({ data }) => {                
                return updateFieldData(data, item, {
                    isValid: isValidBoolean,
                    error: {...errorMessage}
                })
            });
        })
        return result;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isAllFieldsValid()) {
            console.log({formResult: getAllFieldsValue(this.state.data)}); 
        }
    }

    handleBlur = ( {target} ) => {
        this.setState(({ data }) => {
            const {isValidBoolean, errorMessage} = inputValidation(target.value, data[target.name].validationRules);
            return updateFieldData(data, target.name, {
                value: target.value,
                isValid: isValidBoolean,
                error: {...errorMessage}
            });
        });
    }

    handleChange = ( {target} ) => {
        this.setState(({ data }) => {
          return updateFieldData(data, target.name, {
            value: target.value,
            isValid: true,
          })
        });
    }

    handleInputFileChange = ( {target} ) => {
        this.setState(({ data }) => {
            return updateFieldData(data, target.name, {
                value: target.files,
                filesCount: target.files.length
            })
        });
    }

    render() {
        const {name, peopleCount, bussinessArea, description, companyFiles} = this.state.data;
        return (
            <form onSubmit={this.handleSubmit} className='form' noValidate={this.props.noValidate}>
                <fieldset className="fieldset" >
                    <div className="form-top-wrapper">
                        <div className="form-top-wrapper__left">
                            <Input 
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                label="Your company name" 
                                placeholder="Type text" 
                                name="name"
                                {...name}
                            />
                        </div>
                        <div className="form-top-wrapper__right">
                            <Input 
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                label="Number of people" 
                                placeholder="1-99"
                                required
                                name="peopleCount"
                                {...peopleCount}

                            />
                        </div>
                    </div>
                    <div className="business-area-wrapper">
                        <Input
                            label="Business area"
                            placeholder="Design, Marketing, Development, etc."
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            required
                            name="bussinessArea"
                            {...bussinessArea}
                        />
                    </div>
                    <div className="textarea-wrapper">
                        <Input
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            textarea
                            label="Description"
                            placeholder="Type text"
                            required
                            name="description"   
                            {...description}
                        />
                    </div>
    
                    <div className="input-file-wrapper">
                        <InputFile name="companyFiles" 
                            onChange={this.handleInputFileChange} 
                            text="Add file as attachment"
                            filesCount={companyFiles.filesCount}
                        />
                    </div>
                    <div className="submit-btn-wrapper">
                        <Button 
                            text="Submit"
                            type="submit"
                            onClick={this.handleSubmit}
                            size="small"
                            color="primary"
                        />
                    </div>
                    
                </fieldset>
            </form>
        );
    }
};

Form.propTypes = {
    noValidate: PropTypes.bool
}