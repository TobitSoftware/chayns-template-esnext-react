import React from 'react';

const PLACEHOLDER = 'TODO';

const ToDoInput = ({value,onBlur,onChange})=>{
    return(
        <input
            className='input'
            type='text'
            placeholder={PLACEHOLDER}
            value={value}
            onBlur={onBlur}
            onKeyDown={(event)=>{
                "use strict";
                if(event.keyCode === 13){
                    event.target.blur();
                }
            }}
            onChange={onChange}
            required
        />
    );
};

ToDoInput.defaultProps = {
    value: ''
};

ToDoInput.propTypes = {
    value: React.PropTypes.string,
    onBlur: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default ToDoInput;