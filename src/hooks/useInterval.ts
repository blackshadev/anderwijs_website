import { useRef, useEffect } from 'react';

export default function useInterval<T extends () => void>(
    callback: T,
    delay: number,
): void {
    const savedCallback = useRef<T>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
