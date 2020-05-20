import React, { Fragment } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './StepIndicator.scss';

const StepIndicator = ({size, activeStep}) => {
    let content = [];
    for(let index = 1; index <= size; index++) {      
        content.push(
            <Fragment key={index} >
                {index !== 1 && (<div className="indicator-line"></div>)}
                <div className={cn("step", {'active': index === activeStep})}>
                    <div className="step-icon">{index}</div>
                </div>
            </Fragment>
        )
    }
    return (
        <div className="step-indicator">
            {content}
        </div>
    );
};

StepIndicator.propTypes = {
    size: PropTypes.number.isRequired,
    activeStep: PropTypes.number.isRequired,
}

export default StepIndicator;