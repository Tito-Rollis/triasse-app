import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import AuthComponent from '../components/authComponent/authComponent';
export default function Login() {
    return (
        <LayoutComponent>
            <HeaderComponent display="hidden" />
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
                />
            </div>
        </LayoutComponent>
    );
}
