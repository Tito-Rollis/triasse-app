import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import { NavbarContext } from '../context/navbarContext';
import OverlayComponent from '../components/overlayComponent/overlayComponent';
import InputFindLabComponent from '../components/inputFindLabComponent/inputFindLabComponent';
import styles from '../styles/Home.module.css';

const DATA = [
    {
        title: 'Jaminan harga terbaik',
        text: 'Harga kompetitif di Laboratorium terbesar dan terpecaya di Indonesia seperti Prodia, Kimia Farma, Parahita, GS Lab & Biotest.',
    },
    {
        title: 'Layanan homoe service',
        text: 'Pemeriksaan bisa dilakukan di rumah sendiri dengan layanan Home Service, petugas datang untuk melakukan pengecekan dan tes.',
    },
    {
        title: 'Cicilan 4x dengan bunga 0%',
        text: 'Pembayaran paket pemeriksaan lebih ringan karena bisa dicicil sebanyak empat kali, dan tanpa bunga tambahan.',
    },
    {
        title: 'Pesan dan hasil online',
        text: 'Pesan dan hasil pemeriksaan bisa dilakukan secara online, proses lebih cepat tanpa perlu antri di lab.',
    },
];

export default function Home() {
    let { val } = useContext(NavbarContext);
    const [flex, setFlex] = useState('hidden');

    useEffect(() => {
        val ? setFlex('flex') : setFlex('hidden');
    }, [val]);
    return (
        <LayoutComponent>
            <div className="h-screen">
                <OverlayComponent display={flex} />
                <HeaderComponent />
                <div className="w-screen relative ">
                    <div className="overflow-hidden w-full">
                        <Image
                            src="/img/img-big-banner.jpg"
                            width={1366}
                            height={331}
                            alt="banner"
                        />
                    </div>
                    <div className="absolute flex flex-col left-10 right-10 top-3/4  shadow-lg ">
                        {/* 1st HEADER */}
                        <div className="w-full bg-whiteBlue px-6 md:px-14 rounded-sm  grid grid-cols-2 grid-rows-2 md:grid-rows-1 ">
                            <div className="flex flex-col col-span-2 md:col-span-1  self-center py-2 gap-y-2">
                                <h1 className="text-title md:text-titleLarge font-bold text-blue-200">
                                    Pilih jenis pemeriksaan
                                </h1>
                                <p className="text-p text-blue-200">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div className=" md:w-1/2 w-full h-full relative col-span-2 md:col-span-1  justify-self-end">
                                <Image
                                    src="/img/img-doctor.svg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="doctor"
                                />
                            </div>
                        </div>
                        {/* 2nd HEADER */}
                        <div className="grid md:grid-cols-1 px-2 md:px-14 md:grid-rows-2 bg-white py-3 w-full">
                            <div className="flex flex-wrap gap-x-3">
                                <div className="flex-1">
                                    <p className="md:text-pLarge text-blue-200">
                                        Provinsi
                                    </p>
                                    <InputFindLabComponent
                                        display="flex"
                                        img="/img/img-icon-pin.svg"
                                        alt="pin"
                                        w="13.362"
                                        h="19.204"
                                        placeholder="Pilih provinsi"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="md:text-pLarge text-blue-200">
                                        Kota/Kabupaten
                                    </p>
                                    <InputFindLabComponent
                                        display="flex"
                                        img="/img/img-icon-pin-map.svg"
                                        alt="map"
                                        w="21.171"
                                        h="19.204"
                                        placeholder="Pilih kota/kabupaten"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="md:text-pLarge text-blue-200">
                                        Paket & jenis pemeriksaan
                                    </p>
                                    <InputFindLabComponent
                                        display="hidden"
                                        img="/img/img-icon-stetoscop.svg"
                                        alt="stetoscop"
                                        w="18.185"
                                        h="19.204"
                                        placeholder="Pilih paket atau jenis pemeriksaan"
                                    />
                                </div>
                            </div>
                            <button className="bg-orange md:justify-self-end h-9 self-center md:self-end py-2 px-9 ">
                                <p className="text-subTitle text-white">
                                    Cari lab
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTENT */}
            {/* WHY SECTION */}
            <div className="w-full bg-whiteBlue h-full py-16 lg:px-44 px-10">
                <h1 className="text-titleLarge text-blue-200 font-bold text-center ">
                    Mengapa harus Triasse?
                </h1>
                <p className="text-center text-blue-200 text-subTitle mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, similique.
                </p>
                <div className="w-full gap-x-6  grid  grid-cols-2 grid-rows-2 mt-14 gap-y-6 md:gap-y-0">
                    {/* LEFT SIDE */}
                    <div className="bg-grey-300 rounded-md col-span-2 row-span-1 md:col-span-1 md:row-span-2 "></div>
                    {/* RIGHT SIDE */}
                    <div className=" flex gap-y-6 flex-col col-span-2 md:col-span-1 md:row-span-2">
                        {DATA.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-1 gap-x-6"
                                >
                                    <div className=" bg-grey-300 rounded-md w-24 h-20"></div>
                                    <div className="flex flex-1 w-4/5 flex-col">
                                        <h1 className="text-subTitle font-medium text-blue-200">
                                            {data.title}
                                        </h1>
                                        <p className="text-pLarge text-blue-200 mt-2">
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* LOREM SECTION */}
            <div className="w-full py-16 lg:px-44 px-10">
                <h1 className="text-titleLarge text-blue-200 font-bold text-center ">
                    Lorem ipsum dolor sit amet
                </h1>
                <p className="text-center text-blue-200 text-subTitle mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, similique.
                </p>
                {/* CARDS */}
                <div>
                    <div className="w-40 h-60 bg-orange rounded-md">
                        <div className="w-full h-28 bg-blue-100 relative">
                            <Image
                                src="/img/img-example-big-2.png"
                                alt="Example"
                                layout="fill"
                                objectFit="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    );
}
