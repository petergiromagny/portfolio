import React, { useCallback } from "react";
import { useRouter } from "next/router";
// Import components
import Button from "components/elements/Button";

const Error500: React.FC = () => {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
      router.back();
  }, [router]);

  return (
    <div className='error__container'>
      <div className='error__content'>
        <h1>An error 500 occurred on server</h1>
        <span className='circle__opacity circle__opacity--high'></span>
        <span className='circle__opacity circle__opacity--mid'></span>
        <span className='circle__opacity circle__opacity--low'></span>
      </div>
      <Button text='Go Back' onClick={handleGoBack} />
    </div>
  );
};

export default Error500;
