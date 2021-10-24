import React from "react";
import Head from "next/head";

const Index = () => {
  return (
    <Head>
      <title>Peter&apos;s Portfolio</title>
      <meta
        name='title'
        content="Peter's Portfolio — All you want to know about me"
      />
      <meta
        name='description'
        content='Let me introduce myself with my experiences, my skills and all the projects already accomplished'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://metatags.io/' />
      <meta
        property='og:title'
        content="Peter's Portfolio — All you want to know about me"
      />
      <meta
        property='og:description'
        content='Let me introduce myself with my experiences, my skills and all the projects already accomplished'
      />
      <meta
        property='og:image'
        content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
      />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://metatags.io/' />
      <meta
        property='twitter:title'
        content="Peter's Portfolio — All you want to know about me"
      />
      <meta
        property='twitter:description'
        content='Let me introduce myself with my experiences, my skills and all the projects already accomplished'
      />
      <meta
        property='twitter:image'
        content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
      />
      <link rel='icon' href='/favicon.ico' />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};

export default Index;
