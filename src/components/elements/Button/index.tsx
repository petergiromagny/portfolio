import React, { FC } from "react";

interface Props {
  text: string;
}

const Index: FC<Props> = ({ text }) => {
  return <button className='button'>{text}</button>;
};

export default Index;
