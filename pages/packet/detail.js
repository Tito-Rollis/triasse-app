import LayoutComponent from '../../components/layoutComponent/layoutComponent';
import HeaderComponent from '../../components/headerComponent/headerComponent';
import Image from 'next/image';
export default function PacketDetail() {
    return (
        <LayoutComponent>
            <HeaderComponent firstHeader="flex" secondHeader="md:flex" />
            <div className="w-full h-fit gap-y-6 bg-grey-200 flex flex-wrap flex-col items-center lg:items-start lg:flex-row md:justify-center py-6 gap-x-8">
                <div className=" w-3/5 rounded-md shadow-md overflow-hidden  bg-white">
                    <div className="relative w-full h-64">
                        <Image
                            src="/img/img-article-1.jpg"
                            layout="fill"
                            objectFit="cover"
                            alt="image"
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 px-6 py-8">
                        <h1 className="text-titleLarge text-blue-200 font-bold">
                            Paket Skrining Diabetes Melitus
                        </h1>
                        <p className="text-subTitle font-bold text-blue-200">
                            Informasi detil
                        </p>
                        <p className="text-pLarge text-grey-400">
                            Diabetes Melitus yang juga dikenal di Indonesia
                            dengan istilah penyakit kencing manis atau penyakit
                            gula. Tubuh pasien yang menderita diabetes melitus
                            tidak dapat memproduksi atau tidak dapat merespon
                            hormon insulin yang dihasilkan oleh organ pankreas,
                            sehingga kadar gula darah meningkat dan menyebabkan
                            komplikasi jangka pendek maupun jangka panjang.
                        </p>
                        <p className="text-pLarge text-grey-400">
                            DIabetes merupakan salah satu penyebab kematian
                            tertinggi di dunia, bahkan di Indonesia.
                        </p>
                        <p className="text-pLarge text-grey-400">
                            Paket Skrining Diabetes Melitus yang disediakan
                            Triasse terdiri dari tiga jenis tes, yaitu:
                        </p>
                        <p className="text-pLarge text-grey-400">
                            1. Glukosa Puasa: Pemeriksaan glukosa dalam darah
                            ini baru bisa dilakukan setelah Anda puasa selama
                            8-10 jam untuk mendapatkan hasil akurat. Pengecekan
                            glukosa ini dilakukan untuk mengetahui hipoglikemik
                            atau hiperglikemik untuk membanti memastikan
                            diagnosis diabetes atau untuk memantau kadar gula
                            diabetes. Tes glukosa puasa juga dapat membantu
                            mendiagnosis prediabetes.
                        </p>
                        <p className="text-pLarge text-grey-400">
                            2. HbA1c &#40;A1c&#41;: Tes hemoglobin terglikasi
                            &#40;HbA1c&#41; dapat membantu mengecek rata-rata
                            kadar gula darah Anda dalam periode 2-4 bulan. HbA1c
                            adalah gugus heterogen yang terbentuk dari reaksi
                            kimia antara hemoglobin dan glukosa. Pemeriksaan ini
                            perlu dilakukan saaat baru terdiagnosis DM, DM
                            berada pada kondisi harus tergantung pada insulin,
                            dan kondisi DM yang tidak tergantung insulin. Tes
                            ini juga diperlukan untuk mengendalikan kondisi DM
                            dan memperkecil risiko komplikasi diabetes.
                        </p>
                        <p className="text-pLarge text-grey-400">
                            3. Urine Lengkap/Rutin: Tes urine untuk pemeriksaan
                            diabetes adalah untuk mendeteksi glukosa lewat
                            urine.
                        </p>
                        <p className="text-subTitle font-bold text-blue-200">
                            Persiapan
                        </p>
                        <p className="text-pLarge text-grey-400">
                            Perlu Puasa 10 - 12 Jam
                        </p>
                    </div>
                </div>
                <div className="rounded-md shadow-md p-6 flex flex-col gap-y-4 h-fit bg-white w-72">
                    <h1 className="text-title text-blue-200 font-bold">
                        Paket Skrining Diabetes Melitus
                    </h1>
                    <div className="w-full h-px bg-grey-400"></div>
                    <div className="flex justify-start">
                        <div className="">
                            <Image
                                src="/img/img-hospital-example.jpg"
                                width="70"
                                height="70"
                                alt="hotel"
                            />
                        </div>
                        <div className="ml-2 flex-1">
                            <h1 className="font-bold text-subTitle">
                                Parahita Buncit
                            </h1>
                            <div className="flex items-center gap-x-2">
                                <Image
                                    src="/img/img-star-yellow.svg"
                                    width="10"
                                    height="10"
                                    alt="star"
                                />
                                <p className="text-grey-400 font-bold text-p">
                                    4.8
                                </p>
                            </div>
                            <p className="text-grey-400 text-medium text-p">
                                Jl. Warung Buncit Raya 150 Jakarta Selatan
                            </p>
                            <div className="flex items-center gap-x-2">
                                <Image
                                    src="/img/img-icon-pin-blue.svg"
                                    width="10"
                                    height="10"
                                    alt="pin"
                                />
                                <p className="text-blue-100 text-medium text-p">
                                    Lihat peta
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-px bg-grey-400"></div>
                    <div>
                        <div className="flex items-center gap-x-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <p className="text-grey-400  text-p font-medium">
                                Tidak bisa reschedule
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            <p className="text-grey-400 font-medium text-p">
                                Tidak bisa refund
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-px bg-grey-400"></div>
                    <div>
                        <div className="flex items-center gap-x-2 justify-center">
                            <div className="p-1 w-fit bg-pink-100">
                                <p className="font-bold text-p text-pink-200">
                                    Hemat 20%
                                </p>
                            </div>
                            <p className="font-medium line-through text-pLarge text-grey-400">
                                Rp270.500
                            </p>
                        </div>
                        <p className="font-bold text-title md:text-titleLarge text-center text-blue-100">
                            Rp150.578
                        </p>
                    </div>
                    <button className="w-full py-2 px-6 bg-orange text-white font-semibold text-center">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </LayoutComponent>
    );
}
