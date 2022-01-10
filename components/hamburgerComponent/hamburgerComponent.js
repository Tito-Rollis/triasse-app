import { useState, useEffect, useContext } from 'react';
import { NavbarContext } from '../../context/navbarContext';
export default function HamburgerMenu() {
    const { toggle } = useContext(NavbarContext);
    const [clicked, setClicked] = useState(false);
    const [midDuration, setMidDuration] = useState('duration-1000');
    const [width, setWidth] = useState('w-1');
    const [hidden, setHidden] = useState('');
    const [topWidth, setTopWidth] = useState('w-2');
    const [topTransform, setTopTransform] = useState('');
    const [bottomWidth, setBottomWidth] = useState('w-2');
    const [bottomTransform, setBottomTransform] = useState('');
    const [color, setColor] = useState('bg-blue-200');
    const [z, setZ] = useState('');
    let clickHandler = (e) => {
        e.preventDefault();
        toggle();

        setClicked(!clicked);
    };

    useEffect(() => {
        document.onload = setWidth('w-6');
        document.onload = setTopWidth('w-6');
        document.onload = setBottomWidth('w-6');
        if (clicked) {
            setMidDuration('duration-300');
            setHidden('-translate-x-6');
            setTopTransform('rotate-45 translate-y-2');
            setBottomTransform('-rotate-45 -translate-y-2');
            setZ('z-50');
        }
        if (!clicked) {
            setHidden('');
            setTopTransform('');
            setBottomTransform('');
            setColor('bg-blue-200');
        }
    }, [clicked]);

    return (
        <button
            onClick={clickHandler}
            className={`box-border flex flex-col justify-between h-5 overflow-hidden z`}
        >
            <span
                className={`h-1 ${topWidth} ${topTransform} transform ${color}  ${z} z-50 rounded transition-all ${midDuration}`}
            ></span>
            <span
                className={`h-1 ${width} ${hidden} ${color} ${z} transform rounded transition-all ${midDuration}`}
            ></span>
            <span
                className={`h-1 ${bottomWidth} ${bottomTransform} transform ${color}  ${z} rounded transition-all ${midDuration}`}
            ></span>
        </button>
    );
}
