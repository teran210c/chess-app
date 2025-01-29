import React from 'react';
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const { data: session } = useSession();

    const handleScrollTop = () => {
        if (router.pathname !== '/') {
            router.push('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-0 flex items-center justify-between px-6 py-4 bg-gray-800 text-white z-50">
            {/* Logo */}
            <div className="text-2xl font-bold">
                <Link href="/">
                    <img
                        src="/chess-circle.png"
                        className="h-24"
                        alt="Flowbite Logo"
                    />
                </Link>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Links for Larger Screens */}
            <div className={`md:flex space-x-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                <Link href="/" className="block mt-2 md:mt-0 hover:text-gray-400" onClick={handleScrollTop}>Inicio</Link>
                <Link href="/about" className="block mt-2 md:mt-0 hover:text-gray-400">Acerca de</Link>
                <Link href="/contacto" className="block mt-2 md:mt-0 hover:text-gray-400">Contacto</Link>
            </div>

            {/* Login Button and User Info */}
            <div className="hidden md:block">
                {session ? (
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">Bienvenido, {session.user.name}!</p>
                        <button
                            onClick={() => signOut()}
                            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 hover:text-gray-300"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => signIn("google")}
                        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 hover:text-gray-300"
                    >
                        Iniciar sesión con Google
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;