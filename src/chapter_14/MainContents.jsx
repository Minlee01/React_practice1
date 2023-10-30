import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext); //themecontext에서 현재 설정 된 테마 값 받아화 실제 화면 에 콘텐츠 렌더링

    return (
        <div
            style = {{
                width: "100vw",
                height: "100vw",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 태마변경이 가능한 사이트입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button> 
        </div>
        //테마ㅏ 변경 버튼 누르면 toggle Theme 함수 호출->theme context 값 변경 (useContext Hook 사용)
    );
}

export default MainContent;