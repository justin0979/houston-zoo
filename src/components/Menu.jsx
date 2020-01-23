import React from 'react';

const Menu = props => {
  return (
    <div className="nav-menu">
      <a className="position-link nav-menu__item" href="#header">
        Back to top
      </a>
      <a className="position-link nav-menu__item" href="#statuePicsId">
        Statue Pictures
      </a>
      <a className="position-link nav-menu__item" href="#liveAnimalPicsId">
        Live Animal Pictures
      </a>
    </div>
  );
};

export default Menu;
