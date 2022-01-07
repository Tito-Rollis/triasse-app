import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import { NavbarContext } from '../context/navbarContext';
import OverlayComponent from '../components/overlayComponent/overlayComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
    let { val } = useContext(NavbarContext);
    const [flex, setFlex] = useState('hidden');

    useEffect(() => {
        val ? setFlex('flex') : setFlex('hidden');
    }, [val]);
    return (
        <LayoutComponent>
            <OverlayComponent display={flex} />
            <HeaderComponent />
        </LayoutComponent>
    );
}
