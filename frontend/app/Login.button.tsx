"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn(props: any) {
    var type = props.style
    const { data: session } = useSession();

    if (session) {
        if (type == "colored") {
            return (
                <>
                <button type="button" className="btn btn-sign btn-sm" onClick={() => signOut()}><span className="bi bi-google"></span>&nbsp;Logout from Google</button>
                </>
            )
        } else {
            return (
                <>
                <button type="button" className="btn btn-signup" onClick={() => signOut()}><span className="bi bi-google"></span>&nbsp;Logout from Google</button>
                </>
            )
        }

    } else {
        if (type == "colored") {
            return (
                <>
                <button type="button" className="btn btn-sign btn-sm" onClick={() => signIn()}><span className="bi bi-google"></span>&nbsp;Login with Google</button>
                </>
            )
        } else {
            return (
                <>
                <button type="button" className="btn btn-signup" onClick={() => signIn()}><span className="bi bi-google"></span>&nbsp;Login with Google</button>
                </>
            )
        }

    }
}