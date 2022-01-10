import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import HamburgerComponent from '../hamburgerComponent/hamburgerComponent';
import { AuthContext } from '../../context/authContext';

export default function HeaderComponent({
    handler,
    firstHeader,
    secondHeader,
}) {
    const { isLogin, user, logOut } = useContext(AuthContext);
    console.log('isLogin?? ' + isLogin);
    return (
        <div className="w-full flex flex-wrap shadow-md  relative">
            {/* FIRST HEADER */}
            <div
                className={`py-3 ${firstHeader} lg:px-44 px-10 flex justify-center lg:justify-end gap-6 lg:gap-8 z-0  bg-grey-200 w-full`}
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
            <div className=" py-3 lg:px-44 px-10 flex w-full justify-between items-center">
                <div className="cursor-pointer">
                    <Link passHref href="/">
                        <Image
                            src="/img/img-brand-logo.png"
                            alt="Logo"
                            width="100"
                            height="51"
                        />
                    </Link>
                </div>
                <div className={` hidden gap-x-8 items-center ${secondHeader}`}>
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
                        {isLogin ? (
                            <Image
                                src="/img/img-icon-note.svg"
                                width="30"
                                height="34"
                                alt="note"
                            />
                        ) : (
                            <div className="py-2 px-6 rounded-sm cursor-pointer bg-whiteBlue">
                                <Link passHref href="/login">
                                    <p className="text-blue-100 text-subTitle font-medium">
                                        Masuk
                                    </p>
                                </Link>
                            </div>
                        )}
                        {isLogin ? (
                            <div className="border border-grey-300 rounded-sm py-px px-3 gap-x-3  flex items-center justify-between">
                                <Image
                                    src="/img/img-icon-user.svg"
                                    width="30"
                                    height="34"
                                    alt="user"
                                />
                                <p className="text-subTitle text-grey-400 font-medium">
                                    {user}
                                </p>
                            </div>
                        ) : (
                            <button className="py-2 px-6 rounded-sm bg-blue-100">
                                <Link passHref href="/register">
                                    <p className="text-white text-subTitle font-medium">
                                        Daftar
                                    </p>
                                </Link>
                            </button>
                        )}
                        {isLogin && (
                            <button
                                onClick={logOut}
                                className="text-center p-2 h-fit bg-green-400 w-32"
                            >
                                <p className="text-subTitle font-medium text-white">
                                    Sign Out
                                </p>
                            </button>
                        )}
                    </div>
                </div>
                <div className="md:hidden block">
                    <HamburgerComponent toggle={handler} />
                </div>
            </div>
        </div>
    );
}
