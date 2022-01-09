import Image from 'next/image';
import Link from 'next/link';
import HamburgerComponent from '../hamburgerComponent/hamburgerComponent';

export default function HeaderComponent({ handler, display }) {
    return (
        <div className="w-full flex flex-wrap shadow-md z-10 relative">
            {/* FIRST HEADER */}
            <div
                className={`py-3 ${display} lg:px-44 px-10 flex justify-center lg:justify-end gap-6 lg:gap-8  bg-grey-200 w-full`}
            >
                <div className="flex gap-1 items-center">
                    <Image
                        src="/img/img-calendar.svg"
                        alt="calendar"
                        width="15.833"
                        height="16.225"
                    />
                    <p className="lg:text-pLarge text-p text-grey-400">
                        Senin - Jumat &#40;09.00 - 18.00 WIB &#41;
                    </p>
                </div>
                <div className="flex gap-1 items-center">
                    <Image
                        src="/img/img-message.svg"
                        alt="message"
                        width="22.007"
                        height="15.656"
                    />
                    <p className="lg:text-pLarge text-p text-grey-400">
                        +62811 1122 015
                    </p>
                </div>
                <div className="flex gap-1 items-center">
                    <Image
                        src="/img/img-email.svg"
                        alt="message"
                        width="19.239"
                        height="13.158"
                    />
                    <p className="lg:text-pLarge text-p text-grey-400">
                        cs@triasse.com
                    </p>
                </div>
            </div>
            {/* SECOND HEADER */}
            <div className="py-3 lg:px-44 px-10 flex w-full justify-between items-center">
                <Image
                    src="/img/img-brand-logo.png"
                    alt="Logo"
                    width="100"
                    height="51"
                />
                <div className={` hidden gap-x-8 items-center md:${display}`}>
                    {/* LINK HEADER */}
                    <div className="flex gap-6">
                        <h1 className="text-subTitle font-medium text-blue-200">
                            Paket Test Darah
                        </h1>
                        <h1 className="text-subTitle font-medium text-blue-200">
                            Laboratorium
                        </h1>
                        <h1 className="text-subTitle font-medium text-blue-200">
                            Artikel
                        </h1>
                    </div>
                    {/* BUTTON HEADER */}
                    <div className="flex gap-x-5">
                        <div className="py-2 px-6 rounded-sm cursor-pointer bg-whiteBlue">
                            <Link passHref href="/login">
                                <p className="text-blue-100 text-subTitle font-medium">
                                    Masuk
                                </p>
                            </Link>
                        </div>
                        <button className="py-2 px-6 rounded-sm bg-blue-100">
                            <p className="text-white text-subTitle font-medium">
                                Daftar
                            </p>
                        </button>
                    </div>
                </div>
                <div className="md:hidden block">
                    <HamburgerComponent toggle={handler} />
                </div>
            </div>
        </div>
    );
}
