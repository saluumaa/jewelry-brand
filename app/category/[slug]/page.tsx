import { products } from "@/app/data/products";
import Link from "next/link";

type Props = {
    params: { slug: string }
};

export default function CategoryPage({ params }: Props) {
    const { slug } = params;
    const filtered = products.filter(p => p.category === slug);

    if (filtered.length === 0) {
        return <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold">No products found for {slug}</h2>
        </div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex gap-4 justify-center items-center mb-12">
                <span className="w-20 h-7 text-amber-300">________</span>
                <h2 className="text-3xl text-center font-bold capitalize">  {slug} </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                {filtered.map(p => (
                    <div key={p.id} className="bg-white shadow rounded-lg overflow-hidden">
                        <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900">{p.name}</h3>
                            <p className="text-gold font-bold">${p.price}</p>
                            <Link href={`/product/${p.id}`} className="text-sm text-gold underline mt-2 inline-block">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
