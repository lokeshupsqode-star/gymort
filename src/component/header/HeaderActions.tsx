import React from 'react'
import { IconDotsFilled, IconSearch } from '@tabler/icons-react';
import type { HeaderActionsProps } from './types'

const HeaderActions: React.FC<HeaderActionsProps> = ({ isSearchOpen, setIsSearchOpen, toggleOverlay, variant = 'style1' }) => {
    return (
        <div className={`right-controls right-controls-${variant}`}>
            {variant !== 'style4' && (
                <button type="button" className="icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
                    <IconSearch />
                </button>
            )}
            <button type="button" className="burger-btn" onClick={toggleOverlay} aria-label="Open Full Menu">
                <IconDotsFilled />
            </button>
        </div>
    )
}

export default HeaderActions