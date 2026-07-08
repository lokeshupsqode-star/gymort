import React, { useState } from "react";
import Modal from "react-modal";
import { IconPlayerPlay, IconX } from '@tabler/icons-react';

Modal.setAppElement("#root");

const VideoSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="circulart-text-main zoom-in" onClick={() => setIsOpen(true)}>
                <button className="circular-arrow">
                    <IconPlayerPlay size={40} color="#FF640D" />
                </button>
                <svg className="circular-text" viewBox="0 0 200 200">
                    <defs>
                        <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"></path>
                    </defs>
                    <text>
                        <textPath href="#circlePath">
                            PLAY NEW • PLAY NEW • PLAY NEW •
                        </textPath>
                    </text>
                </svg>
            </div>


            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className="video-modal"
                overlayClassName="video-overlay"
            >
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    <IconX />
                </button>

                <div className="video-wrapper">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/7Nwn2nLBqEU?autoplay=1&mute=1"
                        title="YouTube video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            </Modal>
        </>
    )
};

export default VideoSection;