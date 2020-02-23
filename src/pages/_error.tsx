import { NextPage, NextPageContext } from "next";
import Head from "next/head";

const Error: NextPage<{ statusCode: number | undefined }> = ({
  statusCode
}) => {
  const messages = statusCode
    ? statusCode === 404
      ? `${statusCode} Page not found.`
      : `${statusCode} Server error.`
    : "Client error.";

  return (
    <div>
      <Head>
        <title>{messages}</title>
      </Head>
      <p>
        <b>{messages}</b>
      </p>

      <style jsx>{`
        div {
          position: relative;
          height: 100vh;
          width: 100vw;
          pointer-events: none;
        }
        p {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 320px;
          transform: translate(-50%, -50%);
          text-align: center;
          font-size: 2.5rem;
          line-height: 1;
        }
      `}</style>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
