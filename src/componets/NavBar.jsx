const NavBar = (props) => {

const links = [
    { id: 1, text: 'CHARACTERS', url: '#', current: false },
    { id: 2, text: 'COMICS', url: '#', current: true },
    { id: 3, text: 'MOVIES', url: '#', current: false },
    { id: 4, text: 'TV', url: '#', current: false },
    { id: 5, text: 'GAMES', url: '#', current: false },
    { id: 5, text: 'COLLECTIBLES', url: '#', current: false },
    { id: 5, text: 'VIDEOS', url: '#', current: false },
    { id: 5, text: 'FANS', url: '#', current: false },
    { id: 5, text: 'NEWS', url: '#', current: false },
    { id: 5, text: 'SHOP', url: '#', current: false }
];

    return(
        <nav>
                <ul>

                    {
                        links.map((element) => {

                            const { id, text, url, current } = element;

                            return(
                                <li key={id}>
                                    <a className={ current ? 'active li-header' : 'li-header' } href={url}>
                                        {text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
    )
}

export default NavBar