"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // App router uses this
import { Product, products } from "../data/products";

import { motion } from "framer-motion";

export default function SetsPage() {
    const router = useRouter();

    const [selectedType, setSelectedType] = useState<string>("all");
    const [maxPrice, setMaxPrice] = useState<number>(200);

    // Apply filters
    const filteredProducts = products.filter((product: Product) => {
        const matchesType = selectedType === "all" || product.category === selectedType;
        const matchesPrice = Number(product.price) <= maxPrice;
        return matchesType && matchesPrice;
    });

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Our Exclusive Sets</h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <select
                    className="border p-2 rounded-lg"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="all">All Types</option>
                    <option value="rings">rings</option>
                    <option value="earrings">earrings</option>
                    <option value="bracelets">bracelets</option>
                    <option value="necklaces">necklaces</option>
                </select>

                <div className="flex items-center gap-2">
                    <label htmlFor="price" className="font-semibold">
                        Max Price:
                    </label>
                    <input
                        id="price"
                        type="range"
                        min={5}
                        max={300}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                    <span>${maxPrice}</span>
                </div>
            </div>

            {/* Sets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onClick={() => router.push(`/sets/${product.id}`)}
                    >
                        <img src={product.img} alt={product.name} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="mt-2 text-lg font-bold">${product.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
