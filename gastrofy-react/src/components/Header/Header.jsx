import React from 'react';
import './Header.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHotTub,
  faShoppingBag,
  faUser,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

library.add(faShoppingBag, faHotTub, faUser, faBars, faTimes);

function Header() {
  return (
    <div className="headerMain">
      <header className="header">
        <div className="headerLogo">
          <a href="#">GASTROFY</a>
        </div>
        <div className="headerCenter">
          <div className="headerCenterLeft">
            <p>Laga</p>
          </div>
          <div className="headerCenterRight">
            <NavLink to="/purchased" activeClassName="nav-active">
              <div className="navLink">
                <p>Mina köpta recept</p>
              </div>
            </NavLink>
            <NavLink to="/shared" activeClassName="nav-active">
              <div className="navLink">
                <p>Delade recept</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="headerNav">
          <div className="headerNavPosition">
            <div className="iconLink">
              <FontAwesomeIcon icon="shopping-bag" />
              <p>Min matkasse</p>
            </div>
            <div className="iconLink iconLinkActive">
              <FontAwesomeIcon icon="hot-tub" />
              <p>Laga</p>
            </div>
            <div className="iconLink">
              <FontAwesomeIcon icon="user" />
              <p>Logga in</p>
            </div>
          </div>
        </div>
        <div className="navCross">
          <FontAwesomeIcon icon="bars" onClick={navShow} />
        </div>
        <div className="headerCross">
          <FontAwesomeIcon icon="times" onClick={navHide} />
          <ul className="headerCrossList">
            <li>
              <a href="#">Hem</a>
            </li>
            <li>
              <a href="#">Min matkasse</a>
            </li>
            <li>
              <a href="#" id="crossLinkActive">
                Laga
              </a>
            </li>
            <li>
              <a href="#">Logga in</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

function navShow() {
  document.querySelector('.headerCross').style.transform = 'translateX(0%)';
}

function navHide() {
  document.querySelector('.headerCross').style.transform = 'translateX(-100%)';
}

export default Header;
