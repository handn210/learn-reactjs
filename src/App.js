import logo from './logo.svg';
import './App.css';
import React from "react";
import ColorBox from './index.js'

function ColorBox (props){
  const {color} = props;

  return(
    <div className='box' style={{backgroundColor: color}}></div>

  )
}
export default ColorBox;
