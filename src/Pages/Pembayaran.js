import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { auth, db, logout } from "../firebase.js";
import {
    query,
    collection,
    getDocs,
    where,
    doc,
    updateDoc,
} from "firebase/firestore";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Pembayaran() {
    const [file, setFile] = useState("");
    const { id } = useParams();
    const navigate = useHistory();
    const payment = () => {
        if (file == "") {
        } else {
            console.log(id);
            const updatedOrder = doc(db, "orders", id);
            updateDoc(updatedOrder, {
                status: true,
            });
            navigate.push("/");
            console.log(file);
        }
    };
    return (
        <>
            <Navbar />
            <div className="p-10">
                <div className="container w-100 h-auto my-40 mx-auto rounded-2xl lg:p-20 p-10 bg-[#F4F6F5]">
                    <div className="flex justify-between flex-col lg:flex-row align-middle items-center p-5">
                        <div className="lg:w-1/2">
                            <h1 className="font-black text-4xl text-left mb-10">
                                PEMBAYARAN
                            </h1>
                            <h1 className="font-black lg:text-2xl text-left mb-5">
                                Transfer pada nomor rekening berikut :
                            </h1>
                            <h1 className="font-normal lg:text-xl text-left mb-10">
                                BNI - 124141214 a.n MIFTAHUL IHSAN <br />
                                BCA - 070801023 a.n GEDE PRAMANANDA <br />
                                OVO - 082342432 a.n Pramananda
                            </h1>
                            <h1 className="font-black lg:text-2xl text-left mb-5">
                                Tata cara pembayaran :
                            </h1>
                            <h1 className="font-normal lg:text-xl text-left mb-10">
                                1. Transfer sesuai rekening bank yang tertera{" "}
                                <br />
                                2. Upload bukti pembayaran pada halaman ini{" "}
                                <br />
                                3. Pembayaran selesai
                            </h1>
                        </div>
                        <div className="lg:w-1/2">
                            {/* <input
                        type="file"
                        required
                        value=""
                        placeholder="Bukti Pembayaran"
                    /> */}
                            <div class="flex items-center justify-center w-full">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-[#895BB3] border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 "
                                >
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6 lg:pl-0 lg:pr-0 pl-6 pr-6">
                                        <svg
                                            aria-hidden="true"
                                            class="w-10 h-10 mb-3 text-[#895BB3]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            ></path>
                                        </svg>
                                        <p class="mb-2 text-sm text-[#895BB3] ">
                                            <span class="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p class="text-xs text-[#895BB3] ">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        class="hidden"
                                        value={file}
                                        onChange={(e) =>
                                            setFile(e.target.value)
                                        }
                                    />
                                </label>
                            </div>
                            <button
                                onClick={payment}
                                className="border-2 border-[#895BB3] bg-[#895BB3] rounded-lg text-white font-semibold text-xl w-32 p-1 my-5 hover:bg-transparent hover:text-[#895BB3]"
                            >
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
