import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./packages/nextjs/graphql/forge/__generated__/": {
      schema:
        "https://gateway.thegraph.com/api/dfe2756183a334f8d9b8d7ab6cd10dd9/subgraphs/id/2G8U427ty3XyMXhrWKUjopgy3Z5rXaC7jBpiL12XpAbY",
      documents: ["./packages/nextjs/graphql/forge/queries/*.ts"],
      preset: "client",
    },
    "./packages/nextjs/graphql/aavegotchis/__generated__/": {
      schema: "https://subgraph.satsuma-prod.com/tWYl5n5y04oz/aavegotchi/aavegotchi-core-matic/api",
      documents: ["./packages/nextjs/graphql/aavegotchis/queries/**/*.ts"],
      preset: "client",
    },
  },
};

export default config;
