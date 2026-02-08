const ProductPrice = ({ price, discount }) => {
  const discountedPrice = discount
    ? (price - (price * discount / 100)).toFixed(2)
    : price;

  return (
    <div className="flex items-center gap-2 mb-2">
      {discount ? (
        <>
          <span className="text-sm text-gray-500 line-through">
            ${price}
          </span>
          <span className="text-2xl font-bold text-red-600">
            ${discountedPrice}
          </span>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        </>
      ) : (
        <span className="text-2xl font-bold text-gray-800">
          ${price}
        </span>
      )}
    </div>
  );
}

export default ProductPrice;