// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//     const heroRef = useRef<HTMLDivElement | null>(null);
//     const slidesRef = useRef<HTMLDivElement[]>([]);
//     const textsRef = useRef<HTMLDivElement[]>([]);

//     const setSlideRef = (el: HTMLDivElement | null, i: number) => {
//         if (el) slidesRef.current[i] = el;
//     };
//     const setTextRef = (el: HTMLDivElement | null, i: number) => {
//         if (el) textsRef.current[i] = el;
//     };

//     const jewelryItems = [
//         {
//             id: 1,
//             img: "/assets/earings/earing1.png",
//             title: "Elegant Earrings ✨",
//             desc: "Delicate shimmer for every special occasion.",
//         },
//         {
//             id: 2,
//             img: "/assets/bracelets/bracelet1.png",
//             title: "Graceful Bracelets 💎",
//             desc: "A symbol of beauty and timeless design.",
//         },
//         {
//             id: 3,
//             img: "/assets/necklaces/necklace1.png",
//             title: "Luxury Necklaces 👑",
//             desc: "Adorn your neck with elegance and grace.",
//         },
//         {
//             id: 4,
//             img: "/assets/rings/ring1.png",
//             title: "Classic Rings 💍",
//             desc: "Simple, bold, and forever stylish.",
//         },
//     ];

//     useEffect(() => {
//         if (!heroRef.current) return;
//         const ctx = gsap.context(() => {
//             const isDesktop = window.innerWidth >= 768;

//             if (!isDesktop) return; 

//             const slides = slidesRef.current.filter(Boolean);
//             const texts = textsRef.current.filter(Boolean);

//             // initial states
//             slides.forEach((s, i) => {
//                 gsap.set(s, {
//                     autoAlpha: i === 0 ? 1 : 0,
//                     scale: i === 0 ? 1 : 1.1,
//                 });
//             });
//             texts.forEach((t, i) => {
//                 gsap.set(t, {
//                     autoAlpha: i === 0 ? 1 : 0,
//                     y: i === 0 ? 0 : 50,
//                 });
//             });

//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: heroRef.current,
//                     start: "top top",
//                     end: "+=400%",
//                     scrub: 1,
//                     pin: true,
//                 },
//             });

//             jewelryItems.forEach((_, i) => {
//                 const nextSlide = slides[i + 1];
//                 const nextText = texts[i + 1];
//                 if (!nextSlide || !nextText) return;

//                 tl.to(slides[i], { autoAlpha: 0, scale: 1.1, duration: 0.8 }, "+=1");
//                 tl.to(nextSlide, { autoAlpha: 1, scale: 1, duration: 0.8 }, "<");
//                 tl.to(texts[i], { autoAlpha: 0, y: -50, duration: 0.5 }, "<");
//                 tl.to(nextText, { autoAlpha: 1, y: 0, duration: 0.8 }, "<");
//             });
//         }, heroRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section
//             ref={heroRef}
//             className="relative h-screen w-full overflow-hidden bg-[#fffaf6]"
//         >
//             {/* Background images */}
//             <div className="absolute inset-0">
//                 {jewelryItems.map((item, i) => (
//                     <div
//                         key={item.id}
//                         ref={(el) => setSlideRef(el, i)}
//                         className="absolute inset-0 w-full h-full"
//                     >
//                         <img
//                             src={item.img}
//                             alt={item.title}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#fffaf6] via-[#fffaf6]/60 to-transparent"></div>

//             {/* Text Section */}
//             <div className="relative z-10 flex flex-col items-center h-full text-center px-6">
//                 {jewelryItems.map((item, i) => (
//                     <div key={item.id} ref={(el) => setTextRef(el, i)}>
//                         <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
//                             {item.title}
//                         </h2>
//                         <p className="text-gray-500 max-w-xl mx-auto mb-8">{item.desc}</p>
//                         <button className="px-6 py-3 bg-amber-300 text-white font-semibold rounded-md shadow-md hover:bg-amber-400 transition-all">
//                             Shop Now
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.4,
            });

            gsap.from(imgRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between min-h-screen bg-[#fffaf6] overflow-hidden"
        >
            {/* --- TEXT COLUMN --- */}
            <div
                ref={textRef}
                className="flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-16 lg:px-24 py-12 space-y-6 z-20"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Shine Bright
                    <br />
                    <span className="text-amber-400">With Aurora.</span>
                </h1>
                <p className="text-gray-500 max-w-md">
                    Discover your world of modern beauty with timeless golden jewelry —
                    designed for elegance, crafted for you.
                </p>
                <button className="px-6 py-3 bg-amber-300 text-white font-semibold rounded-md shadow-md hover:bg-amber-400 transition-all">
                    Shop Now
                </button>
            </div>

            {/* --- IMAGE COLUMN --- */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center md:pr-12">
                <div className="relative w-[80%] md:w-[90%] h-[60vh] md:h-[100vh]  md:rounded-l-full overflow-hidden shadow-lg  ">
                    <img
                        ref={imgRef}
                        src="/hero-bg.png"
                        alt="Luxury Jewelry Model"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-10 -right-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-30"></div>
            </div>
        </section>
    );
}
