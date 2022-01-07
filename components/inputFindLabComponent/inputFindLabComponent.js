import Image from 'next/image';
import style from './index.module.css';
export default function inputFindLabComponent({
    img,
    alt,
    placeholder,
    w,
    h,
    display,
}) {
    return (
        <div
            className={`border-grey-200 border-2 w-full my-2 flex items-center px-2 py-1 ${style.inputContainer}`}
        >
            <Image src={img} alt={alt} width={w} height={h} />
            <input
                className={`w-full ml-2 h-full border-0 `}
                type="text"
                placeholder={placeholder}
            />
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
