import React from "react";
import { NavLink } from "react-router-dom";
import FooterSocials from "./FooterSocials";
import ResetLocation from "../../helpers/ResetLocation";

export default class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="footer-menu  flex-container flex-column">
        <li>
          <FooterSocials />
        </li>
      </ul>
    );
  }
}
