import React, { useState } from 'react';

const Post = ({ content }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="post">
      <p>{content}</p>
      <button onClick={handleLike}>
        ❤️ {likes} {likes === 1 ? 'Like' : 'Likes'}
      </button>
      
      <div>
        <h4>Comments:</h4>
        {comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
        
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Post;