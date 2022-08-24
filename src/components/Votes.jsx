import { React, useState } from "react";
import { TbHeartPlus } from "react-icons/tb";
import { TbHeartMinus } from "react-icons/tb";
import { patchVotesByArticleId } from "../api";

export const Votes = ({ article_id, optimisticVotes, setOptimisticVotes }) => {
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);
  const [voteError, setVoteError] = useState(false);

  const handleUpVote = () => {
    setOptimisticVotes(optimisticVotes + 1);
    setDisableUpVote(true);
    setDisableDownVote(false);
    patchVotesByArticleId(article_id, 1)
      .then(setVoteError(false))
      .catch(() => {
        setOptimisticVotes((currentVotes) => currentVotes - 1);
        setVoteError(true);
      });
  };
  const handleDownVote = () => {
    setOptimisticVotes(optimisticVotes - 1);
    setDisableDownVote(true);
    setDisableUpVote(false);
    patchVotesByArticleId(article_id, -1)
      .then(setVoteError(false))
      .catch(() => {
        setOptimisticVotes((currentVotes) => currentVotes + 1);
        setVoteError(true);
      });
  };

  return (
    <section>
      <h3 className="votes">{optimisticVotes}</h3>
      {voteError && <p>Something went wrong, please try again.</p>}
      <div className="vote-buttons">
        <button
          className="up-button"
          onClick={handleUpVote}
          disabled={disableUpVote}
        >
          <TbHeartPlus />
        </button>
        <button
          className="down-button"
          onClick={handleDownVote}
          disabled={disableDownVote}
        >
          <TbHeartMinus />
        </button>
      </div>
    </section>
  );
};
