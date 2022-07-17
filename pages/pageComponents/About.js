

export default function About() {
    return <div className="mx-2">
        <div className="row -mb-6 mr-4 flex justify-end">
            <div className="fontCard text-white bg-black p-3 ">
                I. About me
            </div>
        </div>
        <div className="border-4 p-2 md:p-4 border-black rounded-lg bg-white bg-opacity-70">
            <div className="container mt-4 pb-20">
                <div className="mx-auto xl:w-5/12 lg:w-6/12 md:w-8/12 sm:w-full text-center border-theme-accent-900 rounded-xl border-4 py-3 drop-shadow-lg bg-theme-accent-900 text-white">
                    <h1 className="text-xl font-semibold">
                        <span className="block text-5xl font-bold mb-1">HELLO</span>
                        <span className="block">MY NAME IS</span>
                        <span className="md:text-6xl text-4xl text-black fontCard my-4 block py-6 bg-white">Rokas Rudys</span>
                        <span className="md:text-2xl text-xl block">I create software solutions.</span>
                    </h1>
                </div>
                <hr className="mx-auto w-1/2 mt-4 border-3 rounded border-theme-accent-200" />
                <div className="text-xl font-semibold mt-10 text-center text-3xl">
                    {/* <p className="">
                        I'm a software engineer.
                    </p>
                    <br />
                    <p>
                        Currently I am employed at the Driver and Vehicle Licensing Agency (DVLA) as a HEO Software Engineer,
                        working as a member of the payments team, where we handle over £7 billion a year.
                    </p> */}
                    I'm still currently constructing this site.
                </div>
            </div>
        </div>
    </div>
}