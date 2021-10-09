import React, { FC } from "react";

interface Props {
  text: string;
}

const Index: FC<Props> = ({ text }) => {
  return (
    <div className='tag__content'>
      <p>{text}</p>
    </div>
  );
};

export default Index;
