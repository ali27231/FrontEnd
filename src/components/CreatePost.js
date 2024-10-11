import React, { useState } from 'react';

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onPostCreated(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <textarea
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        required
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default CreatePost;