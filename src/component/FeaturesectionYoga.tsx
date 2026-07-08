import React from "react";
import homeFeatureData from '../data/yogaFeatureData.json';

interface homeFeatureData {
    id: number;
    title: string;
    description: string;
    icon: string;
    alt: string;
}

const FeaturesectionYoga: React.FC = () => {
    return (
        <>
            <div className="row home1freture-row">
                {homeFeatureData.map((item) => (
                    <div key={item.id} className="col-xl-4 col-sm-6">
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
export default FeaturesectionYoga;