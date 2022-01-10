import { createContext, useState } from 'react';

export const InputContext = createContext();

export function InputContextWrapper({ children }) {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    let [packet, setPacket] = useState([]);
    const addPacket = (packet) => {
        setPacket((prev) => [...prev, packet]);
    };
    const removePacket = (data) => packet.splice(packet.indexOf(data), 1);
    const deleteAll = () => setPacket([]);
    return (
        <InputContext.Provider
            value={{ show, toggle, packet, addPacket, removePacket, deleteAll }}
        >
            {children}
        </InputContext.Provider>
    );
}
