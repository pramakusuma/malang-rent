import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import about from "../image/about.png";
import aboutlogo from "../image/about-logo.png";

export default function TentangKami() {
    return (
        <>
            <Navbar />
            <div className=" bg-[#F6F6F6] my-40 lg:p-20 p-10 mx-auto justify-between align-middle items-center w-full flex flex-col lg:flex-row">
                <div className="w-1/2 my-5">
                    <img className="" src={about} alt="" />
                </div>

                <div className="w-1/2 flex flex-col">
                    <h1 className="font-black text-4xl  lg:text-left text-center mb-5">
                        Latar Belakang
                    </h1>
                    <h1 className="font-normal lg:text-xl lg:text-left text-center mb-10">
                        Sering kali seorang wisatawan kesulitan untuk memastikan
                        ketersediaan mobil di tempat rental. Selain itu hal ini
                        juga memakan waktu yang banyak jika pemilik rental sulit
                        dihubungi.
                    </h1>
                </div>
            </div>

            <div className=" bg-[#480869] my-40 lg:p-20 p-10 mx-auto justify-between align-middle items-center w-full flex flex-col lg:flex-row">
                <div className="w-1/2 my-5">
                    <img src={aboutlogo} alt="" />
                </div>
                <div className="w-1/2 flex flex-col">
                    <h1 className="font-black text-white text-4xl lg:text-right text-center mb-5">
                        Tujuan Bersama
                    </h1>
                    <h1 className="font-normal text-white text-md lg:text-xl lg:text-right text-center mb-10">
                        Malang Rent hadir untuk membantu para wisatawan dalam
                        menemukan mobil terbaiknya selama berwisata.
                    </h1>
                </div>
            </div>

            <Footer />
        </>
    );
}
