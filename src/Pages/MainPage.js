import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Mobil from "./Mobil";
import car from "../image/car.png";

function MainPage() {
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
                                    Penyedia mobil rental di Malang Raya
                                </p>
                                <a
                                    href="#"
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
                    <h1 className="font-black lg:text-4xl text-2xl p-6">
                        #malangrent
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
