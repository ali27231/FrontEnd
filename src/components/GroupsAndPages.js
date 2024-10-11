const GroupsAndPages = ({ groups }) => {
    return (
      <div className="groups-and-pages">
        <h3>Groups</h3>
        <ul>
          {groups.map((group, index) => (
            <li key={index}>{group.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default GroupsAndPages;