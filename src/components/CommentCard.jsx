import { React, useState, useContext } from "react";
import { deleteCommentByCommentId } from "../api";
import { dateFormatterComment } from "../dateFormatter";
import { UserContext } from "../UserContext";

export const CommentCard = ({ comments, setComments, comment }) => {
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(false);
  const { username } = useContext(UserContext);
  const handleDelete = (comment_id, comment) => {
    setDeleteButtonDisabled(true);
    setComments(
      comments.filter((currentComment) => {
        return currentComment.comment_id !== comment_id;
      })
    );
    deleteCommentByCommentId(comment_id)
      .then(() => {
        setDeleteButtonDisabled(false);
      })
      .catch(() => {
        setDeleteButtonDisabled(false);
        alert("could not delete, please check your connection");
      });
  };
  return (
    <section className="comment" key={comments.comment_id}>
      <p className="comment-body">{comment.body} </p>
      <div className="comment-bar">
        <p className="comment-votes"> {comment.votes} Likes</p>
        <p className="comment-info">
          by {comment.author} at {dateFormatterComment(comment.created_at)}
        </p>
      </div>
      {username === comment.author && (
        <button
          className="comment-delete-button"
          onClick={() => {
            handleDelete(comment.comment_id);
          }}
          disabled={deleteButtonDisabled}
        >
          delete
        </button>
      )}
    </section>
  );
};
