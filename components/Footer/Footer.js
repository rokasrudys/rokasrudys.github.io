import { useEffect, useState } from 'react';

export default function Footer(props) {
    const [gitHubInfo, setGitHubInfo] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/rokasrudys/rokasrudys.github.io')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    const stars = <svg aria-hidden="true" viewBox="0 0 16 16" height="0.8em" fill="currentColor" className='inline-flex align-baseline'>
        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
    </svg>
    const forks = <svg aria-hidden="true" viewBox="0 0 16 16" data-view-component="true" height="0.8em" fill="currentColor" className='inline-flex align-baseline' >
        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
    </svg>
    return <footer className="bg-black py-10 mt-20 text-sm text-white text-center fontCard">
        <div className='hover:text-theme-accent-200  hover:scale-105'>
            <a href={'https://github.com/rokasrudys/rokasrudys.github.io'} className='container'>
                Designed & Developed by @RokasRudys
                <div className='stroke-white mt-2'>
                    <span> {stars} {gitHubInfo ? gitHubInfo.stars : '???'}</span>
                    <span className='ml-4'> {forks} {gitHubInfo ? gitHubInfo.forks : '???'}</span>
                </div>
            </a>
        </div>
    </footer>
}