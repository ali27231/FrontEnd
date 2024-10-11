
// فرض کنید این کامپوننت جدید برای ایجاد نظرسنجی است
import React, { useState } from 'react';

const CreatePoll = ({ onAddPoll }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPoll({ title }); // صدا زدن handleAddPoll
    setTitle(''); // خالی کردن فرم
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Poll Title"
      />
      <button type="submit">Create Poll</button>
    </form>
  );
};

export default CreatePoll;