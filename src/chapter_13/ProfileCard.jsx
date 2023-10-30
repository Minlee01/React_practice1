import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Name" backgroundColor="#4ea04e">
            <p>안녕하세요</p>
            <p>children값은 연습페이지 소개글입니다.</p>
        </Card>
    );
}

export default ProfileCard;