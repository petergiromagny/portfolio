import React from 'react';

interface Props {
  text: string;
}

const Index = ({ text }: Props) => {
  return <button className='button'>{text}</button>;
};

export default Index;
