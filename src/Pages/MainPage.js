import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, db, logout } from "../firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Mobil from "./Mobil";
import car from "../image/car.png";

import TawkTo from "tawkto-react";

function MainPage() {
    // const [user, loading, error] = useAuthState(auth);
    // const [name, setName] = useState("");
    // const [carLists, setCarLists] = useState([]);
    // const navigate = useHistory();
    // const fetchUserName = async () => {
    //     try {
    //         const q = query(
    //             collection(db, "users"),
    //             where("uid", "==", user?.uid)
    //         );
    //         const doc = await getDocs(q);
    //         const data = doc.docs[0].data();
    //         setName(data.name);
    //     } catch (err) {
    //         console.error(err);
    //         alert("An error occured while fetching user data");
    //     }
    // };

    // const getCars = async () => {
    //     const cars = collection(db, "cars");
    //     const carSnapshot = await getDocs(cars);
    //     const carList = carSnapshot.docs.map((doc) => doc.data());
    //     // const carList = carSnapshot.docs[1].data();
    //     setCarLists(carList);
    //     // console.log(carLists);
    //     // return carList;
    // };
    // useEffect(() => {
    //     if (loading) return;
    //     if (!user) return navigate.push("/");
    //     fetchUserName();
    // }, [user, loading]);

    // useEffect(() => {
    //     getCars();
    //     // console.log(carLists);
    // });

    return (
        <div>
            <title>Malang Rent</title>
            <Navbar />
            <div className="mt-20 p-10" id="home">
                <div className="mx-auto container w-100 h-auto bg-[#F4F6F5] rounded-3xl">
                    <div className="flex flex-row justify-between p-10">
                        <div className="flex-col">
                            <div className="lg:text-7xl text-4xl text-left font-black p-5">
                                <h1 className="lg:mt-2">TEMPAT</h1>
                                <h1 className="lg:mt-2">RENTAL</h1>
                                <h1 className="lg:mt-2 bg-[#F1A93D]">MOBIL</h1>
                                <h1 className="lg:mt-2">MALANG</h1>
                                <p className="font-normal text-lg mt-2">
                                    Pilih mobil terbaik, untuk liburanmu yang
                                    apik !
                                </p>
                                <a
                                    href="#mobil"
                                    className="inline-block lg:text-2xl text-sm px-4 py-2 font-semibold border rounded-lg text-white bg-[#480869] border-[#480869] hover:border-[#480869] hover:text-[#480869] hover:bg-transparent mt-4 lg:mt-0"
                                >
                                    CARI MOBIL
                                </a>
                            </div>
                        </div>
                        <div>
                            <img className="lg:w-full w-96" src={car} alt="" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto container my-20 w-100 h-auto bg-[#F1A93D]">
                    <h1 className="font-black lg:text-4xl text-xl p-6">
                        #sewamobillebihmudah
                    </h1>
                </div>
            </div>
            <div className="p-10" id="mobil">
                <Mobil />
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;
