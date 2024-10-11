const ImageGallery = ({ images }) => {
    return (
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} />
        ))}
      </div>
    );
  };
  export default ImageGallery;