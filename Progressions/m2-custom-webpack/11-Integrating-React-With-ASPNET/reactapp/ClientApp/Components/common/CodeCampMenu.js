import React from 'react';
import { Link } from 'react-router-dom';

export default function CodeCampMenu() {
    return (
        <div>
            <div className="header__open-button-mobile">
                <a href="" className="js-open-main-menu">
                    <i className="fa fa-bars" />
                </a>
            </div>
            <div className="header__user">
                <img
                    src="assets/images/user-icon.png"
                    className="header__user__icon"
                    alt="User Icon"
                />
                <span className="header__user__hello">Hello, stranger</span>
                <Link to="/login">Login</Link>
            </div>

            <ul className="header__menu-list js-menu">
                <li className="close-button-mobile">
                    <a href="" className="js-close-main-menu">
                        <i className="fa fa-remove" />
                    </a>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/speakers">Speakers</Link>
                </li>

                <li className="social-icon">
                    <a href="">
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                </li>
                <li className="social-icon">
                    <a href="">
                        <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                </li>

                <li className="social-icon">
                    <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>
    );
}