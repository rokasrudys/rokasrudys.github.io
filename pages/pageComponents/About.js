

export default function About() {
    return <div className="mx-2">
        <div className="row -mb-6 mr-4 flex justify-end">
            <div className="fontCard text-white bg-black p-3 ">
                I. About me
            </div>
        </div>
        <div className="border-4 p-8 border-black rounded-lg">
            <div className="container mt-4 pb-20">
                <h1 className="text-2xl font-bold text-slate-900">
                    <span className="wave">
                        <span className="wave">👋</span>
                        Hello!
                    </span>
                    {' '} my name is Rokas Rudys.
                </h1>
                <p></p>
            </div>
        </div>
    </div>
}