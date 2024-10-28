import React, { useEffect, useState } from "react";
import validateForm from "../../components/validateForm";
import ResetLocation from "../../helpers/ResetLocation";

const Register = ({ activateLoginModal }) => {
    const [formValue, setFormValue] = useState({ 
        id: '', 
        email: '', 
        password: '', 
        repeatPassword: '', 
        fullname: '', 
        address: '', 
        number: '' 
    });
    const [formError, setFormError] = useState({});
    const [submit, setSubmit] = useState(false);
    const [registrationFail, setRegistrationFail] = useState(false);
    const [loading, setLoading] = useState(false);
    const [animate, setAnimate] = useState(false); 

    const createUser = async (user) => {
        console.log("Datos enviados a la API:", user);
        
        try {
            const response = await fetch(`${process.env.REACT_APP_USERS_URL}`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (response.ok) {
                return true; 
            } else {
                const errorData = await response.json();
                console.error('Error creating user:', errorData);
                setRegistrationFail(true); 
                return false; 
            }
        } catch (err) {
            console.error("Error creating user:", err.message);
            setRegistrationFail(true);
            return false; 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const errors = validate(formValue);
        setFormError(errors);

        if (Object.keys(errors).length > 0) {
            setLoading(false);
            return;
        }

        const currForm = { 
            ...formValue, 
            email: formValue.email.toLowerCase() 
        };

        console.log("Formulario enviado:", currForm);

        const accCreation = await createUser(currForm);
        setLoading(false);

        if (!accCreation) {
            setRegistrationFail(true);
        } else {
            setRegistrationFail(false);
            setSubmit(true);
            setFormValue({ id: '', email: '', password: '', repeatPassword: '', fullname: '', address: '', number: '' });
        }
    };

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const validate = validateForm("registration");

    useEffect(() => {
        document.title = "Registration | MarketConnect";
    }, []);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 1000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6">
            <div
                className={`bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mt-16 transition-transform duration-500 ${
                    animate ? "animate-slide-in" : ""
                }`}
                style={{
                    animation: animate ? 'slide-in 0.5s ease-out' : 'none',
                }}
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-100">
                    {submit && Object.keys(formError).length === 0 ? 'Registration Successful' : 'Register'}
                </h2>
                
                {loading ? (
                    <div role="status" className="flex flex-col items-center justify-center py-10">
                        <p className="text-gray-400 mb-4">Processing...</p>
                        <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif" className="w-16 h-16" />
                    </div>
                ) : submit && Object.keys(formError).length === 0 ? (
                    <section className="text-center">
                        <p className="text-green-500 text-lg mb-4">You can now log in and make an order!</p>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            onClick={() => {
                                ResetLocation();
                                activateLoginModal();
                                setSubmit(false);
                            }}
                        >
                            Log in
                        </button>
                    </section>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {registrationFail && <p className="text-red-500 text-sm">Seems like this email has already been registered!</p>}
                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="fullname"
                                    value={formValue.fullname}
                                    onChange={handleValidation}
                                    className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                                {formError.fullname && <p className="text-red-500 text-xs">{formError.fullname}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formValue.email}
                                    onChange={handleValidation}
                                    className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                                {formError.email && <p className="text-red-500 text-xs">{formError.email}</p>}
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    name="password"
                                    value={formValue.password}
                                    onChange={handleValidation}
                                    className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                                {formError.password && <p className="text-red-500 text-xs">{formError.password}</p>}
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Repeat Password"
                                    name="repeatPassword"
                                    value={formValue.repeatPassword}
                                    onChange={handleValidation}
                                    className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                                {formError.repeatPassword && <p className="text-red-500 text-xs">{formError.repeatPassword}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Address (optional)"
                                    name="address"
                                    value={formValue.address}
                                    onChange={handleValidation}
                                    className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                                {formError.address && <p className="text-red-500 text-xs">{formError.address}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone (optional)"
                                    name="number"
                                    value={formValue.number}
                                    onChange={handleValidation}
                                    className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                                {formError.number && <p className="text-red-500 text-xs">{formError.number}</p>}
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm text-center">
                            By registering, you agree to our terms and conditions. You will receive a notification to confirm your account.
                        </p>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>
                )}
            </div>

            <style jsx="true">{`
                @keyframes slide-in {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </main>
    );
};

export default Register;
