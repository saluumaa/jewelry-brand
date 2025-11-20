'use client';

import { products } from "@/app/data/products";
import { useRouter } from "next/navigation";

type Props = {
    params: { id: string }
};

export default function ProductDetail({ params }: Props) {
    const router = useRouter();
    const { id } = params;
    const product = products.find(p => p.id === id);

    if (!product) return <div className="p-10">Product not found</div>;

    return (
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
            <div>
                <img src={product.img} alt={product.name} className="w-full h-[500px] object-cover rounded-lg shadow" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-gold text-2xl font-semibold mt-2">{product.price}</p>
                <p className="mt-6 text-gray-700">{product.description}</p>
                <button
                    onClick={() => router.back()}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
                >
                    Back
                </button>
            </div>
        </div>
    );
}
