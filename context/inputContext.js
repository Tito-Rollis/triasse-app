import { createContext, useState } from 'react';

export const InputContext = createContext();

export function InputContextWrapper({ children }) {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    let [packet, setPacket] = useState([]);
    const addPacket = (data) => {
        if (packet.includes(data)) {
            return setPacket((prev) => [...prev]);
        } else {
            return setPacket((prev) => [...prev, data]);
        }
    };
    const removePacket = (data) =>
        setPacket(packet.filter((item) => item !== data));
    const deleteAll = () => setPacket([]);
    return (
        <InputContext.Provider
            value={{ show, toggle, packet, addPacket, removePacket, deleteAll }}
        >
            {children}
        </InputContext.Provider>
    );
}
