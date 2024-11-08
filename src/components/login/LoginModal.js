import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validateForm from "../validateForm"; 
import LinkButton from "../Button";

const LoginModal = ({ setLoginModalWindow, setValidLogin, loginModalWindow, hideMenu }) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (loginModalWindow) {
      setModalVisible(true);
    }
  }, [loginModalWindow]);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`); 
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const hideLoginModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setLoginModalWindow(false);
    }, 300);
    setFormValue({ email: '', password: '' });
    setFormError({});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationError('');

    const validCredentials = [
      { email: 'carlos@gmail.com', password: 'carlos1234A@' },
      { email: 'jared@gmail.com', password: 'jared1234' },
      { email: 'ingGus@gmail.com', password: 'gustavo1234' },
    ];

    const isValidUser = validCredentials.some(
      (cred) => formValue.email === cred.email && formValue.password === cred.password
    );

    if (isValidUser) {
      setValidLogin(true);
      setLoading(false);
      hideLoginModal();
      navigate('/usuarios-menu-admin'); 
    } else {
      setLoading(false);
      setVerificationError('Credenciales incorrectas. Intenta nuevamente.');
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 ${loginModalWindow ? 'block' : 'hidden'}`}>
      <div className={`bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-xl w-full max-w-lg relative transform transition-transform duration-300 ease-out ${modalVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-3 right-3 bg-white"
          type="button"
          onClick={hideLoginModal}
        >
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Iniciar sesión</h2>

        {loading ? (
          <div role="status" className="flex flex-col items-center">
            <p className="text-gray-600 text-lg mb-2">Almost there...</p>
            <img alt="Processing request" className="w-24 h-24 animate-spin" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6">
            {verificationError && <p className="text-red-500 text-sm text-center">{verificationError}</p>}
            <div>
              <input
                onChange={handleValidation}
                value={formValue.email}
                name="email"
                type="email"
                placeholder="Correo"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-black" 
              />
              <span className="text-red-500 text-sm">{formError.email}</span>
            </div>
            <div>
              <input
                onChange={handleValidation}
                value={formValue.password}
                name="password"
                type="password"
                placeholder="Contraseña"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-black"
                style={{ color: 'black' }} 
              />
              <span className="text-red-500 text-sm">{formError.password}</span>
            </div>
            <LinkButton
              onClick={() => {
                hideLoginModal();
                hideMenu();
              }}
              to="/register"
              className="w-3/4 mx-auto bg-red-600 text-white py-2 text-center rounded-lg shadow-md hover:bg-red-700 transition-colors mb-6 block"
            >
              Registrarse
            </LinkButton>

            <button
              type="submit"
              className="w-3/4 mx-auto bg-blue-600 text-white py-2 text-center rounded-lg shadow-md hover:bg-blue-700 transition-colors block"
            >
              Iniciar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
