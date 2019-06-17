import React from 'react';
import './styles.scss';

const Project = (props) => {
    return ( <div className="project__container">
        <a href={props.url} target="_blank">
        <h2>{props.title}</h2>
        <div className="project__image" style={{backgroundImage:`url('${props.image}')`}}></div>
        </a>
    </div> );
}
 
export default Project;