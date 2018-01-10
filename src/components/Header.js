import React from 'react';
import Clock from './Clock';

const Header = ({title}) => {
  return (
    <div className="fl w-100 vh-25">
      <p className="tc f1 b secondary mb0">{title}</p>
      <Clock />
    </div>
  )
}

export default Header;