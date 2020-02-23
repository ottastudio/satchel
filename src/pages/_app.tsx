import { NextPage, NextComponentType, NextPageContext } from "next";
import { NextRouter } from "next/router";
import { AppProvider } from "../lib/context";

const App: NextPage<{
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
}> = ({ Component, pageProps, router }) => {
  return (
    <AppProvider>
      <Component {...pageProps} key={router.asPath} />

      <style jsx global>{`
        * {
          outline: none;
          box-sizing: border-box;

          font-family: "Courier New", Courier, monospace;
        }

        body {
          margin: 0;
          padding: 0;

          background-color: #252525;
          color: #d4d4d4;
          font-weight: 500;
        }
      `}</style>
    </AppProvider>
  );
};

export default App;
