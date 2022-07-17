import { useEffect, useRef, useState } from 'react';
import { romanize } from '../../Helpers/Romanize';
import CloseButton from '../HeaderButtons/CloseButton';

export default function RightMenu(props) {
    const menu = useRef();
    const [hoverOutside, setHoverOutside] = useState(false);

    useEffect(() => {
        const isOutsideRefClick = e => {
            if (props.isMenuOpen && menu.current && !menu.current.contains(e.target)) {
                props.closeMenu();
            }
        }
        const isOutsideRefHover = e => {
            if (props.isMenuOpen && menu.current && !menu.current.contains(e.target)) {
                setHoverOutside(true);
            } else {
                setHoverOutside(false)
            }
        }
        document.addEventListener("mousedown", isOutsideRefClick)
        document.addEventListener("mousemove", isOutsideRefHover)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", isOutsideRefClick)
            document.removeEventListener("mousemove", isOutsideRefHover)
            setHoverOutside(false);
        }
    },
        [props.isMenuOpen]);


    return <div>
        <div className={`backdrop-blur-sm z-30 fixed top-0 left-0 h-screen w-screen ${hoverOutside ? 'backdrop-opacity-30' : ''} ${props.isMenuOpen ? "" : "hidden"}`} />
        <div orientation="right" className={`z-40 fixed top-0 right-0 w-screen h-screen flex justify-end  ${props.isMenuOpen ? "" : "hidden"}`} >
            <div ref={menu} className={`flex md:w-1/3 w-2/3 h-fit border-b-10 rounded-bl-3xl bg-white border-l-10 rounded  drop-shadow-lg shadow-lg ${hoverOutside ? 'outline-red-800 outline outline-8 ' : ''}`}>
                <ol className={`flex flex-col min-w-full`}>
                    <div className='z-30 justify-end m-4 flex row-span-0'>
                        <CloseButton onClick={props.closeMenu} active={hoverOutside} />
                    </div>
                    <span className='text-center text-xl p-4 mx-2 flex flex-col mt-auto'>
                        {props.navItems.map((item, index) => {
                            return <li key={item.name + item.href}>
                                <a className="block hover:text-black-800 hover:scale-105 hover:bg-theme-accent-100 mb-3 pb-1" href={item.href}>
                                    <div className='text-theme-accent-500 font-black text-sm mb-0 pb-0'>{romanize(index + 1)}.</div>
                                    <div className='border-b-4 border-b-theme-accent-500 pb-1'>{item.name}</div>
                                </a>
                            </li>
                        })}
                        <li className='flex mt-1 items-center px-0 mx-0 justify-center pb-4'>
                            <button className="min-w-full py-3 bg-theme-accent text-white font-bold text-xl drop-shadow-lg border-4 border-theme-accent-400 hover:text-slate-800 hover:scale-110 hover:border-slate-800 hover:bg-white">
                                PDF CV
                            </button>
                        </li>
                    </span>
                </ol>
            </div>
        </div>
    </div>
}