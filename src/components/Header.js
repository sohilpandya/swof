import React from 'react';
import Clock from './Clock';

const Header = ({title}) => {
  return (
    <div className="w-100 vh-15">
      <p className="tc f1 b secondary mv0 pt4 ">{title}</p>
      <Clock />
    </div>
  )
}

export default Header;