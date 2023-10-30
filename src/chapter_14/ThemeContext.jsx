import React from "react";

const ThemeContext = React.createContext(); //context초기값 설정x, provider에서 설정
ThemeContext.displayName = "ThemeContext";//개발자도구로 context 이름 확인 위해

export default ThemeContext;