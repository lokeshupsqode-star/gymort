import React from 'react'
import { IconArrowUpRight } from '@tabler/icons-react';
import pricingData from "@/data/pricingData.json";

interface PricingFeature {
    text: string;
    available: boolean;
}

interface PricingPlan {
    id: number;
    title: string;
    price: number;
    features: PricingFeature[];
}

const PricingSection1: React.FC = () => {
    const pricingPlans = pricingData as PricingPlan[];
    return (
        <>
            <div className="row pricing_v1_row">
                {pricingPlans.map((plan) => (
                    <div key={plan.id} className="col-xl-4 col-md-6">
                        <div className="pricing_plan_v1_box stagger">
                            <div className="pricing_head_area">
                                <h2>{plan.title}</h2>
                            </div>
                            <div className="pricing_mid_area" data-att={`$${plan.price}`}>
                                <h3>${plan.price}</h3>
                                <p>PER MONTH</p>
                            </div>
                            <div className="pricing_bottom_area overflow-hidden">
                                <ul className="pricing_bottom_item_list">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className={
                                                !feature.available
                                                    ? "no-avilable"
                                                    : ""
                                            }
                                        >
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="purches_btn">
                                    <button className="btn-main anim anim--3">
                                        <span className="btn-quote"> Purchase Now </span>
                                        <span className="orenge_icon">
                                            <IconArrowUpRight size={30} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PricingSection1;