import React from "react";

export default function Navigation() {
  return (
    <div className="navigation">
      <h1>Navigation</h1>
      <label htmlFor="navi-toggle" className="navigation__button" id="">
        MENU
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
        />
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#top" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#skills" className="navigation__link">
              Skills
            </a>
          </li>
          <li className="navigation__item">
            <a href="projects#" className="navigation__link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}