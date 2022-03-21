import React from "react";
import Comment from "../components/Keun/Comment";
import COMMENT_LIST from "./commentData";
import "./Comment.scss";

function CommentList() {
  return (
    <div className="commentList">
      <h1>댓글</h1>
      <ul>
        {COMMENT_LIST.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
