"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiPhone, FiInstagram, FiMapPin, FiX } from "react-icons/fi";

// ------------------ Validation schema ------------------
const contactSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactWidget() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "", message: "" },
    });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const onSubmit = async (data: ContactForm) => {
        try {
            setStatus("sending");

            const templateParams = {
                from_name: data.name,
                reply_to: data.email,
                message: data.message,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setStatus("success");
            reset();

            setTimeout(() => {
                setOpen(false);
                setStatus("idle");
            }, 1500);

        } catch (err) {
            console.error(err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2000);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(true)}
                    className="bg-amber-300 hover:bg-amber-400 text-white p-4 rounded-full shadow-xl"
                >
                    Contact
                </motion.button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
                    >
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-4 border-b">
                                <div>
                                    <h3 className="text-lg font-semibold">Get in Touch</h3>
                                    <p className="text-gray-500 text-sm">We reply quickly.</p>
                                </div>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium">Name</label>
                                        <input
                                            {...register("name")}
                                            className="w-full border rounded-md p-2 mt-1 focus:ring-amber-300"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium">Email</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="w-full border rounded-md p-2 mt-1 focus:ring-amber-300"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium">Message</label>
                                        <textarea
                                            {...register("message")}
                                            rows={5}
                                            className="w-full border rounded-md p-2 mt-1"
                                        />
                                        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="bg-amber-300 w-full text-white py-2 rounded-md hover:bg-amber-400 disabled:opacity-60"
                                    >
                                        {status === "sending" ? "Sending..." : "Send Message"}
                                    </button>

                                    {status === "success" && <p className="text-green-600">Message sent ✓</p>}
                                    {status === "error" && <p className="text-red-600">Something went wrong.</p>}

                                    {/* Quick contact info */}
                                    <div className="mt-4 text-sm text-gray-600">
                                        <div className="flex gap-2 items-center"><FiPhone /> +252 63 1234567</div>
                                        <div className="flex gap-2 items-center mt-2"><FiInstagram /> @Jagsan</div>
                                    </div>
                                </form>

                                {/* Right side: Map + Socials */}
                                <div className="space-y-4">
                                    <iframe
                                        className="w-full h-52 rounded-md border"
                                        src="https://www.google.com/maps/embed?pb=!1m18..."
                                        loading="lazy"
                                    />

                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <h4 className="font-semibold">Socials</h4>
                                        <div className="flex gap-3 mt-2 text-gray-700">
                                            <a href="#">Instagram</a>
                                            <a href="#">WhatsApp</a>
                                            <a href="#">Facebook</a>
                                        </div>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        <h5 className="font-semibold">Phone</h5>
                                        <p>+252 63 1234567</p>
                                        <h5 className="font-semibold mt-3">Address</h5>
                                        <p>Hargeisa, Somaliland</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t text-center text-sm text-gray-500">
                                We reply within 1 hour.
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
