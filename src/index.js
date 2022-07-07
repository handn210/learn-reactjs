import React from 'react';
import ReactDOM from 'react-dom/client';
import ColorBox from './App.js';
import App from './App';
import reportWebVitals from './reportWebVitals';


export default function ColorBox(){
  return(
    <section>
      <ColorBox color="red"></ColorBox>
      <ColorBox color="green"></ColorBox>
      <ColorBox color="blue"></ColorBox>
    </section>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

