import { graphql } from "../__generated__";

export const GET_SMITHOORS = graphql(/* GraphQl */ `
  query leaderboard {
    gotchis(first: 200, orderBy: skillPoints, orderDirection: desc) {
      id
      __typename
      totalItemsForged
      totalItemsSmelted
      skillPoints
      smithingLevel
    }
  }
`);
