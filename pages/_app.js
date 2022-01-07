import '../styles/globals.css';
import { NavbarContextWrapper } from '../context/navbarContext';
function MyApp({ Component, pageProps }) {
    return (
        <NavbarContextWrapper>
            <Component {...pageProps} />
        </NavbarContextWrapper>
    );
}

export default MyApp;
