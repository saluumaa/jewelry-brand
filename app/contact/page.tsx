'uese client';

import React from "react";
import ContactWidget from "../components/ContactWidget";

const Contact = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center px-6 py-20">

            {/* HEADER */}
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    we'd love to hear from you! Whether you have questions about our jewelry collections,
                    need assistance with an order, or just want to say hello, our team is here to help.
                    Reach out to us through any of the methods below, and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* CARD */}
            <div className="mt-12 w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Contact Information
                </h2>

                <div className="space-y-4 text-gray-700">
                    <p>
                        <span className="font-semibold">Email:</span> saluam12@gmail.com
                    </p>
                    <p>
                        <span className="font-semibold">Location:</span> Hargeisa, Somaliland
                    </p>
                    <p>
                        <span className="font-semibold">Phone:</span> +252 63 1234567
                    </p>
                </div>

                <p className="mt-6 text-gray-600 text-sm">
                    If you prefer a quick message, use the Contact Button below.
                </p>
            </div>

            {/* CONTACT WIDGET BUTTON */}
            <div className="mt-12">
                <ContactWidget />
            </div>
        </div>
    );
};

export default Contact;
