import React from 'react';

const Header = ({title}) => {
  return(
    <nav className="nav-wrapper blue-grey lighten-3">
      <a href="#!" className="brand-logo center">
        {title}
      </a>
    </nav>
  );
}

export default Header;