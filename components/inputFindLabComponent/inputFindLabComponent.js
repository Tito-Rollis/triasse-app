import Image from 'next/image';
import { useContext } from 'react';
import { InputContext } from '../../context/inputContext';
export default function InputFindLabComponent({
    img,
    alt,
    placeholder,
    w,
    h,
    display,
    handler,
}) {
    const { show } = useContext(InputContext);

    return (
        <div className="border-grey-200 border-2 w-full my-2 flex items-center px-2 py-1">
            <Image src={img} alt={alt} width={w} height={h} />
            <button
                onClick={handler}
                className={`w-full ml-2 h-full border-0 `}
            >
                <p
                    className={`${
                        show ? 'text-subTitle' : 'text-pLarge'
                    } text ${
                        show ? 'text-blue-200' : 'text-grey-400'
                    }  text-left`}
                >
                    {placeholder}
                </p>
            </button>
            <div className={`${display}  items-center`}>
                <Image
                    src="/img/img-icon-bottom-small.svg"
                    width="11.121"
                    height="6.58"
                    alt="bottom"
                />
            </div>
        </div>
    );
}
