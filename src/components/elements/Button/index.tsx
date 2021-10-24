import React, { FC } from "react";

interface Props {
  text: string;
  onClick?: (item?: string | number) => void;
}

const Index: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className='button'
      onClick={() => (onClick ? onClick() : undefined)}
    >
      {text}
    </button>
  );
};

export default Index;
