import { useState } from "react";

const AddToCartButtons = ({ productId, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(productId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      className={`
        w-full py-3 px-4 rounded-lg font-semibold text-base transition-all duration-300
        ${added
          ? 'bg-green-500 hover:bg-green-600 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
        }
      `}
      onClick={handleClick}
    >
      {added ? '✓ Added to Cart!' : 'Add to Cart'}
    </button>
  );
}

export default AddToCartButtons;