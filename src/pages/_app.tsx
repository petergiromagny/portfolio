import React, { useEffect, useState } from "react";
import "styles/globals.scss";
import Image from "next/image";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// Import layouts
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import Loader from "components/elements/Loader";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [router.pathname]);

  return (
    <div className='page__container'>
      <Header />
      {/* <Loader /> */}
      <Component {...pageProps} />
      <Footer />
      <div
        className={`scroll__content ${
          isVisible ? "scroll__content--on" : "scroll__content--off"
        }`}
        onClick={scrollToTop}
      >
        <Image
          src='/svg/arrowScroll.svg'
          alt='Go to top'
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default MyApp;
