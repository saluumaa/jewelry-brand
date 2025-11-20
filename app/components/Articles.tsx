export default function Articles() {
    const articles = [
        { title: "The Miraculous Pieces", excerpt: "Learn how we select stones.", img: "/article1.jpg" },
        { title: "Why Gold Matters", excerpt: "Care tips for your jewelry.", img: "/article2.jpg" },
        { title: "Style Guide", excerpt: "How to pair necklaces and earrings.", img: "/article3.jpg" },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-2xl font-extrabold mb-6">Our News and Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((a, i) => (
                        <article key={i} className="bg-white rounded-xl overflow-hidden shadow">
                            <img src={a.img} alt={a.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h4 className="font-semibold">{a.title}</h4>
                                <p className="text-sm text-gray-600 mt-2">{a.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
