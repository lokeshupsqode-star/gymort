import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import rawMenuData from '@/data/menuData.json';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import HeaderActions from './HeaderActions';
import SearchPopup from './SearchPopup';
import SideMenu from './SideMenu';
import type { MenuItem, HeaderProps } from './types';

const menuData = rawMenuData as MenuItem[];

const Header: React.FC<HeaderProps> = ({ variant = 'style1' }) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [prevPath, setPrevPath] = useState(currentPath);
    if (currentPath !== prevPath) {
        setPrevPath(currentPath);
        setIsOverlayOpen(false);
        setIsSearchOpen(false);
    }

    const toggleOverlay = () => {
        setIsOverlayOpen((prev) => !prev);
        if (isSearchOpen) setIsSearchOpen(false);
    };

    return (
        <>
            {variant !== 'style4' && (
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
            )}
            <header className={`gymort-header gymort-header-${variant} ${isScrolled ? 'header-scrolled' : ''}`}>
                <Logo variant={variant} />
                {variant !== 'style4' && (
                    <DesktopMenu menuData={menuData} currentPath={currentPath} variant={variant} />
                )}
                <HeaderActions
                    isSearchOpen={isSearchOpen}
                    setIsSearchOpen={setIsSearchOpen}
                    toggleOverlay={toggleOverlay}
                    variant={variant}
                />
            </header>
            <SideMenu
                isOverlayOpen={isOverlayOpen}
                toggleOverlay={toggleOverlay}
                menuData={menuData}
                currentPath={currentPath}
                variant={variant}
            />
        </>
    );
};

export default Header;