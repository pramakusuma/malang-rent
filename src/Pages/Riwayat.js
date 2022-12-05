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

                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-black uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Mobil
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Harga
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Pengambilan
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Pengembalian
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b   hover:bg-gray-50 ">
                                    <th
                                        scope="row"
                                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        Alphard
                                    </th>
                                    <td class="py-4 px-6">Rp. 400000</td>
                                    <td class="py-4 px-6">5/12/2022</td>
                                    <td class="py-4 px-6">7/12/2022</td>
                                    <td class="py-4 px-6 text-right">
                                        <a
                                            href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b   hover:bg-gray-50 ">
                                    <th
                                        scope="row"
                                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        Avanza
                                    </th>
                                    <td class="py-4 px-6">Rp. 300000</td>
                                    <td class="py-4 px-6">5/12/2022</td>
                                    <td class="py-4 px-6">7/12/2022</td>
                                    <td class="py-4 px-6 text-right">
                                        <a
                                            href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <table className="border border-spacing-1 p-3 table-auto">
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
                    </table> */}
                </div>
            </div>
            <Footer />
        </>
    );
}
