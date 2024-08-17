"use client";

import { PropsWithChildren } from "react";
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";

export const ApolloHoc = (props: PropsWithChildren) => {
  const coreLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_AAVEGOTCHI_SUBGRAPH,
  });

  const forgeLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_FORGE_SUBGRAPH,
  });

  const client = new ApolloClient({
    link: ApolloLink.split(operation => operation.getContext().clientName === "svg", forgeLink, coreLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
