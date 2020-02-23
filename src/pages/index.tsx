import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage<{}> = () => {
  return (
    <div>
      <Head>
        <title>Helo, I'm Satchel.</title>
        <meta name="description" content="Satchel is a bla bla bla..." />
      </Head>
      Index
    </div>
  );
};

export default Index;
