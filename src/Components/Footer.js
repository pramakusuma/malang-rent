import logoFacebook from "../image/footer/facebook.png";
import logoIg from "../image/footer/ig.png";
import logoTwitter from "../image/footer/twitter.png";

const medsoslogo = [
    {
        logo: logoFacebook,
        link: "",
    },
    {
        logo: logoIg,
        link: "https://instagram.com/malang_rent",
    },
    {
        logo: logoTwitter,
        link: "",
    },
];

export default function Footer() {
    return (
        <div className="flex flex-col justify-center w-full h-60 p-10 bg-[#F1A93D]">
            <h1 className="font-black text-4xl text-center">MALANG RENT</h1>
            <p className="mt-10">Penyedia Rental Mobil di Malang Raya</p>
            <div className="mx-auto mt-5 flex flex-row">
                {medsoslogo.map((data, index) => (
                    <div key={index}>
                        <a href={data.link}>
                            <div className="bg-[#EE7A31] w-12 h-12 mx-2 rounded-lg flex">
                                <img
                                    className="p-3 mx-auto"
                                    src={data.logo}
                                    alt=""
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
