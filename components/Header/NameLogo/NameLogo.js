import { useState, useEffect } from 'react';

export default function NameLogo() {
    const [isShown, setIsShown] = useState(false);
    const [light, setLight] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsShown(true), 1000);    
        setTimeout(() => setIsShown(false), 2000);   
     }, [])

    async function showLighBulbOnce() {
      
    }
    const lightBulb = () => {
        if (light) {
            return <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" fill="currentColor" className='inline-flex align-baseline' viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                </svg>
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" fill="currentColor"  className='inline-flex align-baseline' viewBox="0 0 16 16">
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
          </svg>
        }
    }
    return <div className={`fontCard font-semibold text-black cursor-pointer  text-4xl lg:text-4xl xl:text-5xl`}
        onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={() => setLight(!light)}>
        <span className="text-3xl opacity-70 ">{"<"}</span>
        <span>[{isShown ? lightBulb() : "RR"}]</span>
        <span className="text-3xl opacity-70">{"/>"}</span>
    </div>
}