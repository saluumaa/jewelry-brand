"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const cats = [
    { title: "Necklaces", slug: "necklaces", img: "/assets/necklaces/necklace1.png" },
    { title: "Rings", slug: "rings", img: "/assets/rings/ring1.png" },
    { title: "Earrings", slug: "earrings", img: "/assets/earings/earing1.png" },
    { title: "Bracelets", slug: "bracelets", img: "/assets/bracelets/bracelet1.png" },
];

export default function Categories() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Choose Your Favorites</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {cats.map((c, idx) => (
                        <Link href={`/category/${c.slug}`} key={idx}>
                            <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-xl overflow-hidden cursor-pointer">
                                <img src={c.img} alt={c.title} className="w-full h-56 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end">
                                    <div className="p-6 text-white">
                                        <h4 className="text-xl font-semibold">{c.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
