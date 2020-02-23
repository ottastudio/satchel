import { NextPage } from "next";
import Head from "next/head";
import Main from "../../components/Utils/Main";

const Product: NextPage<{}> = () => {
  return (
    <Main>
      <Head>
        <title>All Products</title>
        <meta name="description" content="Satchel is a bla bla bla..." />
      </Head>
      Product
    </Main>
  );
};

export default Product;
