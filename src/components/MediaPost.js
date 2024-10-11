const MediaPost = ({ media }) => {
    return (
      <div className="media-post">
        {media.type === 'video' ? (
          <video src={media.url} controls />
        ) : (
          <img src={media.url} alt="Media" />
        )}
      </div>
    );
  };
  export default MediaPost;