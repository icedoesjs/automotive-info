"use client";
import styles from '../styles/components/nav.module.css';
import { useSession } from 'next-auth/react';

export default function Nav() {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <>
                <nav className="navbar navbar-expand navbar-light bg-transparent p-3 center-mobile">
                    <div className="container-fluid">
                        <a className={styles.brand} href="/">Automotive Info</a>

                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a className={styles.plink} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={styles.plink} href="/decode">Decoder</a>
                            </li>
                            <li className="nav-item">
                                <a className={styles.plink} href="/codes">Codes</a>
                            </li>
                            <li className="nav-item">
                                <a className={styles.plink} href="/search">Search</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                            <li>
                                <a className="nav-link mx-2 p-link fw-bold" href="/garage">Garage</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }

    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-transparent p-3 center-mobile">
                <div className="container-fluid">
                    <a className="navbar-brand brand" href="#">Automotive Info</a>

                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link mx-2 p-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 p-link" href="/decode">Decoder</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 p-link" href="/codes">Codes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 p-link" href="/search">Search</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
