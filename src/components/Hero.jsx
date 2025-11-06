// src/components/Hero.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../images/hero-bg-1.jpg";
import hero2 from "../images/hero-bg-2.jpg";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            img: hero1,
            title: "Where every star is extraordinary",
            subtitle: "Discover the blend of luxury, comfort and convenience at Almaris. Nestled in the heart of Brooklyn, our hotel is your gateway to an unforgettable experience.",
            cta: "/reservation",
        },
        {
            img: hero2,
            title: "Experience hospitality redefined",
            subtitle: "Discover the blend of luxury, comfort and convenience at Almaris. Nestled in the heart of Brooklyn, our hotel is your gateway to an unforgettable experience.",
            cta: "/reservation",
        },
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Swiper (each slide contains its background + content) */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                speed={1200}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="absolute inset-0 -z-20"
            >
                {slides.map((s, i) => (
                    <SwiperSlide key={i}>
                        {/* Slide wrapper */}
                        <div className="relative h-screen w-full">
                            {/* Background image (zoom on active) */}
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1200 ease-out transform ${activeIndex === i ? "scale-105" : "scale-100"
                                    }`}
                                style={{ backgroundImage: `url(${s.img})` }}
                                aria-hidden="true"
                            />

                            {/* Dark overlay (same per-slide so blur/overlay doesn't occlude content) */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Per-slide content (slides in from right when active) */}
                            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
                                <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-2xl mx-auto">

                                    <h2
                                        className={`text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg transform transition-all duration-700 leading-20 ${activeIndex === i
                                            ? "translate-x-0 opacity-100"
                                            : "translate-x-6 opacity-0"
                                            }`}
                                    >
                                        {s.title}
                                    </h2>

                                    <p
                                        className={`text-sm md:text-lg mb-8 drop-shadow transform transition-all duration-900 delay-150 ${activeIndex === i
                                            ? "translate-x-0 opacity-100"
                                            : "translate-x-6 opacity-0"
                                            }`}
                                    >
                                        {s.subtitle}
                                    </p>

                                    <a
                                        href={s.cta}
                                        className={`rounded bg-yellow-500 px-8 py-3 text-lg font-medium text-white transition transform duration-1000 delay-300 ${activeIndex === i
                                            ? "translate-x-0 opacity-100"
                                            : "translate-x-6 opacity-0"
                                            } hover:bg-yellow-600`}
                                    >
                                        Book Now
                                    </a>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Optional dots/pagination container (if you enable pagination in Swiper) */}
            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30" /> */}
        </section>
    );
};

export default Hero;
