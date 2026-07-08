import React, { useState } from 'react'
import type { SearchPopupProps } from '../header/types'

const SearchPopup: React.FC<SearchPopupProps> = ({ isSearchOpen, setIsSearchOpen }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchSubmit = () => {
        const query = searchQuery.trim();
        if (!query) return;
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    return (
        <div className={`search-overlay ${isSearchOpen ? 'search-active' : ''}`}>
            <button type="button" className="search-close" onClick={() => setIsSearchOpen(false)}>&times;</button>
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Type to search..."
                    autoFocus={isSearchOpen}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                />
                <button type="button" className="search-submit" onClick={handleSearchSubmit}>Search</button>
            </div>
        </div>
    )
};

export default SearchPopup;