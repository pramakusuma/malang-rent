import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, db, logout } from "../firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import userphoto from "../image/profile.png";

export default function Profile() {
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
        if (!user) return navigate.push("/");
        fetchUserName();
    }, [user, loading]);
    return (
        <>
            <Navbar />
            <div className="p-10">
                <div className="container w-100 h-auto my-40 mx-auto rounded-2xl lg:p-20 p-10 bg-[#F4F6F5]">
                    <h1 className="font-black text-4xl text-left mb-10">
                        PROFIL
                    </h1>
                    <div className="w-100 flex justify-between align-middle items-center lg:flex-row flex-col">
                        <div className="flex flex-col lg:w-1/2 lg:mx-auto">
                            <img className="w-80" src={userphoto} alt="" />
                        </div>
                        <div className="flex flex-col lg:w-1/2 lg:mx-4">
                            <h1 className="font-black w-100 text-md lg:text-xl text-left">
                                Nama :
                            </h1>
                            <h2 className="font-normal w-100 text-md mb-5 lg:text-xl text-left">
                                {name}
                            </h2>
                            <h1 className="font-black w-100 text-md lg:text-xl text-left">
                                Email :
                            </h1>
                            <h2 className="font-normal w-100 text-md lg:text-xl text-left">
                                {user?.email}
                            </h2>
                            <button
                                onClick={logout}
                                className="border-2 border-[#895BB3] bg-[#895BB3] rounded-lg text-white font-semibold text-xl w-32 p-1 my-5 hover:bg-transparent hover:text-[#895BB3]"
                            >
                                LOGOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
