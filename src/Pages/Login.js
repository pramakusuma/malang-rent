import car from "../image/car.png";
import logo from "../image/logo.png";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import {
    auth,
    signInWithEmailAndPassword,
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useHistory();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate.push("/");
    }, [user, loading]);
    return (
        <div className="bg-[#895BB3] lg:w-screen w-100 h-screen lg:px-52 lg:py-40 p-10">
            <div className="lg:w-100 h-auto  bg-white flex lg:flex-row justify-center flex-col">
                <div className="flex flex-col bg-white w-full py-5 lg:px-20 px-10">
                    <img className="w-1/6" src={logo} alt="" />
                    <h1 className="font-black text-2xl text-left my-5">
                        Login
                    </h1>

                    <div className="flex justify-start flex-col my-3">
                        <p className="text-left">Email :</p>
                        <input
                            className="border-2 lg:w-80 border-black rounded-md"
                            required
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                        />
                    </div>
                    <div className="flex justify-start flex-col my-3">
                        <p className=" text-left">Password :</p>
                        <input
                            className="border-2 lg:w-80 border-black rounded-md"
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() =>
                            logInWithEmailAndPassword(email, password)
                        }
                        className="flex justify-center flex-col lg:w-80 w-full font-semibold text-center mt-10 bg-[#480869] border text-white border-[#480869] hover:bg-transparent hover:text-[#480869] hover:border-[#480869] py-1  rounded-md"
                    >
                        <p className="w-full text-center">LOGIN</p>
                    </button>

                    <div className="flex lg:w-80 justify-center text-sm mt-5 text-center">
                        <p>Belum punya akun? </p>
                        <a className="mx-1 text-[#480869]" href="/register">
                            <p className="text-center">Register</p>
                        </a>
                    </div>
                    <a
                        className="flex lg:w-80 text-sm text-[#480869]"
                        onClick={signInWithGoogle}
                    >
                        <p className="text-center mx-auto">Login with Google</p>
                    </a>
                </div>
                <div className="bg-[#F4F6F5] lg:w-full w-0">
                    <img className="mx-auto" src={car} alt="" />
                </div>
            </div>
            <div className="flex justify-center my-36">
                <p className="text-center text-white font-semibold">
                    Copyright Malang Rent
                </p>
            </div>
        </div>
    );
}
