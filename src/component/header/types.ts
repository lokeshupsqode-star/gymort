import type React from 'react';

export interface SubSubItem {
    title: string;
    path: string;
}

export interface SubItem {
    title: string;
    path: string;
    subSubmenu?: SubSubItem[];
}

export interface MenuItem {
    title: string;
    path: string;
    submenu?: SubItem[];
}

export type HeaderVariant = "style1" | "style2" | "style3" | "style4";

export interface HeaderProps {
    variant?: HeaderVariant;
}

export interface LogoProps {
    variant?: HeaderVariant;
}

export interface DesktopMenuProps {
    menuData: MenuItem[];
    currentPath: string;
    variant?: HeaderVariant;
}

export interface HeaderActionsProps {
    isSearchOpen: boolean;
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleOverlay: () => void;
    variant?: HeaderVariant;
}

export interface SearchPopupProps {
    isSearchOpen: boolean;
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SideMenuProps {
    isOverlayOpen: boolean;
    toggleOverlay: () => void;
    menuData: MenuItem[];
    currentPath: string;
    variant?: HeaderVariant;
}