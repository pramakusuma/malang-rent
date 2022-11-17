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
        foto: alphard,
    },
    {
        nama: "Avanza",
        stok: "6",
        foto: avanza,
    },
    {
        nama: "Fortuner",
        stok: "3",
        foto: fortuner,
    },
    {
        nama: "Pajero",
        stok: "1",
        foto: pajero,
    },

    {
        nama: "Range Rover",
        stok: "2",
        foto: rangerover,
    },
];

export default function Mobil() {
    return (
        <div className="container w-100 mx-auto">
            <h1 className="font-black text-4xl text-left mb-10">MOBIL</h1>
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
                {listMobil.map((data, index) => (
                    <SwiperSlide>
                        <div key={index}>
                            <MobilCard
                                nama={data.nama}
                                stok={data.stok}
                                foto={data.foto}
                            ></MobilCard>
                        </div>
                    </SwiperSlide>
                ))}
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
