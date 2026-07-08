import React from "react";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";
import HomeHero4 from "@/component/hero/HomeHero4";

import home4FeatureData from "../data/home4FeatureData.json";
import MyProgram from "@/component/MyProgram";
import CounterSection from "@/component/CounterSection";
import YTVideoCard from "@/component/YTVideoCard";
import TrainingSteps from "@/component/Trainingsteps";
import Home2Testimonial from "@/component/testimonial/Home2Testimonial";
import InstaMaquee from "@/component/InstaMaquee";
import InfiniteGallery from "@/component/gallery/Infinitegallery";
import ContactFrom from "@/component/ContactFrom";

const Home4: React.FC = () => {
  return (
    <>
      {/* ==================== Home 4 Hero Section ==================== */}
      <section className="home4-hero">
        <div className="container">
          <HomeHero4 />
        </div>
      </section>
      {/* ==================== Home 4 exercise Section ==================== */}
      <section className="home4-exercise-section">
        <div className="container">
          <div className="row home4-exercise-section-row">
            <div className="col-xxl-6 col-lg-6">
              <img
                src="/images/about/home4About.jpg"
                alt="smarter_exercise_img"
                className="home4About blur-in"
              />
            </div>
            <div className="col-xxl-6 col-lg-6">
              <p className="sub-heading-section split-text left-text-home4">
                Exercise Smarter, Feel Better. Live Longer.
              </p>
              <h2 className="section-heading split-text ultrices">
                BECOME YOUR STRONGEST SELF
              </h2>
              <div className="smarter_exercise_detail">
                <p className="heding-sub-discrib left-text-home4 pt-0">
                  Pellentesque porta pretium pellentesque ultrices ultricies eu
                  lectus. Justo vulputate commodo elementum nulla in gravida
                  blandit. Scelerisque venenatis id id arcu nunc tristique
                  rhoncus sit leo. Nunc tincidunt id dignissim nunc amet dui
                  orci pulvinar Volutpat pharetra ut.
                </p>
                <p className="heding-sub-discrib left-text-home4">
                  Laoreet lectus urna amet sem viverra. In eu diam nisi viverra
                  lobortis pretium. Massa eget urna ipsum lorem pellentesque
                  vivamus. Euismod in libero eget vel sed. Ultrices urna commodo
                  pellentesque risus volutpat eu erat.
                </p>
                <Link
                  to="/our-program"
                  className="btn-main anim anim--3 home4Hero-btn"
                >
                  <span className="btn-quote black-btn-quote">
                    Let’s Train Now
                  </span>
                  <span className="orenge_icon icon-black-box">
                    <IconArrowUpRight size={30} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row expercis-smart-row">
            {home4FeatureData.map((item) => (
              <div key={item.id} className="col-xl-3 col-sm-6">
                <div className="we_offer_box">
                  <div className="we_offer_icon stagger">
                    <img src={item.icon} alt={item.alt} />
                  </div>
                  <div className="we_offer_info">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Home 4 My Programs Section ==================== */}
      <section className="home4myProgram-section">
        <div className="container">
          <p className="sub-heading-section split-text">My Programs</p>
          <h2 className="section-heading split-text bugt">
            THE BEST WAY TO START YOUR DAY
          </h2>
          <MyProgram />
        </div>
      </section>
      {/* ==================== Counter Section ==================== */}
      <section className="counter-section">
        <div className="container">
          <CounterSection />
        </div>
      </section>
      {/* ==================== Youtube Trends Section ==================== */}
      <section className="youtube_trends_sec pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <YTVideoCard />
            </div>
            <div className="col-lg-6 youtube-trand-second-col">
              <p className="sub-heading-section split-text left-text-home4">
                Follow My Trends
              </p>
              <h2 className="section-heading split-text ultrices">
                VISIT MY YT CHANNEL
              </h2>
              <p className="heding-sub-discrib left-text-home4 pt-0">
                Magna elit at enim nulla cras id. Sed vestibulum velit varius
                diam fermentum. Nec ut amet sed a diam ut. Ac nec diam et neque.
                Malesuada elementum eget varius lectus dignissim vitae hendrerit
                risus. Habitasse vestibulum pretium ac a. Morbi molestie aliquam
                sociis augue vulputate.
              </p>
              <button className="btn-main anim anim--3 home4Hero-btn">
                <span className="btn-quote black-btn-quote">Subscribe Now</span>
                <span className="orenge_icon icon-black-box">
                  <IconArrowUpRight size={30} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Why Choose Section ==================== */}
      <section className="why-choose-section">
        <div className="container">
          <p className="sub-heading-section split-text">Why Choose Us</p>
          <h2 className="section-heading split-text bugt">
            BENEFIT FROM TRAININGS
          </h2>
          <TrainingSteps />
        </div>
      </section>

      {/* ==================== Home4 testimonila Section ==================== */}
      <section className="home4-testimonial-section pt-0">
        <div className="container">
          <Home2Testimonial />
        </div>
      </section>
      {/* ==================== Home4 Gallery Section ==================== */}
      <section className="home4-gallery-section">
        <div className="container">
          <p className="sub-heading-section split-text">Watch The Gallery</p>
          <h2 className="section-heading split-text">UNLIMITED TRAININGS ANYWHERE</h2>
        </div>
        <InfiniteGallery />
      </section>
      {/* ==================== Contact Form Section ==================== */}
      <section className="contact-form-section pb-0">
        <div className="container">
          <ContactFrom />
        </div>
      </section>

      {/* ==================== Instagram Section ==================== */}
      <section className="insta-section">
        <InstaMaquee />
      </section>
    </>
  );
};

export default Home4;
