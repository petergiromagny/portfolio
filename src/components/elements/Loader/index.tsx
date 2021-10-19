import React, { FC } from "react";

const Index: FC = () => {
  return (
    <div className='loader__content'>
      <span className='loader__opacity loader__opacity--high'></span>
      <span className='loader__opacity loader__opacity--mid'></span>
      <span className='loader__opacity loader__opacity--low'></span>
    </div>
  );
};

export default Index;
