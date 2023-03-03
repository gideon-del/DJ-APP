import React from "react";
interface Props {
  children: React.ReactNode;
}
const Card: React.FC<Props> = (props) => {
  return (
    <div className="max-w-3xl rounded-xl p-8 w-full  flex flex-col justify-center gap-6 md:px-20">
      {props.children}
    </div>
  );
};

export default Card;
