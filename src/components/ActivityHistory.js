const ActivityHistory = ({ activities }) => {
    return (
      <div className="activity-history">
        <h3>Activity History</h3>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity.description}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default ActivityHistory;