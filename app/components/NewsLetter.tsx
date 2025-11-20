"use client";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h4 className="text-xl font-extrabold">Stay in the loop</h4>
                <p className="text-gray-600 mt-2">Subscribe for new drops and exclusive offers.</p>
                <div className="mt-6 flex justify-center gap-3">
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="px-4 py-3 border rounded-md w-72" />
                    <button className="px-5 py-3 bg-gold text-black rounded-md">Subscribe</button>
                </div>
            </div>
        </section>
    );
}
