import { useEffect, useState } from "react";

export function useIsVisible(ref: React.MutableRefObject<Element | null>) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

export const animMyImage = (isVisible: boolean): string => {
    return isVisible ? "lg:translate-x-0 opacity-100" : "lg:-translate-x-full opacity-0 duration-0"
}

export const animFromBot = (isVisible: boolean): string => {
    return isVisible ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0 duration-0"
}

export const animFromRight = (isVisible: boolean): string => {
    return isVisible ? "translate-x-0 opacity-100" : "translate-x-[150%] opacity-0 duration-0"
}
export const animFromLeft = (isVisible: boolean): string => {
    return isVisible ? "translate-x-0 opacity-100" : "-translate-x-[150%] opacity-0 duration-0"
}

