import React, { useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; //최대 카운트 개수

function Accommodate(props) { //Accommodate 리엑트 컴포넌트 ->useCount 훅 사용하여 카운트 관리
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => { //의존성x, 컴포넌트 마운트 직후 호출, 컴포넌트 업데이트마다 호출
        console.log("==================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => { //의존성 o, 컴포넌트 마운트 직후 호출, 카운트값 바뀔때마다 호출
        setIsFull(count>= MAX_CAPACITY); //카운트수 초과
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16}}>
            <p>{`총 ${count} 명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red"}}> 정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;