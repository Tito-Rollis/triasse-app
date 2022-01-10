import Image from 'next/image';
import { useState, useEffect, useContext, useRef } from 'react';
import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import { NavbarContext } from '../context/navbarContext';
import { InputContext } from '../context/inputContext';
import HeaderModalComponent from '../components/headerModalComponent/headerModalComponent';
import InputFindLabComponent from '../components/inputFindLabComponent/inputFindLabComponent';
import CardComponent from '../components/cardComponent/cardComponent';
import Card2Component from '../components/cardComponent/card2Component';
import ResultComponent from '../components/resultComponent/resultComponent';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { DATA } from './api/dummy_data/dummy_data';
import ModalComponent from '../components/modalComponent/modalComponent';

export default function Home() {
    const WHY = DATA[0].why;
    const LOREM = DATA[1].lorem;
    const MITRA = DATA[2].mitra;
    const LOREM_2 = DATA[3].lorem_2;
    const MEDIA = DATA[4].media;
    const TEXT = DATA[5].text;
    const { val } = useContext(NavbarContext);
    const { toggle, show, packet, addPacket } = useContext(InputContext);
    const [flex, setFlex] = useState('hidden');

    useEffect(() => {
        val ? setFlex('flex') : setFlex('hidden');
    }, [val]);

    // FIND PACKET BUTTON
    const router = useRouter();
    const toPacketList = () => router.push('/packet');

    // PACKET
    let packetRef = useRef();
    const add = () => {
        addPacket(packetRef.current?.innerText);
        console.log(packetRef.current?.innerText);
    };

    return (
        <LayoutComponent>
            <div className={`w-full h-screen`}>
                <HeaderModalComponent display={flex} />
                <HeaderComponent firstHeader="flex" secondHeader="md:flex" />
                {/* JUMBOTRON */}
                <div className="w-full relative ">
                    <div className={`h-56 w-full overflow-hidden relative`}>
                        <Image
                            src="/img/img-big-banner.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="banner"
                        />
                    </div>
                    <div
                        className={`absolute flex flex-col left-10 right-10 top-3/4 shadow-lg`}
                    >
                        {/* 1st HEADER */}
                        <div
                            className={`w-full bg-whiteBlue px-6 md:px-14 rounded-sm  grid grid-cols-2 grid-rows-2 md:grid-rows-1`}
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
                                    <ModalComponent
                                        pick={packetRef}
                                        add={add}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                {packet &&
                                    packet.map(
                                        (value, index) =>
                                            Object.values(value)[0] ===
                                                packetRef.current
                                                    ?.innerText && (
                                                <ResultComponent
                                                    key={index}
                                                    title={
                                                        Object.values(value)[0]
                                                    }
                                                />
                                            )
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
            {/* CONTENT */}
            <div className={`block`}>
                {/* WHY SECTION */}
                <div className="w-full bg-whiteBlue h-full py-16 lg:px-44 px-10">
                    <h1 className="text-titleLarge text-blue-200 font-bold text-center ">
                        Mengapa harus Triasse?
                    </h1>
                    <p className="text-center text-blue-200 text-subTitle mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis, similique.
                    </p>
                    <div className="w-full gap-x-6  grid  grid-cols-2 grid-rows-2 mt-14 gap-y-6 md:gap-y-0">
                        {/* LEFT SIDE */}
                        <div className="bg-grey-300 rounded-md col-span-2 row-span-1 md:col-span-1 md:row-span-2 "></div>
                        {/* RIGHT SIDE */}
                        <div className=" flex gap-y-6 flex-col col-span-2 md:col-span-1 md:row-span-2">
                            {WHY.map((data, index) => {
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis, similique.
                    </p>
                    {/* CARDS */}
                    <div className="flex w-full justify-center md:justify-between flex-wrap gap-4  items-center mt-11">
                        {/* CARD */}
                        {LOREM.map((data, index) => {
                            return (
                                <CardComponent
                                    key={index}
                                    title={data.title}
                                    text={data.text}
                                    price={data.price}
                                    discount={data.discount}
                                />
                            );
                        })}
                    </div>
                    {/* BANNER */}
                    <div className="grid grid-cols-2 md:grid-rows-none grid-rows-2 gap-5 mt-10 ">
                        <div className="col-span-2 md:col-span-1">
                            <Image
                                src="/img/img-banner2-1.jpg"
                                width="564"
                                height="213"
                                alt="banner"
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1 md:justify-self-end">
                            <Image
                                src="/img/img-banner2-2.jpg"
                                width="564"
                                height="213"
                                alt="banner"
                            />
                        </div>
                    </div>
                </div>
                {/* MITRA SECTION*/}
                <div className="w-full bg-whiteBlue py-16 lg:px-44 px-10">
                    <h1 className="text-titleLarge text-blue-200 font-bold text-center ">
                        Mitra Laboratorium Terbaik di Indonesia
                    </h1>
                    <p className="text-center text-blue-200 text-subTitle mt-4">
                        Triassee tersedia di 44 cabang seluruh Indonesia, dengan
                        sebaran di 16 kota besar yang bisa dipesan secara{' '}
                        <span className="italic">online.</span>
                    </p>
                    {/* IMG */}
                    <div className="w-full flex justify-center lg:justify-between flex-wrap gap-x-4 gap-y-4  mt-16">
                        {MITRA.map((data, index) => {
                            return (
                                <div
                                    className="relative w-36 h-16 lg:w-48"
                                    key={index}
                                >
                                    <Image
                                        // width="163"
                                        // height="62"
                                        layout="fill"
                                        objectFit="contain"
                                        src={data.src}
                                        alt={`mitra ${index + 1}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* LOREM 2 SECTION*/}
                <div className="w-full  py-16  px-10">
                    <h1 className="text-titleLarge text-blue-200 font-bold text-center ">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p className="text-center text-blue-200 text-subTitle mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero placeat nihil aperiam reprehenderit.
                    </p>
                    {/* CARDS */}
                    <div className="flex w-full justify-center  flex-wrap gap-4  items-center mt-11">
                        {/* CARD */}
                        {LOREM_2.map((data, index) => {
                            return (
                                <Card2Component
                                    key={index}
                                    title={data.title}
                                />
                            );
                        })}
                    </div>
                </div>
                {/* MEDIA SECTION*/}
                <div
                    style={{ borderBottom: '1px solid black' }}
                    className="  pt-16 pb-36  mx-10  self-center"
                >
                    <h1 className="text-titleLarge text-blue-200 font-bold text-center">
                        Media Coverage
                    </h1>
                    {/* IMAGES */}
                    <div className="w-full flex justify-center gap-4 flex-wrap mt-12">
                        {/* IMAGE */}
                        {MEDIA.map((data, index) => {
                            return (
                                <div className="relative w-40 h-12" key={index}>
                                    <Image
                                        src={data.src}
                                        layout="fill"
                                        objectFit="contain"
                                        alt="media"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* TEXT SECTION*/}
                <div className="w-full gap-y-4 flex flex-col py-16 lg:px-44 px-10">
                    {TEXT.map((data, index) => {
                        return (
                            <div key={index} className="flex gap-y-1 flex-col">
                                <h1 className="text-subTitle text-blue-200 font-medium">
                                    {data.title}
                                </h1>
                                <p className="text-pLarge text-grey-400">
                                    {data.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </LayoutComponent>
    );
}
