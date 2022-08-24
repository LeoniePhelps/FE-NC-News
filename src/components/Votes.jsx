import { React, useState } from "react";
import { TbHeartPlus } from "react-icons/tb";
import { TbHeartMinus } from "react-icons/tb";
import { patchVotesByArticleId } from "../api";

export const Votes = ({ article_id, optimisticVotes, setOptimisticVotes }) => {
  const [voteError, setVoteError] = useState(false);

  const handleUpVote = () => {
    setOptimisticVotes(optimisticVotes + 1);
    patchVotesByArticleId(article_id, 1)
      .then(setVoteError(false))
      .catch(() => {
        setOptimisticVotes((currentVotes) => currentVotes - 1);
        setVoteError(true);
      });
  };
  const handleDownVote = () => {
    setOptimisticVotes(optimisticVotes - 1);
    patchVotesByArticleId(article_id, -1)
      .then(setVoteError(false))
      .catch(() => {
        setOptimisticVotes((currentVotes) => currentVotes + 1);
        setVoteError(true);
      });
  };

  return (
    <section>
      <h3>{optimisticVotes}</h3>
      {voteError && <p>Something went wrong, please try again.</p>}
      <button onClick={handleUpVote}>
        <TbHeartPlus />
      </button>
      <button onClick={handleDownVote}>
        <TbHeartMinus />
      </button>
    </section>
  );
};
