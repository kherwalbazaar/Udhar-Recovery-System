'use client'

import React, { useEffect, useRef } from 'react'

interface NavbarProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

const bgColorsBody: Record<string, string> = {
  home: '#badc58',
  customers: '#ff7979',
  add: '#e056fd',
  collections: '#686de0',
  reports: '#95afc0',
  settings: '#f0932b',
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const menuRef = useRef<HTMLMenuElement | null>(null)
  const borderRef = useRef<HTMLDivElement | null>(null)

  const tabs = [
    {
      id: 'home',
      title: 'Home',
      color: '#6ab04c',
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M3.8,6.6h16.4" />
          <path d="M20.2,12.1H3.8" />
          <path d="M3.8,17.5h16.4" />
        </svg>
      ),
    },
    {
      id: 'customers',
      title: 'Customers',
      color: '#eb4d4b',
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8 C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
          <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
        </svg>
      ),
    },
    {
      id: 'add',
      title: 'Add',
      color: '#be2edd',
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'collections',
      title: 'Collections',
      color: '#4834d4',
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
          <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
          <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
        </svg>
      ),
    },
    {
      id: 'reports',
      title: 'Reports',
      color: '#535c68',
      icon: (
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z" />
          <path d="M5.5,20l9.9-9.9l4.7,4.7" />
        </svg>
      ),
    },
  ]

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const offsetMenuBorder = () => {
      const activeItem = menuRef.current?.querySelector('.active')
      if (activeItem && borderRef.current && menuRef.current) {
        const rect = (activeItem as HTMLElement).getBoundingClientRect()
        const menuRect = menuRef.current!.getBoundingClientRect()
        const left = Math.floor(rect.left - menuRect.left - (borderRef.current.offsetWidth - rect.width) / 2) + 'px'
        borderRef.current.style.transform = `translate3d(${left}, 0, 0)`
      }
    }

    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      offsetMenuBorder()
    })

    window.addEventListener('resize', offsetMenuBorder)
    // Update body background color based on active tab
    document.body.style.backgroundColor = bgColorsBody[activeTab] || '#badc58'

    return () => window.removeEventListener('resize', offsetMenuBorder)
  }, [activeTab])

  return (
    <div className="nav-wrapper">
      <menu className="menu" ref={menuRef}>
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={`menu__item ${activeTab === tab.id ? 'active' : ''}`}
            style={{ '--bgColorItem': tab.color } as React.CSSProperties}
            onClick={() => handleTabChange(tab.id)}
            title={tab.title}
            aria-label={tab.title}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.icon}
          </button>
        ))}
        <div className="menu__border" ref={borderRef}></div>
      </menu>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7 c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5 c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>
    </div>
  )
}

export default Navbar

