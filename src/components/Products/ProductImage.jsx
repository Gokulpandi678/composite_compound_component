const ProductImage = ({ src, alt }) => {
  return (
    <div className="w-full h-30 overflow-hidden rounded-lg mb-4">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
}

export default ProductImage;