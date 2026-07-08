import React from "react";
import {
    IconArrowLeft,
    IconArrowRight,
} from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const HomeTestimonial: React.FC = () => {
    return (
        <div className="testmo-bler">
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={2500}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".home1-testimonial-prev",
                    nextEl: ".home1-testimonial-next",
                }}
            >
                <SwiperSlide>
                    <div>
                        <p className="tness">
                            "I've been going to Gymort Fitness Center for about 6 months now and I'm really happy with it. The facilities are great, with a wide variety of equipment and plenty of space to work out. The staff is also very friendly and helpful, and they're always happy to answer any questions I have. I've seen some great results since I started working out at Gymort, and I'm really glad I found this gym."
                        </p>
                        <div className="d-flex align-items-center gap-4 stimonial">
                            <img src="/images/testimonial/client_say_v1_img_1.png" alt="Alexis Morton" />
                            <div>
                                <h2>ALEXIS MORTON</h2>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <p className="tness">
                            "The staff is also very friendly and helpful, and they're always happy to answer any questions I have. I've seen some great results since I started working out at Gymort, and I'm really glad I found this gym."
                        </p>
                        <div className="d-flex align-items-center gap-4 stimonial">
                            <img src="/images/testimonial/client_say_v1_img_2.png" alt="Alisa Fox" />
                            <div>
                                <h2>ALISA FOX</h2>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            {/* Slider Navigation Prev Next */}
            <button className="home1-testimonial-prev">
                <IconArrowLeft size={24} />
            </button>
            <button className="home1-testimonial-next">
                <IconArrowRight size={24} />
            </button>
        </div>
    );
};

export default HomeTestimonial;