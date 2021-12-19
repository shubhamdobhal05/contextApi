import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export function Footer() {
    const storedValue = useContext(ThemeContext)
    return (
        <div style={storedValue.status ? storedValue.Theme.light : storedValue.Theme.dark}>
            <p>This is the ThemeContext API</p>
        </div>
    )
}