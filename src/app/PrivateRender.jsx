'use client';
import { usePathname } from 'next/navigation';
import React from 'react'
import Sidenav from './layout/sidenav/Sidenav';

export default function PrivateRender({ children }) {
    const pathname = usePathname();
    console.log(pathname, 'pathname')
    const noSideNav = ['/login', '/signup'];
    const HideSideNav = noSideNav.includes(pathname);
    if (HideSideNav) {
        return <main className="mainContent">{children}</main>
    }
    return (
        <div className="mainContainer">
            <Sidenav />
            <main className="mainContent">{children}</main>
        </div>

    )
}
