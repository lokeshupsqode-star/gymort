import React from 'react'

const Preloader: React.FC = () => {
    return (
        <>
            <div className="preloader">
                <div className="preloader-content">
                    <div className="preloader_img_circle"></div>
                    <div className="preloader_img">
                        <img src="/images/preloader/fitness_preimg.gif" alt="fitness_preimg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preloader