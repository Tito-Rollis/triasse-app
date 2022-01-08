import Image from 'next/image';
export default function Card2Component({ title }) {
    return (
        <div className="w-72   rounded-md overflow-hidden">
            {/* CARD IMAGE */}
            <div className="w-full h-40 bg-blue-100 relative overflow-hidden">
                <Image
                    src="/img/img-post-1.jpg"
                    objectFit="fill"
                    alt="img"
                    layout="fill"
                />
            </div>
            {/* CARD CONTENT */}
            <div className=" mt-4  flex flex-col gap-y-4">
                <h1 className="text-title text-blue-200 font-semibold leading-4">
                    {title}
                </h1>
                <p className="text-subTitle text-grey-400 leading-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda nisi molestiae dolor praesentium iure recusandae
                    eos. Voluptatibus illum esse nihil.
                </p>
            </div>
        </div>
    );
}
