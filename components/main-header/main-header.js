import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png'

import style from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";


export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground />
    <header className={style.header}>
        <Link className={style.logo} href="/">
            <Image src={logoImg} alt="A plate with food on it" priority />
            Nextlevel Food
        </Link>

        <nav className={style.nav}>
            <ul>
                <li><Link href="/meals">BrowseMeals</Link></li>
                <li><Link href="/community">Foodies Community</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
