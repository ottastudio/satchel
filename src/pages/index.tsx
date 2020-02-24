import { NextPage } from "next";
import Head from "next/head";
import useRequest from "../lib/hooks/useRequest";
import Main from "../components/Utils/Main";

const Index: NextPage<{}> = () => {
  const { data: users } = useRequest<
    [
      {
        _id: string;
        name: { first_name: string; last_name: string };
        gender: { name: string };
        email: string;
        subscribe: boolean;
      }
    ]
  >({ url: "/api/v1/users" });
  return (
    <Main>
      <Head>
        <title>Helo, I'm Satchel.</title>
        <meta name="description" content="Satchel is a bla bla bla..." />
      </Head>
      <ul style={{ paddingTop: 100, margin: 0 }}>
        {users?.map(
          ({
            _id,
            name: { first_name, last_name },
            email,
            gender: { name },
            subscribe
          }) => (
            <li key={_id} style={{ marginBottom: 20 }}>
              <div style={{ textTransform: "capitalize" }}>
                <span>{first_name}</span> <span>{last_name}</span>
              </div>
              <div>{email}</div>
              <div>{name}</div>
              <div>{subscribe ? "Subsciber" : "None subscriber"}</div>
            </li>
          )
        )}
      </ul>
    </Main>
  );
};

export default Index;
