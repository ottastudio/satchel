import { NextPage, NextComponentType, NextPageContext } from "next";
import { NextRouter } from "next/router";
import { AppProvider } from "../lib/context";
import Header from "../components/Utils/Header";

const App: NextPage<{
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
}> = ({ Component, pageProps, router }) => {
  return (
    <AppProvider>
      <a className="skip-link" href="#">
        Skip
      </a>
      <Header />
      <Component {...pageProps} key={router.asPath} />

      <style jsx global>{`
        @font-face {
          font-family: "Courier Prime";
          src: url("/static/courier_prime.woff2");
          font-style: normal;
        }

        :root {
          --prime-bg: #f5f5f5;
          --prime-cl: #000000;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --prime-bg: #000000;
            --prime-cl: #f5f5f5;
          }
        }
        @media (prefers-color-scheme: light) {
          :root {
            --prime-bg: #f5f5f5;
            --prime-cl: #000000;
          }
        }
        * {
          outline: none;
          box-sizing: border-box;

          font-family: "Courier Prime", Courier New, Courier, monospace;
        }

        body {
          margin: 0;
          padding: 0;

          background-color: var(--prime-bg);
          color: var(--prime-cl);
          font-weight: 500;

          position: relative;
          min-height: 100vh;

          transition: color, background-color, fill,
            300ms cubic-bezier(1, 0, 0, 1);
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 0px;
          z-index: 100;
        }
        .skip-link:focus {
          top: 0px;
        }

        .main-link {
          border: 1px solid;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
          text-decoration: none;
          padding: 0px 0.7rem;
          margin: 0rem 0.2rem 0.2rem 0rem;
          cursor: pointer;
          transition: border-radius 300ms cubic-bezier(1, 0, 0, 1);
        }
        .main-link_active,
        .main-link:hover {
          border-radius: 5rem;
        }
      `}</style>
    </AppProvider>
  );
};

export default App;
