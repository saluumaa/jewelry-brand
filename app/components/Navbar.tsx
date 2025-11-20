// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // icons

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="flex justify-between md:justify-around items-center flex-4 px-8 py-4 shadow-md sticky top-0 z-50">
//             {/* Logo */}
//             <div className="text-2xl font-bold text-yellow-400 tracking-wide">
//                 <Link href="/">✨ Jagsan</Link>
//             </div>

//             {/* Desktop Menu */}
//             <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
//                 <li className="hover:text-yellow-500 transition"><Link href="/">Home</Link></li>
//                 <li className="hover:text-yellow-500 transition"><Link href="/products">Shop</Link></li>
//                 <li className="hover:text-yellow-500 transition"><Link href="/about">About</Link></li>
//                 <li className="hover:text-yellow-500 transition"><Link href="/contact">Contact</Link></li>
//             </ul>

//             {/* Mobile Button */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-lg font-medium">
//                     <li className="hover:text-yellow-500 transition"><Link href="/">Home</Link></li>
//                     <li className="hover:text-yellow-500 transition"><Link href="/products">Shop</Link></li>
//                     <li className="hover:text-yellow-500 transition"><Link href="/about">About</Link></li>
//                     <li className="hover:text-yellow-500 transition"><Link href="/contact">Contact</Link></li>
//                 </ul>
//             )}
//         </nav>
//     );
// }

"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-serif text-gold tracking-wide">✨ Jagsan</Link>

                <nav className="hidden md:flex gap-8 items-center text-gray-800  font-medium">
                    <Link href="/" className="hover:text-[#FFD700] transition">Home</Link>
                    <Link href="/category" className="hover:text-[#FFD700] transition">Shop</Link>
                    <Link href="/contact" className="hover:text-[#FFD700] transition">Contact</Link>
                </nav>

                <button onClick={() => setOpen(!open)} className="md:hidden p-2">
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white shadow">
                    <div className="flex flex-col px-6 py-4 gap-3">
                        <Link href="/">Home</Link>
                        <Link href="/categories">Shop</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            )}
        </header>
    );
}

