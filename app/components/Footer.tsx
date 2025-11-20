import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gold">✨ Jagsan</h2>
                    <p className="text-gray-400 mt-2">Timeless jewelry crafted with love and elegance.</p>
                </div>

                <nav>
                    <h4 className="text-gold font-semibold">Quick Links</h4>
                    <ul className="mt-3 space-y-2 text-gray-300">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Shop</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </nav>

                <div>
                    <h4 className="text-gold font-semibold">Get in Touch</h4>
                    <div className="flex gap-3 mt-3 text-gray-200">
                        <a aria-label="facebook"><Facebook /></a>
                        <a aria-label="instagram"><Instagram /></a>
                        <a aria-label="twitter"><Twitter /></a>
                    </div>
                </div>
            </div>

            <p className="text-center text-amber-100 mt-8 text-sm">© {new Date().getFullYear()} Aurora. All rights reserved.</p>
        </footer>
    );
}
