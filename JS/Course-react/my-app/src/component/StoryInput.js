import React from 'react'
import PropTypes from "prop-types"


const StoryInput = (props) => {
    //부모로 부터 데이터를 받음.
    const {errorMessage, label, name, value, type, focus } = props;

    //input onChange 이벤트
    const handleChange = e => {
        console.log(e.target.value)
        if(isNaN(e.target.value)) {
            console.log("숫자 확인")
        } else {
            console.log("숫자 x")
        }
    };


//input용 컴포넌트
return (
    <div>
        <label>
            {label}
            <input 
            id={`input_${name}`}
            onChange={e => handleChange}
            value={value}
            type={type}
            autoFocus={focus}
            />
        </label>
        {errorMessage && <span className="danger">{errorMessage}</span>}
    </div>
)

};

StoryInput.propTypes = {
    /** input type 설정 */
    type: PropTypes.oneOf(["text", "number", "price"]),
    /** Error Message */
    errorMessage: PropTypes.string,
    /** input label 설정 */
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    autoFocus: PropTypes.bool,
  };
  
  StoryInput.defaultProps = {
    onChange: () => {},
    onFocus: false,
    autoFocus: false,
    type: "text",
  };

  export default StoryInput;
