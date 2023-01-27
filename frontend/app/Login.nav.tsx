"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginNav() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
            <a className="nav-link mx-2 p-link" href="#" onClick={() => signOut()}>Logout</a>
            </>
        )
    } else {
        return (
            <>
            <a className="nav-link mx-2 p-link" href="#" onClick={() => signIn()}>Login</a>
            </>
        )
    }
}