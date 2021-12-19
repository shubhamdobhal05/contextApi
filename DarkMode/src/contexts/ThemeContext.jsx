import { createContext,useState } from "react";
import {Theme} from "../style"
export const ThemeContext = createContext();


export const ThemeContextProvider = ({ children }) => {
    const [status,setStatus] = useState(true)
    const handleClick = () => {
        setStatus(status ? false : true)
    }
    return <ThemeContext.Provider value={{Theme,status,handleClick}}>{ children }</ThemeContext.Provider>
}
