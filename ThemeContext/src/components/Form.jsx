import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import { Footer } from "./Footer";

export function Form() {
    const storedValue = useContext(ThemeContext)
    console.log(storedValue)
    return (
        <div>
            <button onClick={() => {
                storedValue.handleClick()
            }}>theme change</button>
            <form onSubmit={(e)=>e.preventDefault()} style={storedValue.status ? storedValue.Theme.light : storedValue.Theme.dark}>
                <label htmlFor="">username</label>
                <input style={{marginLeft:"20px",padding:"10px",border:"none", backgroundColor:"grey" }} type="text" placeholder="Name" /><br />
                <label htmlFor="">password</label>
                <input style={{marginLeft:"20px",padding:"10px",marginTop:"20px",border:"none", backgroundColor:"grey"}} type="text" placeholder="password" /><br />
                <input style={{marginTop:"20px"}} type="submit" />
            </form>
            
            <Footer></Footer>
        </div>
    )
}