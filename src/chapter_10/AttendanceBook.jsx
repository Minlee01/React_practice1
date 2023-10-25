import React from "react";

const students = [//each child in list should have a unique key
    {
        id: 1,
        name: "Lilly",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jean",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>; //student id is used as key
                //return <li key={`student-id-${student.id}`}>{student.name}</li>; 키를 포매팅 된 문자열로 변경
            })}
        </ul>
    );
}

export default AttendanceBook;