import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { GET_SMITHOORS } from "~~/graphql/forge/queries/smithoors";

const Home: NextPage = () => {
  const smithoors = useQuery(GET_SMITHOORS);

  return (
    <>
      Hello Smithoors
      <ul>{smithoors.data?.gotchis.map(gotchi => <li key={gotchi.id}>{gotchi.skillPoints}</li>)}</ul>
    </>
  );
};

export default Home;
