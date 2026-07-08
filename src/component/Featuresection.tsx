import React from "react";
import homeFeatureData from '../data/homeFeatureData.json';

interface homeFeatureData {
    id: number;
    title: string;
    description: string;
    icon: string;
    alt: string;
}

const Featuresection: React.FC = () => {
    return (
        <>
            <div className="row home1freture-row">
                {homeFeatureData.map((item) => (
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
        </>
    );
};
export default Featuresection;