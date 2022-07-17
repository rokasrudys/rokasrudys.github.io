export default function CloseButton(props) {

    return <button className={`flex p-1 text-xl drop-shadow shadow-lg font-extrabold border-4
    rounded-full text-black border-black bg-transparent hover:text-red-800 hover:border-red-800 hover:bg-white
    ${props.active? ' text-red-800 border-red-800 bg-white' : ''}`}

    onClick={props.onClick}>
    
       <svg viewBox="0 0 23 23" width="40" height="40" stroke="currentColor" fill="currentColor">
        <g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path></g>
       </svg>
       
    </button>
}