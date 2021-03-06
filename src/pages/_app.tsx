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
      <a className="skip-link" href="#container">
        Skip
      </a>
      <Header />
      <Component {...pageProps} key={router.asPath} />

      <style jsx global>{`
        @font-face {
          font-family: "Courier Prime";
          font-style: normal;
          src: local("Courier New"), local("Courier"),
            url("/static/courier_prime.woff2") format("woff2");
          font-display: swap;
        }

        :root {
          --prime-bg: #f5f5f5;
          --prime-cl: #000000;
          --accent-low: rgba(255, 255, 255, 0.1);
          --accent-hight: rgba(255, 255, 255, 0.3);
          --main-transition: 300ms cubic-bezier(1, 0, 0, 1);
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --prime-bg: #000000;
            --prime-cl: #f5f5f5;
            --accent-low: rgba(255, 255, 255, 0.3);
            --accent-hight: rgba(255, 255, 255, 0.6);
          }
        }
        @media (prefers-color-scheme: light) {
          :root {
            --prime-bg: #151515;
            --prime-cl: #d4d4d4;
            --accent-low: rgba(255, 255, 255, 0.2);
            --accent-hight: rgba(255, 255, 255, 0.4);
          }
        }
        * {
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
          transition: color var(--main-transition),
            background-color var(--main-transition), fill var(--main-transition);
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
          color: currentColor;
          background: none;
          font-size: inherit;
          text-decoration: none;
          height: 2rem;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0px 0.7rem;
          margin: 0rem 0.2rem 0.2rem 0rem;
          cursor: pointer;
          transition: border-radius var(--main-transition);
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
