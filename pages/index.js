import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import { NavbarContext } from '../context/navbarContext';
import OverlayComponent from '../components/overlayComponent/overlayComponent';
import InputFindLabComponent from '../components/inputFindLabComponent/inputFindLabComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
    let { val } = useContext(NavbarContext);
    const [flex, setFlex] = useState('hidden');

    useEffect(() => {
        val ? setFlex('flex') : setFlex('hidden');
    }, [val]);
    return (
        <LayoutComponent>
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
                <div className="absolute flex flex-col left-10 right-10 top-3/4 mx-20 shadow-lg ">
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
                            <p className="text-subTitle text-white">Cari lab</p>
                        </button>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    );
}
