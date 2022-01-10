import Image from 'next/image';
import { InputContext } from '../../context/inputContext';
import { useContext } from 'react';
export default function ItemModalComponent({
    children,
    pick,
    flex,
    size,
    color,
    title,
    align,
}) {
    const { addPacket } = useContext(InputContext);
    const add = () => addPacket(pick);
    return (
        <div className="flex py-3 justify-between  lg:justify-start items-center  border-b border-b-grey-300">
            <div className={`flex ${flex} flex-1 ${align}`}>
                {children}
                <h1 className={`${size} ml-2 mr-8 font-bold ${color}`}>
                    {title}
                </h1>
            </div>
            <div
                onClick={add}
                className="lg:mr-14 flex cursor-pointer items-center"
            >
                <Image
                    src="/img/plus.svg"
                    width="21"
                    height="21"
                    layout="fixed"
                    alt="logo"
                />
            </div>
        </div>
    );
}
