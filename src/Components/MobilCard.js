export default function MobilCard({ nama, stok, foto }) {
    return (
        <div className="mr-10 mb-20">
            <div className="w-full h-auto rounded-3xl mb-5">
                <img className="object-fill rounded-3xl" src={foto} alt="" />
            </div>
            <h1 className="font-black lg:text-2xl text-left">{nama}</h1>
            <p className="font-semiold lg:text-xl text-left">Stok: {stok}</p>
        </div>
    );
}
