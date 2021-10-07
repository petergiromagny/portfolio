import React, { FC } from "react";
import Image from "next/image";
// Import components
import Button from "../Button";

interface Props {
  id?: number;
  name?: string;
  intro?: string;
  image?: string;
  openProject?: boolean;
}

const Index: FC<Props> = ({ id, name, intro, image, openProject = false }) => {
  if (openProject) {
    return (
      <div className='project__card project__card--more'>
        <span>Don&apos;t keep the suspense alive</span>
        <Button text='See more' />
      </div>
    );
  }

  return (
    <div className='project__card'>
      <div className='card__header'>
        <h3>Feu Official</h3>
      </div>
      <div className='card__body'>
        <div className='text'>
          <p>
            I created this brand of street-wear along with 2 childhood friends 3
            years ago. We closed our brand, because we didn’t have time to
            manage it with our studies. This website was made with Prestashop.
          </p>
        </div>
        <div className='preview'>
          <Image
            src='/svg/previews/lpcar.svg'
            alt='Feu official'
            width={400}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
