'use client'

import React, { useEffect, useRef } from 'react'
import { BookOpenText, LayoutDashboard, WalletCards } from 'lucide-react'

interface NavbarProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

const bgColorsBody: Record<string, string> = {
  dashboard: '#badc58',
  khata: '#ff7979',
  collections: '#686de0',
  add: '#e056fd',
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const menuRef = useRef<HTMLMenuElement | null>(null)
  const borderRef = useRef<HTMLDivElement | null>(null)

  const tabs = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      color: '#6ab04c',
      icon: <LayoutDashboard className="icon" />,
    },
    {
      id: 'khata',
      title: 'Khata',
      color: '#eb4d4b',
      icon: <BookOpenText className="icon" />,
    },
    {
      id: 'collections',
      title: 'Collections',
      color: '#4834d4',
      icon: <WalletCards className="icon" />,
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
            <span className="menu__label">{tab.title}</span>
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

