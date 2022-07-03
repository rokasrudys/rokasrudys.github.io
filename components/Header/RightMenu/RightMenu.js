import { useEffect, useRef, useState } from 'react';
import styles from '../../Header/header.module.scss';
import { romanize } from '../../Helpers/Romanize';
import CloseButton from '../HeaderButtons/CloseButton';

export default function RightMenu(props) {
    const menu = useRef();
    const [hoverOutside, setHoverOutside] = useState(false);

    useEffect(() => {
        const isOutsideRefClick = e => {
            if(props.isMenuOpen && menu.current && !menu.current.contains(e.target)) {
                props.closeMenu();
            }
        }
        const isOutsideRefHover= e => {
            if(props.isMenuOpen && menu.current && !menu.current.contains(e.target)) {
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
        <div  className={`backdrop-blur-sm z-40 absolute top-0 left-0 min-h-screen w-screen h-screen ${hoverOutside? 'backdrop-opacity-30' : ''} ${props.isMenuOpen? "" : "hidden"}`} />
        <div  orientation="right" className={`z-50 absolute top-0 right-0 min-h-screen h-screen  ${styles.minW65} ${props.isMenuOpen? "" : "hidden"}`} >
                <div className='mt-2 flex justify-end mr-5'>
                    <ol ref={menu} className={`flex flex-col bg-sky-800 border-sky-400 border-10 rounded drop-shadow-lg shadow-lg rotate-2 ${hoverOutside? 'outline-red-800 outline outline-8 ' : ''}`}>
                          <div className='z-30 justify-end ml-2 mt-0 flex row-span-0'> 
                                <div><CloseButton onClick={props.closeMenu} active={hoverOutside}/> </div>
                         </div>
                        <span className='text-center text-xl text-white p-4 mx-12'>
                            {props.navItems.map((item, index) => {
                                return <li key={item.name + item.href}>
                                <a className="block hover:text-slate-800 hover:bg-slate-400 mb-3 pb-1" href={item.href}>
                                    <div className='text-slate-100 font-black text-sm mb-0 pb-0'>{romanize(index + 1)}.</div>
                                    <div className='border-b-4 border-b-slate-200 pb-1'>{item.name}</div>
                                </a>
                            </li>
                            })}
                            <li className='flex mt-4 items-center px-0 mx-0'>
                                <button className="px-6 py-3 bg-transparent text-xl drop-shadow shadow font-semibold border-2 hover:text-slate-800 hover:border-slate-800 hover:bg-white">
                                    PDF CV
                                </button>
                            </li>
                        </span>
                    </ol>
                </div>
                </div>
            </div>
}