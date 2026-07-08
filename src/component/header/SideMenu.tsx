import React, { useState, useEffect, useCallback } from 'react'
import { IconChevronDownFilled, IconPhoneCall, IconMailCheck, IconMapPin } from '@tabler/icons-react';
import type { SideMenuProps, MenuItem, SubItem } from '../header/types'

const SideMenu: React.FC<SideMenuProps> = ({ isOverlayOpen, toggleOverlay, menuData, currentPath, variant = 'style1' }) => {
    const [activeAccordionIndex, setActiveAccordionIndex] = useState<number | null>(null);
    const [activeSubAccordionIndex, setActiveSubAccordionIndex] = useState<string | null>(null);

    const isPathActive = useCallback((path: string) => {
        if (!currentPath) return false;
        if (path === '/') return currentPath === '/';
        return currentPath === path;
    }, [currentPath]);

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

    useEffect(() => {
        if (!currentPath) return;
        menuData.forEach((item, index) => {
            item.submenu?.forEach((sub, subIndex) => {
                const subHasActive = isPathActive(sub.path) || sub.subSubmenu?.some((ss) => isPathActive(ss.path));
                if (subHasActive) {
                    setActiveAccordionIndex(index);
                    if (sub.subSubmenu?.some((ss) => isPathActive(ss.path))) {
                        setActiveSubAccordionIndex(`${index}-${subIndex}`);
                    }
                }
            });
        });
    }, [currentPath, isPathActive, menuData]);

    const toggleAccordion = (index: number) => {
        setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
        setActiveSubAccordionIndex(null);
    };

    const toggleSubAccordion = (parentIndex: number, subIndex: number) => {
        const key = `${parentIndex}-${subIndex}`;
        setActiveSubAccordionIndex(activeSubAccordionIndex === key ? null : key);
    };

    return (
        <div className={`fullscreen-overlay fullscreen-overlay-${variant} ${isOverlayOpen ? 'overlay-active' : ''}`}>
            <div className="overlay-header container-fluid">
                <div className="brand-logo"><img src="/images/logos/gymort_logo.png" alt="gymort_logo" /></div>
                <button type="button" className="menu-close-btn" onClick={toggleOverlay}>&times;</button>
            </div>

            <div className="container overlay-body">
                <div className="info-column">
                    <h2 className="discuss-heading">LET'S DISCUSS</h2>
                    <div className='full-call-deyaos'>
                        <div className='header_get_touch_icon'><IconPhoneCall color='#FFF' /></div>
                        <div className="contact-block">
                            <span className="block-label">CALL US</span>
                            <a href='tel:123456789'>+1 234 567 8899</a>
                            <a href='tel:123456789'>+1 345 678 9900</a>
                        </div>
                    </div>
                    <div className='full-call-deyaos'>
                        <div className='header_get_touch_icon'><IconMailCheck color='#FFF' /></div>
                        <div className="contact-block">
                            <span className="block-label">EMAIL NOW</span>
                            <a href='mailto:hello@gymort.com'>hello@gymort.com</a>
                        </div>
                    </div>
                    <div className='full-call-deyaos'>
                        <div className='header_get_touch_icon'><IconMapPin color='#FFF' /></div>
                        <div className="contact-block">
                            <span className="block-label">WE ARE HERE</span>
                            <p>27 West 24th St New York, NY 10010</p>
                        </div>
                    </div>
                    <div className="social-links-grid">
                        <a href="#facebook" className="social-pill">Facebook</a>
                        <a href="#twitter" className="social-pill">Twitter</a>
                        <a href="#instagram" className="social-pill">Instagram</a>
                        <a href="#youtube" className="social-pill">Youtube</a>
                    </div>
                </div>

                <div className="menu-column">
                    <ul className="accordion-list">
                        {menuData.map((item, index) => {
                            const parentActive = isParentActive(item);
                            return (
                                <li key={index} className="accordion-item">
                                    <div className="accordion-row" onClick={() => item.submenu && toggleAccordion(index)}>
                                        <span className={parentActive ? 'active-link' : ''}>{item.title.toUpperCase()}</span>
                                        {item.submenu && (
                                            <span className={`accordion-icon ${activeAccordionIndex === index ? 'icon-rotate' : ''}`}><IconChevronDownFilled color='#000000' /></span>
                                        )}
                                    </div>

                                    {item.submenu && (
                                        <div className={`accordion-drawer ${activeAccordionIndex === index ? 'drawer-open' : ''}`}>
                                            <ul className="side-submenu-list">
                                                {item.submenu.map((subItem, subIndex) => {
                                                    const subKey = `${index}-${subIndex}`;
                                                    const isSubOpen = activeSubAccordionIndex === subKey;
                                                    const subActive = isSubActive(subItem);

                                                    return (
                                                        <li key={subIndex} className="side-submenu-item">
                                                            <div className="side-submenu-header" onClick={() => subItem.subSubmenu && toggleSubAccordion(index, subIndex)}>
                                                                <a
                                                                    href={subItem.subSubmenu ? undefined : subItem.path}
                                                                    className={`side-submenu-link ${subActive ? 'active-link' : ''}`}
                                                                    onClick={(e) => subItem.subSubmenu && e.preventDefault()}
                                                                >
                                                                    {subItem.title}
                                                                </a>
                                                                {subItem.subSubmenu && (
                                                                    <span className={`sub-accordion-icon ${isSubOpen ? 'icon-rotate' : ''}`}><IconChevronDownFilled color='#000000' /></span>
                                                                )}
                                                            </div>

                                                            {subItem.subSubmenu && (
                                                                <div className={`sub-accordion-drawer ${isSubOpen ? 'sub-drawer-open' : ''}`}>
                                                                    <ul className="side-sub-sub-list">
                                                                        {subItem.subSubmenu.map((subSubItem, subSubIndex) => {
                                                                            const ssActive = isPathActive(subSubItem.path);
                                                                            return (
                                                                                <li key={subSubIndex}>
                                                                                    <a href={subSubItem.path} className={`side-sub-sub-link ${ssActive ? 'active-link' : ''}`}>{subSubItem.title}</a>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default SideMenu;