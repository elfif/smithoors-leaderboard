import { graphql } from "../__generated__";

export const GET_GOTCHIS_BY_ID = graphql(/* GraphQl */ `
  query gotchisById($ids: [ID!]) {
    aavegotchis(where: { id_in: $ids }) {
      id
      owner {
        id
      }
      originalOwner {
        id
      }
    }
  }
`);
