import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db, logout } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { query, collection, getDocs, where } from "firebase/firestore";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import alphard from "../image/mobil/alphard.webp";

export default function DetailMobil() {
    const [dateAmbil, setDateAmbil] = useState();
    const [dateKembali, setDateKembali] = useState();
    const [carDetail, setCarDetail] = useState();
    const { id } = useParams();
    // console.log(id);

    const getCarDetail = async () => {
        const cars = collection(db, "cars");
        const carSnapshot = await getDocs(cars);
        const car = carSnapshot.docs[id - 1].data();
        setCarDetail(car);
    };
    useEffect(() => {
        getCarDetail();
        // console.log(carDetail);
    });
    return (
        <>
            <Navbar />
            <div className="p-10">
                <div className="container w-100 h-auto my-40 mx-auto rounded-2xl lg:p-20 p-10 bg-[#F4F6F5]">
                    <h1 className="font-black text-4xl text-left mb-10">
                        DETAIL PENYEWAAN
                    </h1>
                    <div className="w-100 flex justify-between lg:flex-row flex-col">
                        <div className="lg:w-1/2 lg:mx-4 lg:my-0 my-4">
                            <img
                                className=" lg:rounded-3xl rounded-xl"
                                src={carDetail?.foto}
                                alt=""
                            />
                            {/* <h1 className="font-black w-100 text-2xl mt-2 text-left">
                                Rp. {carDetail?.harga}
                            </h1> */}
                        </div>
                        <div className="flex flex-col lg:w-1/2 lg:mx-4">
                            <h1 className="font-black w-100 text-2xl text-left">
                                {carDetail?.name}
                            </h1>
                            <h1 className="font-normal w-100 text-lg text-left">
                                {carDetail?.desc}
                            </h1>
                            <div className="flex flex-row align-middle items-center">
                                <input
                                    className="w-80 my-5 rounded-xl p-3 mr-3"
                                    type="date"
                                    name="ambil"
                                    value={dateAmbil}
                                    onChange={(e) =>
                                        setDateAmbil(e.target.value)
                                    }
                                    required
                                />
                                <p className="text-[#895BB3]">Ambil</p>
                            </div>

                            <div className="flex flex-row align-middle items-center">
                                <input
                                    className="w-80 my-5 rounded-xl p-3 mr-3"
                                    type="date"
                                    required
                                    value={dateKembali}
                                    onChange={(e) =>
                                        setDateKembali(e.target.value)
                                    }
                                    name="kembali"
                                />
                                <p className="text-[#895BB3]">Kembali</p>
                            </div>
                            <h1 className="font-black w-100 text-lg text-left">
                                Harga Penyewaan : Rp. {carDetail?.harga}
                            </h1>
                            <button className="border-2 border-[#895BB3] bg-[#895BB3] rounded-lg text-white font-semibold text-xl w-32 p-1 my-5 hover:bg-transparent hover:text-[#895BB3]">
                                KIRIM
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
