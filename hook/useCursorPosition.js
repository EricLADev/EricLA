import {useEffect, useState} from 'react';

const useCursorPosition = () => {
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

    const updateMouseCursor = (e) => {
        setCursorPosition({x: e.clientX, y: e.clientY});
    }
    useEffect( () => {
        updateMouseCursor();
        window.addEventListener("mousemove", updateMouseCursor);
        return () => {window.removeEventListener("mousemove", updateMouseCursor)};
    }, []);

    return cursorPosition;
}

export default useCursorPosition;