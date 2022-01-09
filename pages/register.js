import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import AuthComponent from '../components/authComponent/authComponent';
import { useState } from 'react';
export default function Register() {
    const [agreed, setAgreed] = useState(true);
    const isAgree = () => setAgreed(!agreed);
    return (
        <LayoutComponent>
            <HeaderComponent display="hidden" />
            <div className="w-full h-screen bg-grey-300 flex flex-col gap-y-4 justify-center items-center">
                <AuthComponent
                    title="Masuk"
                    text="Belum punya akun? "
                    type="Masuk"
                    placeholder="Nomor Telepon"
                    buttonText="Daftar"
                    flex="hidden"
                    toc="block"
                    or="atau daftar dengan"
                    link="/login"
                />
                <div className="flex gap-x-2 items-center">
                    {/* RADIO BUTTON */}
                    <div
                        onClick={isAgree}
                        className="w-4 h-4 rounded-full border border-grey-400 flex items-start justify-center cursor-pointer"
                    >
                        <div
                            className={`w-2 h-2 ${
                                agreed ? 'block' : 'hidden'
                            } self-center justify-self-center rounded-full bg-green-400`}
                        ></div>
                    </div>
                    <p className="text-pLarge">
                        Saya ingin mendapatkan penawaran eksklusif dan promosi
                        dari Triasse
                    </p>
                </div>
            </div>
        </LayoutComponent>
    );
}
