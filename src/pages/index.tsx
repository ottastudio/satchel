import { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Utils/Main";

const Index: NextPage<{}> = () => {
  return (
    <Main>
      <Head>
        <title>Helo, I'm Satchel.</title>
        <meta name="description" content="Satchel is a bla bla bla..." />
      </Head>
      Index
    </Main>
  );
};

export default Index;
