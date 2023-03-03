import React from "react";
interface Prop {
  children: React.ReactNode;
  color: "black" | "transparent";
}
const Button: React.FC<Prop> = (prop) => {
  return (
    <button
      className={`bg-${prop.color} border border-slate-400 px-3 py-2 rounded-md`}
    >
      {prop.children}
    </button>
  );
};

export default Button;
