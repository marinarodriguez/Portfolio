import React from "react";
import "./styles.scss";

const Footer = props => {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <a target="_blank" href="tel:+34656498787">
            Teléfono: 656498787
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:marinarodriguezandres@gmail.com">
            Email: marinarodriguezandres@gmail.com
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/marinarodriguez">
            GitHub: marinarodriguez
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marinarodriguezandres/"
          >
            Linkedin: marinarodriguezandres
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/Qoqoconqu">
            Twitter: @qoqoconqu
          </a>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default Footer;
