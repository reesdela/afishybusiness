import {useState, useEffect} from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        window.addEventListener('resize', () => setMatches(media.matches))
        setMatches(media.matches);
    }, [query])

    return matches;
}

export default useMediaQuery;