"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { SessionProvider } from 'next-auth/react';
import '../app/global.css';

export default function ProvidersWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>

            </head>
            <body>
                <SessionProvider>
                    {children} { }
                </SessionProvider>
            </body>
        </html>
    )
}
