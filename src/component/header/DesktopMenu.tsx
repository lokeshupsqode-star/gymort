import React from 'react'
import { IconChevronDownFilled } from '@tabler/icons-react';
import type { DesktopMenuProps, MenuItem, SubItem } from './types'

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuData, currentPath, variant = 'style1' }) => {
    const isPathActive = (path: string) => {
        if (!currentPath) return false;
        if (path === '/') return currentPath === '/';
        return currentPath === path;
    };

    const isParentActive = (item: MenuItem) => {
        if (isPathActive(item.path)) return true;
        if (item.title.toLowerCase() === 'home' && currentPath === '/') return true;
        return !!item.submenu?.some(
            (sub) => isPathActive(sub.path) || !!sub.subSubmenu?.some((ss) => isPathActive(ss.path))
        );
    };

    const isSubActive = (sub: SubItem) => {
        if (isPathActive(sub.path)) return true;
        return !!sub.subSubmenu?.some((ss) => isPathActive(ss.path));
    };

    return (
        <nav className={`desktop-nav desktop-nav-${variant}`}>
            <ul className="nav-list">
                {menuData.map((item, index) => {
                    const parentActive = isParentActive(item);
                    return (
                        <li key={index} className="nav-item">
                            <a href={item.path} className={`nav-link ${parentActive ? 'active-link' : ''}`}>
                                {item.title} {item.submenu && <IconChevronDownFilled />}
                            </a>
                            {item.submenu && (
                                <ul className="dropdown-lvl1">
                                    {item.submenu.map((subItem, subIndex) => {
                                        const subActive = isSubActive(subItem);
                                        return (
                                            <li key={subIndex} className={`dropdown-item-lvl1 ${subActive ? 'active-link' : ''}`}>
                                                <a href={subItem.path} className={subActive ? 'active-link' : ''}>
                                                    {subItem.title} {subItem.subSubmenu && <IconChevronDownFilled color='#000000' />}
                                                </a>
                                                {subItem.subSubmenu && (
                                                    <ul className="dropdown-lvl2">
                                                        {subItem.subSubmenu.map((subSubItem, subSubIndex) => {
                                                            const ssActive = isPathActive(subSubItem.path);
                                                            return (
                                                                <li key={subSubIndex} className={ssActive ? 'active-link' : ''}>
                                                                    <a href={subSubItem.path} className={ssActive ? 'active-link' : ''}>{subSubItem.title}</a>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default DesktopMenu