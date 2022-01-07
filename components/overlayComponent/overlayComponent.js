export default function Overlay({ display }) {
    return (
        <>
            <ul
                className={`w-2/4 border-2 rounded-sm z-0 transition-all transform ${display} flex md:hidden flex-col justify-start absolute right-0 top-10 pb-6 bg-gray-700 h-96`}
            >
                <li className="h-full flex text-pLarge text-blue-200 font-medium  items-center pl-4  transition-all hover:bg-orange">
                    Paket Test Darah
                </li>
                <li className="h-full flex text-pLarge text-blue-200 font-medium  items-center pl-4 transition-all hover:bg-orange">
                    Laboratorium
                </li>
                <li className="h-full flex text-pLarge text-blue-200 font-medium  items-center pl-4 transition-all hover:bg-orange">
                    Price
                </li>
                <li className="h-full flex text-pLarge text-blue-200 font-medium  items-center pl-4 transition-all hover:bg-orange">
                    Artikel
                </li>
                <li className="mt-4 mx-auto">
                    <button className="py-2 px-6 rounded-sm bg-whiteBlue">
                        <p className="text-blue-100 font-medium">Masuk</p>
                    </button>
                </li>
                <li className="mt-4 mx-auto">
                    <button className="py-2 px-6 rounded-sm bg-blue-100">
                        <p className="text-white font-medium">Daftar</p>
                    </button>
                </li>
            </ul>
        </>
    );
}
