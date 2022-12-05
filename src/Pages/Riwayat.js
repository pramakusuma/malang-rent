import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Riwayat() {
    return (
        <>
            <Navbar />
            <div className="p-10">
                <div className="container w-100 h-auto my-40 mx-auto rounded-2xl lg:p-20 p-10 bg-[#F4F6F5]">
                    <h1 className="font-black text-4xl text-left mb-10">
                        RIWAYAT
                    </h1>
                    <table className="border border-spacing-1 p-3 table-auto">
                        <thead className="border mb-5">
                            <tr>
                                <th className="p-5">Mobil</th>
                                <th className="p-5">Harga</th>
                                <th className="p-5">Pengambilan</th>
                                <th className="p-5">Pengembalian</th>
                                <th className="p-5">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Avanza</td>
                                <td>Rp. 200000</td>
                            </tr>
                            <tr>
                                <td>Alphard</td>
                                <td>Rp. 400000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
