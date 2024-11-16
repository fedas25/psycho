import { useEffect, useState } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const isClient = typeof window === 'object';

        if (!isClient) return;

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

export default useWindowWidth;