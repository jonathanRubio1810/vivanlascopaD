import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logoMC-w.png";
import openMenu from "../../assets/images/open-menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import SuccessMsg from "../../components/SuccessMsg";
import ResetLocation from "../../helpers/ResetLocation";

const Header = ({
  loginModal,
  handleLogout,
  showModal,
  isModalActive,
  hideMenu,
  validLogin,
  isAdmin,
  activateLoginModal,
}) => {
  return (
    <header>
      {loginModal}
      <nav className="flex items-center justify-between h-[90px] px-10 z-10 w-full">
        <NavLink
          onClick={() => {
            ResetLocation();
            hideMenu();
          }}
          to="/"
          className="w-1/3 max-w-[300px]"
        >
          <img
            className="logo"
            src={logo}
            alt="Pizza Time logo"
            style={{ width: "200px", height: "50px" }}
          />
        </NavLink>

        <input type="checkbox" className="peer hidden" id="menu" />

        <label
          htmlFor="menu"
          className={`${
            isModalActive ? "bg-close-menu" : "bg-open-menu"
          } w-6 h-5 bg-cover bg-center cursor-pointer md:hidden z-50 transition-all`}
          onClick={showModal}
        ></label>

        <div
          className={`fixed inset-0 bg-gradient-to-b from-black/70 to-white/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none`}
        >
          <ul className="absolute inset-x-0 top-24 p-12 bg-dark-charcoal w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-white shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className="btnNavBarP text-white"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className="btnNavBarP text-white"
                to="/menu"
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className="btnNavBarP text-white"
                to="/blog"
              >
                MarketPlace
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className="btnNavBarP text-white"
                to="/contact"
              >
                Acerca de
              </NavLink>
            </li>

            {validLogin && (
              <li>
                <NavLink
                  onClick={() => {
                    ResetLocation();
                    hideMenu();
                  }}
                  className="btnNavBarP text-white"
                  to="/usuarios-menu-admin"
                >
                  Usuarios
                </NavLink>
              </li>
            )}

            {validLogin && (
              <li>
                <NavLink
                  onClick={() => {
                    ResetLocation();
                    hideMenu();
                  }}
                  className="btnNavBarP text-white"
                  to="/crearp"
                >
                  Registro productos
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="flex items-center">
          {validLogin ? (
            <Link
              to="/"
              className="passive-button-style text-white"
              onClick={() => {
                ResetLocation();
                handleLogout();
              }}
            >
              Log out
            </Link>
          ) : (
            <div
              className="passive-button-style text-white"
              onClick={() => {
                ResetLocation();
                activateLoginModal();
              }}
            >
              Inicio de sesión
            </div>
          )}
        </div>

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

export default Header;
