import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db, logout } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import {
    query,
    getFirestore,
    collection,
    getDocs,
    where,
} from "firebase/firestore";

import MobilCard from "../Components/MobilCard";
import alphard from "../image/mobil/alphard.webp";
import avanza from "../image/mobil/avanza.webp";
import fortuner from "../image/mobil/fortuner.jpeg";
import pajero from "../image/mobil/pajero.webp";
import rangerover from "../image/mobil/rangerover.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const listMobil = [
    {
        nama: "Alphard",
        stok: "2",
        harga: "450000",
        foto: alphard,
    },
    {
        nama: "Avanza",
        stok: "6",
        harga: "350000",
        foto: avanza,
    },
    {
        nama: "Fortuner",
        stok: "3",
        harga: "400000",
        foto: fortuner,
    },
    {
        nama: "Pajero",
        stok: "1",
        harga: "450000",
        foto: pajero,
    },

    {
        nama: "Range Rover",
        stok: "2",
        harga: "600000",
        foto: rangerover,
    },
];

export default function Mobil() {
    const [carLists, loading, error] = useCollection(collection(db, "cars"), {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    // const [carLists, setCarLists] = useState([]);
    // const getCars = async () => {
    //     const cars = collection(db, "cars");
    //     const carSnapshot = await getDocs(cars);
    //     const carList = carSnapshot.docs.map((doc) => doc.data());
    //     setCarLists(carList);
    // };
    // useEffect(() => {
    //     getCars();
    //     // console.log(carLists);
    // });

    const history = useHistory();
    const selectedCar = (e) => {
        const carId = e.currentTarget.id;
        history.push("/detailmobil/" + carId);
        // console.log(e.currentTarget.id);
    };
    return (
        <div className="container w-100 mx-auto">
            <h1 className="font-black text-4xl text-left mb-10">MOBIL</h1>

            {/* <Swiper
                breakpoints={{
                    // Mobile View
                    640: {
                        slidesPerView: 1,
                    },
                    // PC View
                    768: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={20}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {carLists.map((data, index) => (
                    <SwiperSlide>
                        <div key={index}>
                            <a id={index} onClick={selectedCar}>
                                <MobilCard
                                    nama={data.name}
                                    stok={data.stok}
                                    foto={data.foto}
                                ></MobilCard>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}
            <Swiper
                breakpoints={{
                    // Mobile View
                    640: {
                        slidesPerView: 1,
                    },
                    // PC View
                    768: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={20}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {carLists && (
                    <span>
                        Collection:{" "}
                        {carLists.docs.map((doc) => (
                            <SwiperSlide key={doc.id}>
                                <div key={doc.id}>
                                    <a id={doc.id} onClick={selectedCar}>
                                        <MobilCard
                                            nama={doc.data().name}
                                            stok={doc.data().stok}
                                            foto={doc.data().foto}
                                        ></MobilCard>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </span>
                )}
            </Swiper>
            {/* <div className="grid lg:grid-cols-2 my-20 mx-auto">
                {listMobil.map((data, index) => (
                    <div key={index}>
                        <MobilCard
                            nama={data.nama}
                            stok={data.stok}
                            foto={data.foto}
                        ></MobilCard>
                    </div>
                ))}
            </div> */}
        </div>
    );
}
