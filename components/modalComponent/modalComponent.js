import Image from 'next/image';
import { useContext } from 'react';
import { InputContext } from '../../context/inputContext';
import ItemModalComponent from './itemModalComponent';
export default function ModalComponent() {
    const { show } = useContext(InputContext);
    return (
        <div
            className={`absolute ${
                show ? 'block' : 'hidden'
            } h-auto left-0 right-0 px-3 overflow-scroll  rounded-md shadow-md bg-white -bottom-38 z-30`}
        >
            <ItemModalComponent
                title="Paket Skrining Diabetes Melitus"
                pick="Paket Skrining Diabetes Melitus"
                size="text-subTitle"
                color="text-blue-200"
                flex="flex-row"
                align="items-center"
            >
                <Image
                    src="/img/img-example-1.png"
                    width="34"
                    height="34"
                    alt="logo"
                />
            </ItemModalComponent>
            <ItemModalComponent
                title="Paket Skrining Penyakit Menular Seksual"
                pick="Paket Skrining Penyakit Menular Seksual"
                size="text-subTitle"
                color="text-blue-200"
                flex="flex-row"
                align="items-center"
            >
                <Image
                    src="/img/img-example-2.png"
                    width="48"
                    height="48"
                    alt="logo"
                />
            </ItemModalComponent>
            <ItemModalComponent
                title="Paket TORCH"
                pick="Paket TORCH"
                size="text-subTitle"
                color="text-blue-200"
                flex="flex-row"
                align="items-center"
            >
                <Image
                    src="/img/img-example-3.png"
                    width="32"
                    height="32"
                    alt="logo"
                />
            </ItemModalComponent>
            <ItemModalComponent
                title="Nama lain: Glukosa Puasa, Gula Darah Puasa, Glukosa
                Fasting"
                pick="Glukosa Puasa"
                size="text-subText"
                color="text-grey-400"
                flex="flex-col"
                align="items-start"
            >
                <h1 className="text-subTitle ml-2 mr-8 font-bold text-blue-200">
                    Glukosa Puasa&#42;
                </h1>
            </ItemModalComponent>
            <ItemModalComponent
                title="Nama lain: Glukosa Sewaktu, Gula Darah Sewaktu"
                pick="Glukosa Sewaktu"
                size="text-subText"
                color="text-grey-400"
                flex="flex-col"
                align="items-start"
            >
                <h1 className="text-subTitle ml-2 mr-8 font-bold text-blue-200">
                    Glukosa Sewaktu
                </h1>
            </ItemModalComponent>
            <ItemModalComponent
                title="Nama lain: Glukosa Urine"
                pick="Glukosa Urine"
                size="text-subText"
                color="text-grey-400"
                flex="flex-col"
                align="items-start"
            >
                <h1 className="text-subTitle ml-2 mr-8 font-bold text-blue-200">
                    Glukosa Urine
                </h1>
            </ItemModalComponent>
        </div>
    );
}
