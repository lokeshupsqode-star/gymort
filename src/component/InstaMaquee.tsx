import React from 'react'
import { IconBrandInstagram } from '@tabler/icons-react';
import instagramData from "../data/instagramData.json";

interface InstagramItem {
    id: number;
    image: string;
    link: string;
}
const items = instagramData as InstagramItem[];

const InstaMaquee: React.FC = () => {
    return (
        <>
            <div className="container-fluid">
                <p className="sub-heading-section split-text">Follow Us on Instagram</p>
                <h2 className="section-heading split-text">@GYMMORT</h2>
                <div className="instagram_marquee">
                    <div className="marquee_track">
                        {[...items, ...items].map((item, index) => (
                            <a
                                key={`${item.id}-${index}`}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="insta_feed_box"
                            >
                                <img src={item.image} alt="instagram" />
                                <div className="insta_feed_overlay">
                                    <IconBrandInstagram size={40} color="#FFF" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstaMaquee