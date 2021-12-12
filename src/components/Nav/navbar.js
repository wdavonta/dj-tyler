import React from 'react';
import {  Link } from "react-router-dom";
const nav= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contac">Contact</Link>
    </li>
  </div>
  );
}
export default nav;