"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // App router uses this
import { sets } from '../data/sets'
import { SetItem } from '../types/set'
import { motion } from "framer-motion";

export default function SetsPage() {
    const router = useRouter();

    const [selectedType, setSelectedType] = useState<string>("all");
    const [maxPrice, setMaxPrice] = useState<number>(300);

    // Apply filters
    const filteredSets = sets.filter((set: SetItem) => {
        const matchesType = selectedType === "all" || set.type === selectedType;
        const matchesPrice = set.price <= maxPrice;
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
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="bridal">Bridal</option>
                </select>

                <div className="flex items-center gap-2">
                    <label htmlFor="price" className="font-semibold">
                        Max Price:
                    </label>
                    <input
                        id="price"
                        type="range"
                        min={50}
                        max={300}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                    <span>${maxPrice}</span>
                </div>
            </div>

            {/* Sets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredSets.map((set, index) => (
                    <motion.div
                        key={set.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onClick={() => router.push(`/sets/${set.id}`)}
                    >
                        <img src={set.image} alt={set.name} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{set.name}</h2>
                            <p className="text-gray-600">{set.description}</p>
                            <p className="mt-2 text-lg font-bold">${set.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
