import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import AuthComponent from '../components/authComponent/authComponent';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
export default function Login() {
    const { login, googleSSO, facebookSSO } = useContext(AuthContext);
    return (
        <LayoutComponent>
            <HeaderComponent firstHeader="hidden" secondHeader="" />
            <div className="w-full h-screen bg-grey-300 flex justify-center items-center">
                <AuthComponent
                    title="Masuk"
                    text="Belum punya akun? "
                    type="Daftar"
                    placeholder="Nomor Telepon/Username/Email"
                    buttonText="Masuk"
                    flex="flex"
                    toc="hidden"
                    or="atau masuk dengan"
                    link="/register"
                    login={login}
                    googleSign={googleSSO}
                    facebookSign={facebookSSO}
                />
            </div>
        </LayoutComponent>
    );
}
