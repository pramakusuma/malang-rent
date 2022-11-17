import car from "../image/car.png";
import logo from "../image/logo.png";

export default function Login() {
    return (
        <div className="bg-[#895BB3] lg:w-screen w-100 h-screen lg:px-52 lg:py-40 p-10">
            <div className="lg:w-100 h-auto  bg-white flex lg:flex-row justify-center flex-col">
                <div className="flex flex-col bg-white w-full py-5 lg:px-20 px-10">
                    <img className="w-1/6" src={logo} alt="" />
                    <h1 className="font-black text-2xl text-left my-5">
                        Login
                    </h1>
                    <form action="/" method="">
                        <div className="flex justify-start flex-col my-3">
                            <p className="text-left">Username :</p>
                            <input
                                className="border-2 lg:w-80 border-black rounded-md"
                                required
                                type="text"
                                name="username"
                                id=""
                            />
                        </div>
                        <div className="flex justify-start flex-col my-3">
                            <p className=" text-left">Password :</p>
                            <input
                                className="border-2 lg:w-80 border-black rounded-md"
                                required
                                type="password"
                                name="password"
                                id=""
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex justify-center flex-col lg:w-80 w-full font-semibold text-center mt-10 bg-[#480869] border text-white border-[#480869] hover:bg-transparent hover:text-[#480869] hover:border-[#480869] py-1  rounded-md"
                        >
                            <p className="w-full text-center">LOGIN</p>
                        </button>
                    </form>

                    <div className="flex lg:w-80 justify-center text-sm mt-5 text-center">
                        <p>Belum punya akun? </p>
                        <a className="mx-1 text-[#480869]" href="">
                            <p className="text-center">Register</p>
                        </a>
                    </div>
                    <a className="flex lg:w-80 text-sm text-[#480869]" href="">
                        <p className="text-center mx-auto">Lupa Password?</p>
                    </a>
                </div>
                <div className="bg-[#F4F6F5] lg:w-full w-0">
                    <img className="mx-auto" src={car} alt="" />
                </div>
            </div>
            <div className="flex justify-center my-36">
                <p className="text-center text-white font-semibold">
                    Copyright Malang Rent
                </p>
            </div>
        </div>
    );
}
