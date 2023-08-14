import { useState } from "react";

export const Quantifier = ({
  removeProductCallback,
  handleUpdateQuantity,
  productId,
}) => {
  const [value, setValue] = useState(1);
  const reduce = () => {
    handleUpdateQuantity(productId, "decrease");

    setValue((prevState) => {
      const updatedValue = prevState - 1;
      if (updatedValue === 0) {
        removeProductCallback(productId);
      }
      return updatedValue;
    });
  };

  const increase = () => {
    handleUpdateQuantity(productId, "increase");
    setValue((prevState) => prevState + 1);
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
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
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
