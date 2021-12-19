import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import ToogleSwitch from "./ToogleSwitch";


export function Dark() {
    const storedValue = useContext(ThemeContext)
    console.log(storedValue)
    return (
        <div>
            
            
            <div style={storedValue.status ? storedValue.Theme.light : storedValue.Theme.dark}>
                <div>
                    <h3>My Dashboard</h3>
                    <ToogleSwitch/>
                </div>
                <div>
                    <div>
                        <h3>Active User</h3>
                        <h4>Shubham Dobhal</h4>
                        <h4>Brijesh Jamloki</h4>
                        <h4>Dhruv Sharma</h4>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}