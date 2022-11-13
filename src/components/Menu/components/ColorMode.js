import React, { createContext, useState } from "react";

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => {},
    toogleMode: () => {}
})

export default function ColorModeProvider({children, ...props}){
    const {initialMode} = props;
    const [mode, setMode] = useState(initialMode);

    const toogleMode = () => {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark")
    }

    return <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toogleMode: toogleMode}}>
        {children}
    </ColorModeContext.Provider>
}