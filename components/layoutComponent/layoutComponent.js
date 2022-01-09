import style from './index.module.css';
import Image from 'next/image';
export default function LayoutComponent({ children }) {
    return (
        <div className="w-full h-full  ">
            {children}
            {/* FOOTER */}
            <div className="w-full bg-blue-100 py-10 flex flex-col md:flex-row justify-center gap-y-4 gap-x-8 items-center">
                <h1 className="text-title text-white tracking-wider font-bold text-center">
                    Berlangganan newsletter spesial promo dan penawaran terbaik
                </h1>
                <div className="flex rounded-sm overflow-hidden">
                    <div
                        className={` ${style.inputContainer}  bg-white items-center  flex `}
                    >
                        <input
                            className="flex-1"
                            placeholder="Masukan email anda"
                            type="text"
                        />
                    </div>
                    <button className="bg-orange text-subTitle text-white flex-1  w-32 font-semibold text-center">
                        Berlanggangan
                    </button>
                </div>
            </div>
            <div className="w-full flex gap-y-8 lg:gap-y-0 flex-col items-center flex-wrap lg:grid lg:grid-cols-5 bg-blue-200 px-10 pt-6 pb-14">
                <div className="col-span-1 self-start">
                    <div className="flex flex-col items-center lg:items-start gap-y-4">
                        <div className="relative w-20 h-14  lg:justify-self-start">
                            <Image
                                src="/img/img-brand-logo-white.png"
                                layout="fill"
                                objectFit="contain"
                                alt="logo"
                            />
                        </div>
                        <p className="text-pLarge text-white text-center lg:text-left">
                            Platform pertama untuk tes laboratorium dan
                            pemeriksaan kesehatan di indonesia yang memberikan
                            pelanggan kemampuan untuk membuat keputusan yang
                            lebih baik bagi kesehatan mereka
                        </p>
                    </div>
                </div>
                <div className="col-start-2 col-end-3 justify-self-center">
                    <h1 className="text-title font-medium text-white">
                        Lainnya
                    </h1>
                    <div className="flex flex-col gap-y-2 mt-4 lg:mt-11">
                        <p className="text-white text-subTitle">
                            Syarat & Ketentuan
                        </p>
                        <p className="text-white text-subTitle">Karier</p>
                        <p className="text-white text-subTitle">
                            Kebijakan Privasi
                        </p>
                        <p className="text-white text-subTitle">Cara Kerja</p>
                        <p className="text-white text-subTitle">Login</p>
                    </div>
                </div>
                <div className="col-start-3 col-end-4 justify-self-center">
                    <h1 className="text-title font-medium text-white">
                        Hubungi kami
                    </h1>
                    <div className="flex flex-col gap-y-2 mt-4 lg:mt-11">
                        <p className="text-white text-subTitle">
                            cs@triasse.com
                        </p>
                        <p className="text-white text-subTitle">021-35760497</p>
                        <p className="text-white text-subTitle">
                            08-1111-22-015
                        </p>
                        <p className="text-white text-subTitle">
                            Senin - Jumat
                        </p>
                        <p className="text-white text-subTitle">
                            &#40;09.00 - 18.00 WIB&#41;
                        </p>
                    </div>
                </div>
                <div className="col-start-4 col-end-5 self-center lg:self-start justify-self-center">
                    <h1 className="text-title font-medium text-white text-center lg:text-left">
                        Alamat
                    </h1>
                    <div className="flex flex-col gap-y-2 mt-4 lg:mt-11 text-center lg:text-left">
                        <p className="text-white text-subTitle">
                            Gedung Perkantoran Madison Park,
                        </p>
                        <p className="text-white text-subTitle">
                            Lantai 6 Unit B. No. 02. Jl. Letjen S. Parman
                        </p>
                        <p className="text-white text-subTitle">
                            Kav 28, Jakarta 11470
                        </p>
                    </div>
                </div>
                <div className="col-start-5 col-end-6 self-center lg:self-start justify-self-center px-6">
                    <h1 className="text-title font-medium text-white text-center lg:text-left">
                        Media sosial
                    </h1>
                    <div className="flex justify-center lg:justify-start flex-row flex-wrap gap-8 mt-6 ">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/img/img-icon-facebook.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="logo"
                            />
                        </div>
                        <div className="relative w-10 h-10">
                            <Image
                                src="/img/img-icon-instagram.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="logo"
                            />
                        </div>
                        <div className="relative w-10 h-10">
                            <Image
                                src="/img/img-icon-linkedin.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="logo"
                            />
                        </div>
                        <div className="relative w-10 h-10">
                            <Image
                                src="/img/img-icon-pinteres.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="logo"
                            />
                        </div>
                        <div className="relative w-10 h-10">
                            <Image
                                src="/img/img-icon-twitter.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="logo"
                            />
                        </div>
                        <div className="relative w-10 h-10">
                            <Image
                                src="/img/img-icon-youtube.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  bg-blue-300 px-10 py-8 ">
                <p className="text-center text-white text-pLarge">
                    Copyright &#169; 2020 PT. Digital Medika Informatika. All
                    rights reserved.
                </p>
            </div>
        </div>
    );
}
