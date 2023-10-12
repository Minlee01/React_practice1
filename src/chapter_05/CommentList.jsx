import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"MinLee",
        comment:"Hi, this is Min",
    },
    {
        name:"Anonymous",
        comment:"hi how are you",
    },
    {
        name:"Person",
        comment:"hey",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;