import '../styles/globals.css';
import { NavbarContextWrapper } from '../context/navbarContext';
import { InputContextWrapper } from '../context/inputContext';
function MyApp({ Component, pageProps }) {
    return (
        <NavbarContextWrapper>
            <InputContextWrapper>
                <Component {...pageProps} />
            </InputContextWrapper>
        </NavbarContextWrapper>
    );
}

export default MyApp;
