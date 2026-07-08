import React from 'react'
import { Link } from 'react-router-dom'
import type { LogoProps } from '../header/types'

const Logo: React.FC<LogoProps> = ({ variant = 'style1' }) => {
    return (
        <div className={`logo-container logo-${variant}`}>
            <Link to='/' className="brand-logo">
                <img src="/images/logos/gymort_logo.png" alt="gymort_logo" />
            </Link>
        </div>
    )
}

export default Logo