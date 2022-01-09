import '../styles/globals.css';
import { NavbarContextWrapper } from '../context/navbarContext';
import { InputContextWrapper } from '../context/inputContext';
import { AuthContextWrapper } from '../context/authContext';
function MyApp({ Component, pageProps }) {
    return (
        <AuthContextWrapper>
            <NavbarContextWrapper>
                <InputContextWrapper>
                    <Component {...pageProps} />
                </InputContextWrapper>
            </NavbarContextWrapper>
        </AuthContextWrapper>
    );
}

export default MyApp;
