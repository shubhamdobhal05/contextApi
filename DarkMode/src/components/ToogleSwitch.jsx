import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import "./ToogleSwitch.css";




const ToggleSwitch = ({ label }) => {
    const storedValue = useContext(ThemeContext)
return (
	<div>
        
            <label class="switch">
            <input type="checkbox" onClick={() => {
                storedValue.handleClick()
            }}/>
            <span class="slider round"></span>
            </label>
	
	
	</div>
);
};

export default ToggleSwitch;
