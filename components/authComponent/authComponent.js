import Link from 'next/link';
import style from './index.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';
export default function AuthComponent({
    title,
    text,
    type,
    placeholder,
    buttonText,
    flex,
    toc,
    or,
    link,
    login,
    googleSign,
    facebookSign,
}) {
    const [peeking, setPeeking] = useState(false);
    const peek = () => setPeeking(!peeking);
    const loginHandler = () =>
        login(emailRef.current.value, passRef.current.value);
    let emailRef = useRef();
    let passRef = useRef();
    return (
        <div className="w-4/5 md:w-2/5  shadow-md  flex flex-col gap-y-5 bg-white p-6 rounded-md">
            <div className="flex flex-wrap justify-center items-center md:justify-between">
                <h1 className="font-bold text-title">{title}</h1>
                <p className="text-pLarge">
                    {text}{' '}
                    <Link passHref href={link}>
                        <span className="text-blue-100 cursor-pointer">
                            {type}
                        </span>
                    </Link>
                </p>
            </div>
            {/* INPUT */}
            <div
                className={`${style.inputContainer} w-full h-10 border flex rounded-sm`}
            >
                <input
                    ref={emailRef}
                    className="flex-1 pl-4"
                    placeholder={placeholder}
                    type="text"
                />
            </div>
            <div
                className={`${style.inputContainer}  w-full h-10 border ${flex} justify-between pr-4 rounded-sm`}
            >
                <input
                    ref={passRef}
                    className="flex-1 pl-4 "
                    placeholder="Password"
                    type={peeking ? 'text' : 'password'}
                />
                <button onClick={peek} className="flex items-center">
                    <Image
                        src={
                            peeking ? '/img/img-eye-on.svg' : '/img/img-eye.svg'
                        }
                        width="18"
                        height="16"
                        alt="eye"
                    />
                </button>
            </div>
            {/* BUTTON */}
            <div
                onClick={loginHandler}
                className={`w-full h-10 bg-orange flex items-start justify-center rounded-sm cursor-pointer`}
            >
                <Link passHref href="/">
                    <h1 className="text-white font-medium self-center">
                        {buttonText}
                    </h1>
                </Link>
            </div>
            {/* FORGOT */}
            <div
                className={`${flex} flex-wrap gap-y-4 items-center justify-center md:justify-between`}
            >
                <p className="text-pLarge text-blue-100">Lupa password</p>
                <p className="text-pLarge text-blue-100">Masuk dengan SMS</p>
            </div>
            {/* OR */}
            <div className="flex items-center">
                <div className="h-px flex-1 bg-grey-300"></div>
                <p className="text-subTitle flex-2 text-grey-300 mx-8">{or}</p>
                <div className="h-px  flex-1 bg-grey-300"></div>
            </div>
            {/* OPTION */}
            <div className="flex flex-wrap gap-y-4 gap-x-6">
                <div
                    onClick={facebookSign}
                    className="bg-blue-200 flex items-center justify-between p-2 flex-1 cursor-pointer"
                >
                    <Image src="/img/fb.svg" width="24" height="24" alt="" fb />
                    <p className="text-white font-medium">Facebook</p>
                    <div className="w-6"></div>
                </div>
                <div
                    onClick={googleSign}
                    className="bg-white border border-blue-300 flex items-center justify-between p-2 flex-1 cursor-pointer"
                >
                    <Image
                        src="/img/img-google.png"
                        width="24"
                        height="24"
                        alt=""
                        fb
                    />
                    <p className="text-blue-300 font-medium">Google</p>
                    <div className="w-6"></div>
                </div>
            </div>
            {/* TOC */}
            <p className={`text-pLarge text-center ${toc}`}>
                Dengan mendaftar,{' '}
                <span className="text-blue-100">
                    Saya setuju dengan Syarat, Ketentuan dan Kebijakan dari
                    Triasse, & Kebijakan Privasi
                </span>
            </p>
        </div>
    );
}
