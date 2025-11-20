"use client";

import { Gem, Diamond, Star } from "lucide-react"; // you can swap icons

const features = [
    {
        title: "Gems and Natural Stones",
        description:
            "We use precious and semi-precious stones: diamonds, emeralds, sapphires, etc. and also work with Swarovski crystals.",
        icon: <Gem className="w-10 h-10 text-gold mx-auto" />,
    },
    {
        title: "585 Gold",
        description:
            "Our fine jewelry will never darken or wear off. With proper care, you can wear it for 50+ years and pass it to your heirs!",
        icon: <Diamond className="w-10 h-10 text-gold mx-auto" />,
    },
    {
        title: "Designer Collections",
        description:
            "We create exquisite fine jewelry. Each collection has a soul and a message that resonates in the hearts of our customers.",
        icon: <Star className="w-10 h-10 text-gold mx-auto" />,
    },
];

export default function Features() {
    return (
        <section className="py-16 bg-white ">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="mb-4 text-amber-300">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
