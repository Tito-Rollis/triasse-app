import Image from 'next/image';
export default function CardComponent({ title, text, price, discount }) {
    return (
        <div>
            {/* CARD */}
            <div className="w-40 shadow-md h-60 flex-1 rounded-md overflow-hidden">
                {/* CARD IMAGE */}
                <div className="w-full h-24 bg-blue-100 relative overflow-hidden">
                    <Image
                        src="/img/img-content-1.jpg"
                        width={160}
                        height={100}
                        alt="Example"
                        layout="responsive"
                    />
                </div>
                {/* CARD CONTENT */}
                <div className="mx-2 mt-2  flex flex-col gap-y-2">
                    <h1 className="text-pLarge text-blue-200 font-medium leading-4">
                        {title}
                    </h1>
                    <p className="text-p text-grey-400">{text}</p>
                    <p className="text-p text-grey-400 line-through">{price}</p>
                    <p className="text-subTitle font-medium text-blue-100">
                        {discount}
                    </p>
                </div>
            </div>
        </div>
    );
}
