"use client";

import { useParams, useRouter } from "next/navigation";
import { sets } from "../../data/sets";

export default function SetDetailPage() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const set = sets.find((s) => s.id === Number(id));

    if (!set) {
        return <p className="text-center mt-12">Set not found</p>;
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-12">
                <img src={set.image} alt={set.name} className="w-full rounded-lg shadow-lg" />
                <div>
                    <h1 className="text-3xl font-bold mb-4">{set.name}</h1>
                    <p className="text-gray-600 mb-6">{set.description}</p>
                    <p className="text-2xl font-bold mb-6">${set.price}</p>
                    <button
                        onClick={() => router.back()}
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}
