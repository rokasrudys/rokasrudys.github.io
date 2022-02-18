import Link from 'next/link'
import { useState} from 'react';

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  
  return (
    <div className="flex h-screen w-screen">
      <div className='m-auto scale-150 cursor-help' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <div className="font-bold font-serf text-neutral-50 text-2xl"><span className="text-xl opacity-70">{"<"}</span>
        {isShown? "[RokasRudys]" : "[RR]"}
        <span className="text-xl opacity-70">{"/>"}</span></div>
      </div>
    </div>
  )
}
