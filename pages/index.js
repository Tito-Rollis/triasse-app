import Head from 'next/head';
import Image from 'next/image';
import LayoutComponent from '../components/layoutComponent/layoutComponent';
import HeaderComponent from '../components/headerComponent/headerComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <LayoutComponent>
            <HeaderComponent />
        </LayoutComponent>
    );
}
