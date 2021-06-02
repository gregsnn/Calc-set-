import React from 'react';
import './Button.scss';

const Button = props => {

    let classes = "button "
    classes += props.operator ? 'operator' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}
    

export { Button }