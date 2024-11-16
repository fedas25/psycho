import { useEffect, useState, useRef } from "react";

const useObserver = () => {
    const [activeElements, setActiveElements] = useState(new Set());
    const elementsRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);

                        setActiveElements((prev) => new Set(prev).add(index));

                        observer.unobserve(entry.target)
                    }
                })
            }, {
            rootMargin: '0px 0px -50% 0px'
        })

        elementsRefs.current.forEach((el) => {
            observer.observe(el)
        })
    }, [])

    return [elementsRefs, activeElements]
}

export default useObserver