import React from "react";
import progressData from '../data/processData.json';

const OurProcessSection: React.FC = () => {
    return (
        <>
            <div className="row our_progress_area_row overflow-hidden">
                {progressData.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="our_progress_box text-center">
                            <div className="progress_img position-relative">
                                <img src={item.image} alt={item.title} className="zoom-in progress_img_pera" />
                            </div>
                            <div className="progress_step_info overflow-hidden">
                                <h3 className="zoom-in">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};
export default OurProcessSection;