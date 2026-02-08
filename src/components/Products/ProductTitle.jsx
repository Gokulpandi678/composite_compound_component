const ProductTitle = ({ children }) => {
  return (
    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
      {children}
    </h3>
  );
}
export default ProductTitle;