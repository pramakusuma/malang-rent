import logoFacebook from "../image/footer/facebook.png";
import logoIg from "../image/footer/ig.png";
import logoTwitter from "../image/footer/twitter.png";

// const logo = [
//     (logoFacebook = "../image/footer/ig.png"),
//     (logoIg = "../image/footer/ig.png"),
//     (logoTwitter = "../image/footer/twitter.png"),
// ];

export default function Footer() {
    return (
        <div className="flex flex-col justify-center w-full h-60 p-10 bg-[#F1A93D]">
            <h1 className="font-black text-4xl text-center">MALANG RENT</h1>
            <p className="mt-10">Penyedia Rental Mobil di Malang Raya</p>
            <div className="mx-auto mt-5 flex flex-row">
                <div className="bg-[#EE7A31] w-12 h-12 mx-2 rounded-lg flex">
                    <img className="p-3 mx-auto" src={logoFacebook} alt="" />
                </div>
                <div className="bg-[#EE7A31] w-12 h-12 mx-2 rounded-lg flex">
                    <img className="p-3 mx-auto" src={logoIg} alt="" />
                </div>
                <div className="bg-[#EE7A31] w-12 h-12 mx-2 rounded-lg flex">
                    <img className="p-3 mx-auto" src={logoTwitter} alt="" />
                </div>
            </div>
        </div>
    );
}
