import { useEffect, useState } from 'react';

export default function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

export function useMedia(queries, values, defaultValue) {
    const mediaQueryLists = queries.map(q => window.matchMedia(q));
    const getValue = () => {
        const index = mediaQueryLists.findIndex(mql => mql.matches);
        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(
        () => {
            const handler = () => setValue(getValue);
            mediaQueryLists.forEach(mql => mql.addListener(handler));

            return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    );

    return value;
}
