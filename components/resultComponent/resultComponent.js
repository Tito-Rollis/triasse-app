import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { InputContext } from '../../context/inputContext';
export default function ResultComponent({ title }) {
    const { removePacket } = useContext(InputContext);
    const remove = () => {
        return removePacket(title);
    };
    return (
        <div className="border rounded-sm w-fit flex items-center justify-between p-3 h-10 bg-green-100 border-green-200">
            <h1 className="text-subTitle  text-green-300 mr-8">{title}</h1>
            <div onClick={remove} className="cursor-pointer">
                <Image
                    src="/img/close.svg"
                    width="16"
                    height="16"
                    alt="result"
                />
            </div>
        </div>
    );
}
