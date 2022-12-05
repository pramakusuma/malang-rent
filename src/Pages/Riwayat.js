import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useHistory } from "react-router-dom";
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

export default function Riwayat() {
    // const [activeOrder, setActiveOrder] = useState("");
    const [orders, loading, error] = useCollection(collection(db, "orders"), {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
    const navigate = useHistory();
    const bayar = (e) => {
        const activeOrder = e.currentTarget.id;
        // const updatedOrder = doc(db, "orders", activeOrder);
        // updateDoc(updatedOrder, {
        //     status: true,
        // });
        console.log(activeOrder);
        navigate.push("/persyaratan/" + activeOrder);
    };
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
                                {orders && (
                                    <>
                                        {orders.docs.map((doc) => (
                                            <tr
                                                key={doc.id}
                                                class="bg-white border-b   hover:bg-gray-50 "
                                            >
                                                <th
                                                    scope="row"
                                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                                                >
                                                    {doc.data().mobil}
                                                </th>
                                                <td class="py-4 px-6">
                                                    Rp. {doc.data().harga}
                                                </td>
                                                <td class="py-4 px-6">
                                                    {doc.data().ambil}
                                                </td>
                                                <td class="py-4 px-6">
                                                    {doc.data().kembali}
                                                </td>
                                                {!doc.data().status && (
                                                    <td class="py-4 px-6 text-center">
                                                        <a
                                                            id={doc.id}
                                                            onClick={bayar}
                                                            class="font-medium text-white bg-blue-600 rounded-2xl p-2 pl-4 pr-4 hover:underline"
                                                        >
                                                            Bayar
                                                        </a>
                                                    </td>
                                                )}
                                                {doc.data().status && (
                                                    <td class="py-4 px-6 text-center">
                                                        <p class="font-medium text-green-500 ">
                                                            Selesai
                                                        </p>
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
