import React from "react";
import "./styles.scss";

const Footer = props => {
  return (
    <div className="footer__container">
      <nav>
        <ul>
          <li>
            <a target="_blank" href="tel:+34656498787">
              <i class="fas fa-phone-alt" /> 656498787
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:marinarodriguezandres@gmail.com">
              <i class="far fa-envelope" /> marinarodriguezandres@gmail.com
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/marinarodriguez">
              <i class="fab fa-github" /> marinarodriguez
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marinarodriguezandres/"
            >
              <i class="fab fa-linkedin-in" /> marinarodriguezandres
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/Qoqoconqu">
              <i class="fab fa-twitter" /> @qoqoconqu
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
