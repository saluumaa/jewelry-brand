"use client";

import { motion } from "framer-motion";

const trendingItems = [
    {
        name: "Gold-Plated Necklace",
        price: "$15",
        image: "assets/necklace.png",
    },
    {
        name: "Elegant Earrings",
        price: "$10",
        image: "assets/earings1.png",
    },
    {
        name: "Classic Bracelet",
        price: "$20",
        image: "assets/bracelet1.png",
    },
    {
        name: "Stainless Steel Ring",
        price: "$10",
        image: "assets/ring.png"
    },
];

export default function Trending() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-12">
                    <h3 className="text-sm italic text-yellow-500 opacity-50 font-semibold mb-2">
                        Trending
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gold">
                        ✨ Best Selling Items
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Discover our best-selling jewelry pieces loved by our customers.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {trendingItems.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-gold text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
                                    Best Seller
                                </span>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {item.name}
                                </h3>
                                <p className="text-gold font-bold mt-2">{item.price}</p>
                                <button className="mt-4 px-5 py-2 bg-gold text-black bg-yellow-500 rounded-md font-medium hover:bg-yellow-700 transition">
                                    <span className="mr-2">🛒</span>
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
