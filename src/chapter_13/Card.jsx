function Card(props) { //하위 컴포넌트 감ㅆ서 카드 형태로 보여주는 컴포넌트, containment, specialization모두 사용
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px, 0px, 4px, grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title &&<h1>{title}</h1>}
            {children}
        </div>

    );
}

export default Card; //범용적으로 재사용 가능한 컴포넌트, 이를 사용하여 프로필카드 컴포넌트 제작