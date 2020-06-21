import { useEffect } from 'react';

// Hook
export default function useOnClickOutside(ref: any, handler: any, closeOnEsc?: boolean) {
    useEffect(() => {
        const listener = (event: any) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            if (event.type === 'keydown') {
                if (!closeOnEsc || event.keyCode !== 27) {
                    // if close on Esc key is not required or Esc is not pressed
                    return;
                }
            }
            if (handler) {
                handler(event);
            }
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        document.addEventListener('keydown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('keydown', listener);
        };
    }, [ref, handler, closeOnEsc]);
}
