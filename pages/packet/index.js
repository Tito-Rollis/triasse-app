import Image from 'next/image';
import { useState, useEffect, useContext, useRef } from 'react';
import LayoutComponent from '../../components/layoutComponent/layoutComponent';
import HeaderComponent from '../../components/headerComponent/headerComponent';
import { NavbarContext } from '../../context/navbarContext';
import { InputContext } from '../../context/inputContext';
import HeaderModalComponent from '../../components/headerModalComponent/headerModalComponent';
import InputFindLabComponent from '../../components/inputFindLabComponent/inputFindLabComponent';
import ResultComponent from '../../components/resultComponent/resultComponent';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import ModalComponent from '../../components/modalComponent/modalComponent';
import PacketCardComponent from '../../components/packetCardComponent/packetCardComponent';

export default function Home() {
    const { val } = useContext(NavbarContext);
    const { toggle, show, packet } = useContext(InputContext);
    const [flex, setFlex] = useState('hidden');

    useEffect(() => {
        setGetPacket(packet);
        val ? setFlex('flex') : setFlex('hidden');
    }, [val, packet]);

    // FIND PACKET BUTTON
    const router = useRouter();
    const toPacketList = () => router.push('/packet');
    const [getPacket, setGetPacket] = useState([]);

    return (
        <LayoutComponent>
            <div className={`w-full`}>
                <HeaderModalComponent display={flex} />
                <HeaderComponent firstHeader="flex" secondHeader="md:flex" />
                {/* JUMBOTRON */}
                <div className="w-full relative ">
                    <div className={`h-56 w-full overflow-hidden hidden`}>
                        <Image
                            src="/img/img-big-banner.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="banner"
                        />
                    </div>
                    <div
                        className={`relative flex flex-col left-0right-0 top-3/4 border-b-2 border-blue-100`}
                    >
                        {/* 1st HEADER */}
                        <div
                            className={`px-44 rounded-sm  grid grid-cols-2 grid-rows-2 md:grid-rows-1 bg-whiteBlue`}
                        >
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
                                <div className="md:flex-1 w-full">
                                    <p className="md:text-pLarge text-blue-200">
                                        Provinsi
                                    </p>
                                    <InputFindLabComponent
                                        display="flex"
                                        img="/img/img-icon-pin.svg"
                                        alt="pin"
                                        w="13.362"
                                        h="19.204"
                                        placeholder={
                                            show
                                                ? 'DKI Jakarta'
                                                : 'Pilih provinsi'
                                        }
                                    />
                                </div>
                                <div className="md:flex-1 w-full">
                                    <p className="md:text-pLarge text-blue-200">
                                        Kota/Kabupaten
                                    </p>
                                    <InputFindLabComponent
                                        display="flex"
                                        img="/img/img-icon-pin-map.svg"
                                        alt="map"
                                        w="21.171"
                                        h="19.204"
                                        placeholder={
                                            show
                                                ? 'Jakarta Pusat'
                                                : 'Pilih kota/kabupaten'
                                        }
                                    />
                                </div>
                                <div
                                    className={`${styles.scroll} md:flex-1 w-full  relative`}
                                >
                                    <p className="md:text-pLarge text-blue-200">
                                        Paket & jenis pemeriksaan
                                    </p>
                                    <InputFindLabComponent
                                        display="hidden"
                                        img="/img/img-icon-stetoscop.svg"
                                        alt="stetoscop"
                                        w="18.185"
                                        h="19.204"
                                        handler={toggle}
                                        placeholder="Pilih paket atau jenis pemeriksaan"
                                    />
                                    {/* MODAL */}
                                    <ModalComponent />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                {getPacket &&
                                    getPacket.map((value, index) => (
                                        <ResultComponent
                                            key={index}
                                            title={value}
                                        />
                                    ))}
                                {getPacket.length >= 1 && (
                                    <div className="rounded-sm w-fit flex items-center justify-between p-3 h-10 bg-grey-300">
                                        <h1 className="text-subTitle text-center  text-grey-400">
                                            Hapus Semua
                                        </h1>
                                    </div>
                                )}
                                <button
                                    onClick={toPacketList}
                                    className="bg-orange col-span-2 md:col-start-2 md:col-end-3 md:justify-self-end h-9 self-center md:self-center py-2 px-9 "
                                >
                                    <p className="text-subTitle text-white">
                                        Cari lab
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PACKET CARDS */}
            <div
                className={`grid h-auto py-20 px-2 md:px-20   bg-whiteBlue gap-y-6  justify-items-center`}
            >
                <h1 className="text-title text-blue-300 font-bold justify-center col-span-2 md:justify-self-start md:col-span-1">
                    Filter hasil pencarian
                </h1>

                <div className="flex flex-col gap-y-6 row-start-2  col-start-1 col-end-3 md:col-start-1 md:col-end-2 justify-self-center md:justify-self-start">
                    <div className="rounded-lg shadow-md bg-white w-80 h-fit ">
                        <div className="border-b border-b-grey-400 p-6 flex flex-col gap-y-4">
                            <h1 className="text-subTitle text-blue-300 font-bold">
                                Harga
                            </h1>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex items-center gap-x-4">
                                    <div className="w-5 h-5 border-2 border-grey-300 rounded-sm"></div>
                                    <p className="text-grey-300 text-subTitle">
                                        Terendah -tertinggi
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div className="w-5 h-5 border-2 border-grey-300 rounded-sm"></div>
                                    <p className="text-grey-300 text-subTitle">
                                        Terendah -terendah
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col gap-y-4">
                            <h1 className="text-subTitle text-blue-300 font-bold">
                                Jenis layanan
                            </h1>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex items-center gap-x-4">
                                    <div className="w-5 h-5 border-2 border-grey-300 rounded-sm"></div>
                                    <p className="text-grey-300 text-subTitle">
                                        Home service
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div className="w-5 h-5 border-2 border-grey-300 rounded-sm"></div>
                                    <p className="text-grey-300 text-subTitle">
                                        Datang ke lab
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-y-8 row-start-3 md:row-start-2 md:col-start-2 md:col-end-3 ">
                    <PacketCardComponent />
                    <PacketCardComponent />
                    <PacketCardComponent />
                    <PacketCardComponent />
                    <PacketCardComponent />
                </div>
            </div>
        </LayoutComponent>
    );
}
