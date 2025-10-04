import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../src/Service/authService";

const Entrace = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await AuthService.login(username, password);
            onLogin();
        } catch (err) {
            alert("Login failed!");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#101114] font-[Poppins,sans-serif] text-[#F9F9F9] px-5">
            <div className="bg-[#1C1D20] rounded-2xl shadow-lg p-10 w-full max-w-md">
                <h1 className="mb-8 text-3xl font-bold text-center">
                    ToDo APP <br />
                    <span className="text-[#00FFC4] text-4xl font-extrabold">Login</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Username input */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full rounded-lg bg-[#101114] px-4 py-3 text-sm text-[#F9F9F9] 
                            placeholder-gray-400 outline-none border border-[#4A4D57] 
                            focus:border-[#00FFC4]"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    {/* Password input */}
                    <div className="mb-6 relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full rounded-lg bg-[#101114] px-4 py-3 text-sm text-[#F9F9F9] 
                            placeholder-gray-400 outline-none border border-[#4A4D57] 
                            focus:border-[#00FFC4]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-500"
                        >
                            {showPassword ? (
                                
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.6}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.24 19.5 12 19.5
                 c1.598 0 3.113-.333 4.487-.937M21.075 15.55A10.45 10.45 0 0022.066 12
                 C20.774 7.662 16.76 4.5 12 4.5c-.706 0-1.398.058-2.07.17M3 3l18 18"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.6}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 
                7.24 4.5 12 4.5c4.76 0 8.578 3.01 9.964 7.183.07.204.07.435 
                0 .639C20.578 16.49 16.76 19.5 12 19.5c-4.76 0-8.578-3.01-9.964-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-[#00FFC4]" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-[#00FFC4] hover:underline">Forgot Password?</a>
                    </div>

                    {/* Login button */}
                    <button
                        type="submit"
                        className="w-full h-12 rounded-lg bg-[#00FFC4] text-[#101114] font-semibold hover:opacity-90 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm">
                    Don’t have an account?
                    <Link to={'/register'} className="text-[#00FFC4] font-semibold cursor-pointer hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Entrace;
