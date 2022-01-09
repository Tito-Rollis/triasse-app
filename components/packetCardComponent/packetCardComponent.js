import Image from 'next/image';

export default function PacketCardComponent() {
    return (
        <div className="flex mx-auto rounded-lg shadow-md h-40 w-fit bg-white overflow-hidden">
            <div className="relative w-28 h-full">
                <Image
                    src="/img/img-search-post-1.png"
                    layout="fill"
                    objectFit="cover"
                    alt="packet"
                />
            </div>
            <div className="border-r h-full border-r-grey-300 pl-6 py-4 pr-8 flex flex-col justify-between">
                <div className="flex gap-x-4">
                    <div className="rounded-full py-px px-2 bg-green-400">
                        <p className="text-p font-medium text-white">
                            DATANG KE LAB
                        </p>
                    </div>
                    <div className="rounded-full py-px px-2 bg-blue-100">
                        <p className="text-p font-medium text-white">
                            HOME SERVICE
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-subTitle font-bold">Parahita Buncit</h1>
                    <p className="text-grey-400 text-pLarge">
                        Jl. Warung Buncit Raya 150 Jakarta Selatan
                    </p>
                </div>
                <div className="flex gap-x-4">
                    <div className="flex items-center gap-x-1">
                        <Image
                            src="/img/img-star-yellow.svg"
                            width="14"
                            height="14"
                            alt="Star"
                        />
                        <p className="text-grey-400 font-bold text-p">4.8/5</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                        <p className="text-grey-400  text-p">
                            Tidak bisa reschedule
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                        <p className="text-grey-400  text-p">
                            Tidak bisa refund
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center p-6">
                <div className="p-1 bg-pink-100">
                    <p className="font-bold text-p text-pink-200">Hemat 20%</p>
                </div>
                <p className="font-medium line-through text-pLarge text-grey-300">
                    Rp370.500
                </p>
                <p className="font-bold line-through text-titleLarge text-orange">
                    Rp250.578
                </p>
            </div>
        </div>
    );
}
