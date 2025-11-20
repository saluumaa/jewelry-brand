"use client";

import { useRouter } from "next/navigation";

export default function PromoBanner() {
    const router = useRouter();

    return (
        <div className="grid md:grid-cols-2 gap-8 my-12 px-6 max-w-6xl mx-auto">
            {/* Banner 1 */}
            <div
                className="relative cursor-pointer group"
                onClick={() => router.push("/sets")}
            >
                <img src="/assets/set.png" alt="jagsan Prom Set" className="rounded-full w-100 h-100" />
                <div className="absolute inset-0 bg-amber-200 bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold opacity-20 rounded-full group-hover:rounded-none group-hover:opacity-100 transition">
                    Shop Jagsan Sets →
                </div>
            </div>

            {/* Banner 2 */}
            <div
                className="relative cursor-pointer group"
                onClick={() => router.push("/sets")}
            >
                <img src="/assets/youth1.png" alt="Youth Collection" className="rounded-full w-100 h-100" />
                <div className="absolute inset-0 bg-amber-200 bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold opacity-20 rounded-full group-hover:rounded-none group-hover:opacity-100 transition">
                    Explore Youth Collection →
                </div>
            </div>
        </div>
    );
}

