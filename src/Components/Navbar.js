import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, db, logout } from "../firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";

import logo from "../image/logo.png";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useHistory();
    const fetchUserName = async () => {
        try {
            const q = query(
                collection(db, "users"),
                where("uid", "==", user?.uid)
            );
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        // if (!user) return navigate.push("/");
        fetchUserName();
    }, [user, loading]);

    // let profileButton;

    // if (user) {
    //     profileButton = (
    //         <div>
    //             <a
    //                 href="/profile"
    //                 className="inline-block font-black text-sm px-4 py-2 leading-none border rounded text-white bg-[#480869] border-[#480869] hover:border-[#480869] hover:text-[#480869] hover:bg-transparent mt-4 lg:mt-0 lg:ml-10"
    //             >
    //                 {name}
    //             </a>
    //         </div>
    //     );
    // } else {
    //     profileButton = (
    //         <div>
    //             <a
    //                 href="/login"
    //                 className="inline-block font-black text-sm px-4 py-2 leading-none border rounded text-white bg-[#480869] border-[#480869] hover:border-[#480869] hover:text-[#480869] hover:bg-transparent mt-4 lg:mt-0 lg:ml-10"
    //             >
    //                 LOGIN
    //             </a>
    //         </div>
    //     );
    // }
    return (
        <>
            <nav className="flex items-center justify-between w-full flex-wrap bg-white lg:px-20 px-10 fixed inset-x-0 z-50 top-0">
                <div className="flex w-auto items-center flex-shrink-0 text-black mr-6">
                    <a href="/">
                        <img
                            className="fill-current w-24 mr-2"
                            src={logo}
                            alt=""
                        />
                    </a>
                </div>
                <div className="block justify-end lg:hidden">
                    <button
                        className="flex items-center cursor-pointer px-3 py-2 border rounded text-[#480869] hover:bg-[#480869] border-[#480869] hover:text-white hover:border-[#480869]"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center lg:flex-row lg:w-auto lg:justify-end" +
                        (navbarOpen ? " flex w-full flex-col p-8" : " hidden")
                    }
                >
                    <div className="text-lg font-black lg:flex lg:flex-grow lg:justify-end">
                        <a
                            href="#mobil"
                            className="block mt-4 text-center lg:inline-block lg:mt-0 text-black hover:text-black lg:mr-6"
                        >
                            MOBIL
                        </a>
                        <a
                            href="/riwayat"
                            className="block mt-4 text-center lg:inline-block lg:mt-0 text-black hover:text-black lg:mr-0"
                        >
                            RIWAYAT
                        </a>
                        {/* <a
                            href="/profile"
                            className="block mt-4 text-center lg:inline-block lg:mt-0 text-black hover:text-black"
                        >
                            PROFIL
                        </a> */}
                    </div>
                    {/* <div> {profileButton}</div> */}

                    {user && (
                        <div>
                            <a
                                href="/profile"
                                className="inline-block font-black text-sm px-4 py-2 leading-none border rounded text-white bg-[#480869] border-[#480869] hover:border-[#480869] hover:text-[#480869] hover:bg-transparent mt-4 lg:mt-0 lg:ml-10"
                            >
                                {name}
                            </a>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <a
                                href="/login"
                                className="inline-block font-black text-sm px-4 py-2 leading-none border rounded text-white bg-[#480869] border-[#480869] hover:border-[#480869] hover:text-[#480869] hover:bg-transparent mt-4 lg:mt-0 lg:ml-10"
                            >
                                LOGIN
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
