import React from "react";
import { IconArrowLeft, IconArrowRight, } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import testimonials from "@/data/testimonialsData.json";

export interface Testimonial {
    id: number;
    name: string;
    designation: string;
    image: string;
    rating: string;
    description: string;
}

const Home2Testimonial: React.FC = () => {
    return (
        <>
            <div className="testmo2">
                <p className="sub-heading-section split-text">Our Clients Say</p>
                <h2 className="section-heading split-text">TESTIMONIALS</h2>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop
                    speed={2500}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: ".home2-testimonial-prev",
                        nextEl: ".home2-testimonial-next",
                    }}
                >
                    {(testimonials as Testimonial[]).map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="home2-testimonial-slider-main">
                                <div className="home2-testimonial-slider-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div>
                                    <p className="been"> "{item.description}" </p>
                                    <img src={item.rating} alt="rating" />
                                    <h2 className="alexis"> {item.name} </h2>
                                    <p className="customerlxts"> {item.designation}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="home2-testimonial-prev">
                    <IconArrowLeft size={24} />
                </button>
                <button className="home2-testimonial-next">
                    <IconArrowRight size={24} />
                </button>
            </div>
        </>
    );
};

export default Home2Testimonial;