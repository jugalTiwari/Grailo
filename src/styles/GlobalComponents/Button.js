import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    <ButtonFront alt={props.alt} onClick={props.onClick} disableHover={props.disableHover} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button
