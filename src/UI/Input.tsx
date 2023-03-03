import React from "react";
interface Props {
  type: string;
  name: string;
  id: string;
}
const Input: React.FC<Props> = ({ id, name, type }) => {
  return (
    <input
      type={type}
      name={name}
      className="max-w-xl mx-auto font-normal rounded-md border border-primaryBlack w-full focus-visible:outline-none focus-within:px-4 py-1 px-4"
      id={id}
      placeholder={`Enter your ${name}`}
    />
  );
};

export default Input;
