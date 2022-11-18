import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import alphard from "../image/mobil/alphard.webp";

export default function DetailMobil(nama, harga, foto) {
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
                                src={alphard}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col lg:w-1/2 lg:mx-4">
                            <h1 className="font-black w-100 text-2xl text-left">
                                Alphard
                            </h1>
                            <div className="flex flex-row align-middle items-center">
                                <input
                                    className="w-80 my-5 rounded-xl p-3 mr-3"
                                    type="date"
                                    name="ambil"
                                    id=""
                                />
                                <p className="text-[#895BB3]">Ambil</p>
                            </div>

                            <div className="flex flex-row align-middle items-center">
                                <input
                                    className="w-80 my-5 rounded-xl p-3 mr-3"
                                    type="date"
                                    name="kembali"
                                    id=""
                                />
                                <p className="text-[#895BB3]">Kembali</p>
                            </div>
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
