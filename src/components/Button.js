import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import classes from '../styles/MyStyle.module.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";

const Button = props => {
  return (
    <button type={props.type || "button"} 
    className={`${classes.button} ${props.className}`} 
    onClick={props.onClick}
    disabled={props.disbled}>
        <span className={classes.button__text}>{props.text}</span>
        <span> </span>
        <span className={classes.button__icon}>
            <i className={props.icon} />
        </span>
    </button>
  );
};

export default Button;
