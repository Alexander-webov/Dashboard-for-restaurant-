import { useEffect, useRef } from "react";

export function useOutsideClick(fn, listenCapturing = true) {
    const ref = useRef();

    useEffect(function () {
        function handelClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                fn();
            }
        }
        document.addEventListener("click", handelClick, listenCapturing);

        return removeEventListener("click", handelClick, listenCapturing);
    }, [fn, listenCapturing]);

    return ref;
}