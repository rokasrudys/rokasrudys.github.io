import Image from "next/image"
import { useState } from 'react'

export default function About() {

    let defaultJoke = { joke: "What do you call a dog on a beach holiday?", punch: "A HOT DOG!" };

    let [isFlipped, setFlipped] = useState(false);
    let [revealJoke, setRevealJoke] = useState(false);
    let [currentJoke, setCurrentJoke] = useState(defaultJoke)


    function getJoke() {
        return currentJoke.joke
    }

    function getPunchLine() {
        if (revealJoke) {
            return currentJoke.punch
        }
        return 'Click'
    }

    function newJoke() {
        setRevealJoke(false)

    }

    return <div className="flex lg:flex-row flex-col">
        <div className="mx-auto px-4">
            <div className="row -mb-6 mr-4 flex justify-end">
                <div className="fontCard text-white bg-black p-3 ">
                    I. About me
                </div>
            </div>
            <div className="border-4 pt-4 px-2 md:px-4 border-black rounded-lg bg-white bg-opacity-70">
                <div className="container mt-4 pb-10">
                    <div className={`card mx-auto w-11/12 lg:w-7/12 text-center cursor-pointer ${isFlipped ? "is-flipped" : null}`} onClick={() => { setFlipped(!isFlipped); newJoke(); }}>
                        <div className="card__face absolute card__face--front border-theme-accent-900 rounded-xl border-4 py-3 drop-shadow-lg bg-theme-accent-900 text-white hover-shake">
                            <h1 className="font-semibold w-full mx-auto">
                                <span className="block text-5xl font-bold mb-1">HELLO</span>
                                <span className="block">MY NAME IS</span>
                                <span className="text-5xl text-black fontCard my-4 block py-6 bg-white">Rokas Rudys</span>
                                <span className="md:text-2xl text-xl block">I create software solutions.</span>
                            </h1>
                            <div className="text-xs font-thin fontCard absolute top-0 right-0 border-b-2 -mr-1 -mb-1 px-4 py-2 rounded-bl-3xl">Flip for a Joke!</div>
                        </div>
                        <div className="card__face card__face--back mx-auto border-theme-accent-900 rounded-xl border-4 py-3 drop-shadow-lg bg-theme-accent-900">
                            <h1 className="font-semibold text-white p-4 rounded-3xl w-10/12 mx-auto">
                                <span className="block text-xl">{getJoke()}</span>
                                <span className={`block mt-4 rounded-xl text-3xl p-2 bg-opacity-85 transition duration-800 bg-white ${revealJoke ? 'bg-transparent text-white' : 'text-black'} font-bold mb-1`}
                                    onClick={(e) => { setRevealJoke(!revealJoke); e.stopPropagation() }}>{getPunchLine()}</span>
                            </h1>
                        </div>
                    </div>
                    <hr className="mx-auto w-1/2 my-4 border-6 rounded border-theme-accent-200" />
                    <div className="mx-auto text-2xl w-10/12">
                        <p className="pt-4">
                            I'm a <strong>full-stack developer</strong>, living in the UK, who enjoys creating (and designing) <strong>exceptional digital systems</strong> that scale.
                        </p>
                        <p className="mt-5">
                            Currently, I'm a <strong>Senior Software Engineer</strong> at the UK Driver and Vehicle Licensing Agency <strong>(DVLA)</strong>,
                            where I am developing a <strong>payment system</strong> that handles over <strong>£7 billion</strong> per year.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:-ml-32 lg:p-0 mx-auto mt-10 lg:mt-28 lg:rotate-6 transition duration-600 hover:scale-110 hover:brightness-105">
            <div className="border-black border-t-4 border-8 border-b-10 rounded-full bg-black drop-shadow-xl">
                <Image priority={false} className="rounded-full z-10" width="400" height="400" alt="Portrait image of Rokas Rudys" src="/assets/images/me/portrait.jpg" />
            </div>
            <div className="fontCard text-xl relative rounded-lg  text-white bg-black pt-4 pb-3 drop-shadow-lg mx-auto w-7/12 -mt-10 z-20 text-center">
                <span className="wave">
                    <span className="wave">👋</span>
                </span>
                {' '} this is me.
            </div>
        </div>
    </div>
}