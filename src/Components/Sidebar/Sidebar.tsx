import React, { BaseSyntheticEvent, useState } from 'react';
import './style.scss';
import useMediaQuery from '../../Hooks/useMedia';

export default function Sidebar() {
  const isMobile = useMediaQuery(375);
  const [showSideMenu, setShowSideMenu] = useState<boolean>(true);
  const sidebarItem : string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  const renderSideMenu = (
    <div
      className={`sideMenuWrapper ${isMobile && showSideMenu ? 'menuOpen' : ''}`}
      onClick={() => setShowSideMenu(false)}
      onKeyDown={() => setShowSideMenu(false)}
      role="button"
      tabIndex={0}
    >
      <div
        className="sideMenuContainer"
        onClick={(e: Event | BaseSyntheticEvent) => e.stopPropagation()}
        onKeyDown={(e: Event | BaseSyntheticEvent) => e.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        <button
          type="button"
          aria-label="Close Btn"
          className="closeBtn"
          onClick={() => setShowSideMenu(false)}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>
        </button>
        <ul className="sidebarItems">
          {sidebarItem.map((sidebarItems) => (
            <li key={sidebarItems}>{sidebarItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      {renderSideMenu}
      {isMobile && (
      <button className="hamburgerButton" type="button" aria-label="Hamburger Btn" onClick={() => setShowSideMenu(true)}>
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
      </button>
      )}
    </div>
  );
}
