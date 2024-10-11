import React from 'react';

const Poll = ({ polls }) => {
  // بررسی اینکه آیا polls تعریف شده است و یک آرایه است
  if (!polls || !Array.isArray(polls)) {
    return <div>No polls available</div>; // نمایش پیام در صورت عدم وجود نظرسنجی
  }

  return (
    <div>
      {polls.map((poll) => (
        <div key={poll.id}>
          <h3>{poll.title}</h3>
          {/ سایر جزئیات نظرسنجی /}
        </div>
      ))}
    </div>
  );
};

export default Poll;