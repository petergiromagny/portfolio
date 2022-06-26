import React, { useEffect, useState, useCallback } from "react";
import "styles/globals.scss";
import Image from "next/image";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const router = useRouter();

  const scrollToTop = useCallback(() => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Method to send to GA screen changes
  const handleRouteChange = useCallback((url: string) => {
    (window as any).gtag("config", `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, {
      page_path: url,
    });
  }, []);

  // Display the icon "scroll to the top" according to scroll position
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  // Track screen changes with router events
  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.pathname, router.events, handleRouteChange]);

  return (
    <div className='page__container'>
      <Header />
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
