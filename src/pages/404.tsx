import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// Import components
import Button from "components/elements/Button";

const Index: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className='error__container'>
      <div className='error__content'>
        <h1>404 error</h1>
        <span className='circle__opacity circle__opacity--high'></span>
        <span className='circle__opacity circle__opacity--mid'></span>
        <span className='circle__opacity circle__opacity--low'></span>
      </div>
      <Button text='Go Back' onClick={handleGoBack} />
    </div>
  );
};

export default Index;
