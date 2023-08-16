import { useEffect } from "react";

export const Quantifier = ({
  removeProductCallback,
  handleUpdateQuantity,
  productId,
}) => {
  const storedData = localStorage.getItem("cart");
  const parsedData = JSON.parse(storedData);
  const getQuantity = (data, id) => {
    const item = data[id];
    const itemQuantity = item.quantity;
    return itemQuantity;
  };
  const value = getQuantity(parsedData, productId);
  const reduce = () => {
    handleUpdateQuantity(productId, "decrease");
    if (value === 1) {
      removeProductCallback(productId);
    }
  };

  const increase = () => {
    handleUpdateQuantity(productId, "increase");
  };
  return (
    <div className="flex">
      <button
        value="-"
        onClick={reduce}
        className="w-8 mx-2 bg-[#ccc] rounded"
      >
        -
      </button>
      <input
        type="number"
        value={value}
        readOnly
        className="w-24 text-center border-2 border-solid border-[#ccc]"
      />
      <button
        value="+"
        onClick={increase}
        className="w-8 mx-2 bg-[#ccc] rounded"
      >
        +
      </button>
    </div>
  );
};
