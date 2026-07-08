import React from 'react'
import { Link } from 'react-router-dom'
import { IconArrowUpRight } from '@tabler/icons-react';
import trainings from '../data/ourTrainingsData.json';

const OurTraining: React.FC = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className="training_left">
                        <p className="sub-heading-section split-text">Our Trainings</p>
                        <h2 className="section-heading split-text">MEET OUR BEST PROGRAM FOR YOUR BEST RESULTS</h2>
                        <Link to="/our-program" className="btn-main anim anim--3">
                            <span className="btn-quote">Get Started</span>
                            <span className="orenge_icon">
                                <IconArrowUpRight size={30} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className="training_grid">
                        {trainings.map((item) => (
                            <Link to='#' className="training_card" key={item.id}>
                                <img src={item.image} alt={item.title} className='img-zoom' />
                                <h2>{item.title}</h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};
export default OurTraining;