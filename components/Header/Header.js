import NameLogo from './NameLogo/NameLogo'
import styles from '../Header/header.module.scss';
import RightMenu from './RightMenu/RightMenu';
import { useState, useEffect, useRef } from 'react'
import { romanize } from '../Helpers/Romanize';
import HamButton from './HeaderButtons/HamButton';

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
]


export default function Header(props) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(100);
    const [scrollBarSize, setScrollBarSize] = useState({width: "100%", height: 10})
    const scrollBar = useRef(null);
    const navBar = useRef(null);

    const toggleSideBarMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    const calculateScrollBar = () => {
        let wintop = window.scrollY, docheight = document.body.clientHeight, winHeight = window.innerHeight
        setScrollPercentage((wintop / (docheight - winHeight)) * 100);
        setScrollBarSize({width: navBar?.current.clientWidth, height: navBar?.current.clientHeight + 10 })
    }

    useEffect(() => {
        calculateScrollBar()
    }, [scrollPercentage, scrollBar, navBar])

    useEffect(() => {
        window.addEventListener('scroll', calculateScrollBar, { passive: true });
        window.addEventListener('resize', calculateScrollBar);
        return () => {
            window.removeEventListener('scroll', calculateScrollBar);
            window.removeEventListener('resize', calculateScrollBar);
        }
    }, [])

    return <header className='sticky top-0 z-50 mx-4'>
        <div ref={scrollBar} style={
            {"height" : scrollBarSize?.height,
             "width" : scrollBarSize?.width,
             "background": `linear-gradient(to right, rgb(50, 150, 255) ${scrollPercentage}%, rgb(0,0,0) ${scrollPercentage+1}%)`
            }
        }
         className='absolute rounded-b-full w-full top-1'></div>
        <nav ref={navBar} className="z-30 relative top-0 rounded-b-full text-black bg-white p-2 lg:p-3 xl:p-4">
            <ol className="flex flex-row items-center xl:mx-16 lg:mx-12 md:mx-12 mx-10">
                <NameLogo />
                <div className='ml-auto flex'>
                    <span className='hidden lg:flex items-center xl:text-2xl lg:text-lg'>
                        {navItems.map((item, index) => {
                            return <li key={item.name + item.href}>
                                <a className="block mx-2 xl:mx-3 font-semibold hover:text-slate-800" href={item.href}>
                                    <span className='text-theme-accent-600 fontCard text-sm lg:text-base xl:text-lg'>{romanize(index + 1)}.</span>
                                    <span className=''> {item.name}</span>
                                </a>
                            </li>
                        })}
                        <li className='ml-8'>
                            <button className="flex px-4 py-2 bg-transparent xl:text-2xl lg:text-xl md:text-lg drop-shadow shadow-inner font-bold border-3 border-black rounded-2xl hover:text-white hover:scale-105 hover:border-theme-accent-700 hover:bg-theme-accent">
                                PDF CV
                            </button>
                        </li>
                    </span>
                    <li className='flex lg:hidden ml-auto'>
                        <HamButton onClick={toggleSideBarMenu} />
                    </li>
                </div>
            </ol>
        </nav>
        <RightMenu isMenuOpen={isMenuOpen} navItems={navItems} closeMenu={toggleSideBarMenu} />
    </header>
}