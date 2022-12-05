import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Persyaratan() {
    const [checked, setChecked] = useState(false);
    const { id } = useParams();
    const navigate = useHistory();
    const checkbox = () => {
        if (checked) {
            navigate.push("/pembayaran/" + id);
        }
    };
    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <>
            <Navbar />
            <div className="p-10">
                <div className="container w-100 h-auto my-40 mx-auto rounded-2xl lg:p-20 p-10 bg-[#F4F6F5]">
                    <div className="flex flex-col items-center p-5">
                        <div className="lg:w-full">
                            <h1 className="font-black text-4xl text-left mb-10">
                                PERSYARATAN
                            </h1>
                            <h1 className="font-normal lg:text-xl text-left mb-10">
                                1. Sistem penyewaan dilakukan sistem 24 jam.
                                Waktu 24 jam dihitung dari pengambilan mobil.{" "}
                                <br />
                                2. Penyewa menyerahkan salah satu identitas
                                pribadi (KTP, Paspor, SIM C/A). <br />
                                3. Jika mobil tidak dikembalikan pada waktunya,
                                maka akan dikenakan denda sebesar 50.000/jam.{" "}
                                <br />
                                4. Penyewa memberikan barang jaminan yaitu
                                sepeda motor, jika tidak memiliki motor, maka
                                wajib memberikan 2 kartu identitas. <br />
                                5. Penyewaan yang sudah dibayar, tidak dapat
                                dikembalikan. <br />
                                6. Penyewa wajib melakukan DP sebesar 50% dari
                                harga mobil
                            </h1>
                        </div>
                        <div className="flex flex-col lg:w-full">
                            <label className="lg:w-full text-left">
                                <input
                                    className="mr-4"
                                    type="checkbox"
                                    name="setuju"
                                    value={checked}
                                    onChange={handleChange}
                                    required
                                    id=""
                                />
                                Saya menyetujui persyaratan penyewaan
                            </label>
                            <button
                                onClick={checkbox}
                                className="border-2 border-[#895BB3] bg-[#895BB3] rounded-lg text-white font-semibold text-xl w-32 p-1 my-5 hover:bg-transparent hover:text-[#895BB3]"
                            >
                                SETUJU
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
