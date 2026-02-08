import Card from "../common/Card";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import AddToCartButtons from "./AddToCartButtons";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);

  const discountedPrice = product.discount
    ? (product.price - (product.price * product.discount / 100)).toFixed(2)
    : product.price;

  const handleClick = () => {
    console.log(`Added product ${product.id} to cart`);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE */}
      <div className="w-full h-30 overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
        {product.name}
      </h3>

      {/* PRICE */}
      <div className="flex items-center gap-2 mb-2">
        {product.discount ? (
          <>
            <span className="text-sm text-gray-500 line-through">
              ${product.price}
            </span>
            <span className="text-2xl font-bold text-red-600">
              ${discountedPrice}
            </span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          </>
        ) : (
          <span className="text-2xl font-bold text-gray-800">
            ${product.price}
          </span>
        )}
      </div>

      {/* BUTTON */}
      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300 ${
          added
            ? "bg-green-500 text-white"
            : "bg-blue-600 text-white"
        }`}
        onClick={handleClick}
      >
        {added ? "✓ Added to Cart!" : "Add to Cart"}
      </button>

    </div>
  );
};

export default ProductCard;





// const ProductCard = ({ product }) => {
//   return (
//     <Card>
//       <ProductImage src={product.image} alt={product.name} />
//       <ProductTitle>{product.name}</ProductTitle>
//       <ProductPrice price={product.price} discount={product.discount} />
//       <AddToCartButtons
//         productId={product.id}
//         onAddToCart={(id) => console.log(`Added product ${id} to cart`)}
//       />
//     </Card>
//   );
// }

// export default ProductCard;