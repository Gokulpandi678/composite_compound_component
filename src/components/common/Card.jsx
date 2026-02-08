const Card = ({ children }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {children}
    </div>
  );
}

export default Card