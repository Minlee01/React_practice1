import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContents";

function DarkOrLight(props) { //MainContent component를 자식으로 가지고 있음
    const [ theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if(theme == "light") {
            setTheme("dark");
        }else if (theme == "dark"){
            setTheme("liht");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}> 
            <MainContent/>
        </ThemeContext.Provider>
        //themecontext.provider로 감싸서 themecontext의 값을 하위 컴포넌트 들이 사용할 수 있도록 함 
    );
}

export default DarkOrLight;