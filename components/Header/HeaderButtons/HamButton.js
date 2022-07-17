
export default function HamButton(props) {

    return <button className="p-1 bg-transparent 
      text-black hover:text-theme-accent-500 z-50"
        onClick={props.onClick} >
        <svg viewBox="0 0 100 80" width="35" height="35" stroke="currentColor" fill="currentColor">
            <rect width="75" height="20"></rect>
            <rect y="30" width="90" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
        </svg>
    </button>
}

