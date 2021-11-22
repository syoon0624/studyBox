import React from 'react';
import PropTypes from "prop-types"
import { useState } from 'react';

const StyleInput = props => {
    const { label, name, value, type, validType} = props;
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = e => {
        console.log(e.target.value);
        if( validType === 'number') {
            if(isNaN(e.target.value)) {
                setErrorMessage('숫자가 아닙니다.')
            } else {
                setErrorMessage('')
            }
        }
    }

    return ( 
        <div>
            <label>
                {label}
                <input
                id={`input_${name}`} 
                value={value}
                type={type}
                onChange={handleChange}
                validType={validType}
                className={`validate ${errorMessage && "invalid"}`}
                />
            </label>
            {errorMessage && <span className="danger">{errorMessage}</span>}
        </div>
    );
};


StyleInput.propTypes = {
    type: PropTypes.oneOf(["text", "number", "price"]),
    /** Error Message */
    validType: PropTypes.oneOf(["text", "number"]),
    errorMessage: PropTypes.string,
    /** input label 설정 */
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    autoFocus: PropTypes.bool,
  };

export default StyleInput