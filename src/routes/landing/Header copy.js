import React from "react";
//iconos
import logo from "../../assets/images/logoMC-w.png";
import openMenu from "../../assets/images/open-menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";

import { Link, NavLink } from "react-router-dom"; //componentes de router-dom
import SuccessMsg from "../../components/SuccessMsg"; //mensaje success para añadir producto - no se usa o muestra
import ResetLocation from "../../helpers/ResetLocation"; // componente desplaza la página al inicio cuando se ejecuta.

const Header = ({
  loginModal,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin,
  activateLoginModal,
}) => {
  return (
    <header>
      {loginModal} {/* ventana modal de login */}
      <nav className=" flex-container flex-row txt-center">
        {/*contenedor principal*/}
        <NavLink /*link logotipo*/
          onClick={() => {
            ResetLocation();
            hideMenu();
          }}
          to="/" /*agregar ruta de inicio*/
          className="logo-styling flex-container flex-row txt-center txt-white"
        >
          <img
            width="100"
            height="100"
            className="logo"
            src={logo}
            alt="Pizza Time logo"
            style={{ width: "400px", height: "50px" }}
          />
        </NavLink>
        {/*link inicio*/}
        <ul
          className={` navigation-menu flex-row  ${
            isModalActive ? "active" : ""
          }`}
        >
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              classname={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "medium-turquoise",
                    }
                  : {}
              }
              className="txt-white"
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          {/*link servicios*/}
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={({ isActive }) =>
                isActive
                  ? {

                      textDecoration: "none",
                      color: "#3361FF",
                    }
                  : {}
              }
              className="txt-white"
              to="/menu"
            >
              Servicios
            </NavLink>
          </li>
          {/*link marketplace*/}
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#3361FF",
                    }
                  : {}
              }
              className="txt-white"
              to="/blog"
            >
              MarketPlace
            </NavLink>
          </li>
          {/*link acerca de*/}
          <li>
            <NavLink
              onClick={() => {
                ResetLocation();
                hideMenu();
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#3361FF",
                    }
                  : {}
              }
              className="txt-white"
              to="/contact"
            >
              Acerca de
            </NavLink>
          </li>
          
          {validLogin ? (
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "none",
                        color: "#3361FF",
                      }
                    : {}
                }
                className="txt-white"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          ) : null}
          <li>
            <div className="login-and-cart">
              {validLogin ? (
                <Link
                  to="/"
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    handleLogout();
                  }}
                >
                  Log out
                </Link>
              ) : (
                <div
                  className="passive-button-style txt-white"
                  onClick={() => {
                    ResetLocation();
                    activateLoginModal();
                  }}
                >
                  Inicio de sesion
                </div>
              )}
            </div>
          </li>
        </ul>
        <img
          width="50"
          height="50"
          className="burger-bars"
          src={isModalActive ? closeMenu : openMenu}
          alt={isModalActive ? "Close menu" : "Open menu"}
          onClick={showModal}
        />
      </nav>
      <SuccessMsg />
    </header>
  );
};
// }

export default Header;
