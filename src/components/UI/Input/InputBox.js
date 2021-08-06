import React from 'react';
import classes from './InputBox.module.css'
const InputBox = (props) => {
    const labelString = props.boxLabel === 'password' ? 'Password' : 'E-Mail';

    return (
        <div
          className={`${classes.inputBox} ${
            props.boxStatus.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor={props.boxLabel}>{labelString}</label>
          <input
            type={props.boxLabel}
            id={props.boxLabel}
            value={props.boxStatus.value}
            onChange={props.onChangehandler}
            onBlur={props.onBlurhandler}
          />
        </div>
    );

};

export default InputBox;