import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const Header = (props) => {
    return ( <div className="header__container">
        <nav className="header__nav">
            <ul className="header__menu">
                <li><Link to={`/`}>About me</Link></li>
                <li><Link to={`/projects`}>Projects</Link></li>
                <li><Link to={`/contact`}>Contact</Link></li>
            </ul>
        </nav>
        <div className="progress-container">
          <div className="progress-bar" id="myBar" />
        </div>
    </div> );
}
 
export default Header;