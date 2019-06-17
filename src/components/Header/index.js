import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return ( <div>Header
        <nav>
            <ul>
                <li><Link to={`/`}>About me</Link></li>
                <li><Link to={`/projects`}>Projects</Link></li>
                <li><Link to={`/contact`}>Contact</Link></li>
            </ul>
        </nav>
    </div> );
}
 
export default Header;