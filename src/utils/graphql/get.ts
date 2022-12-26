import { gql } from "urql";

const GET_NOTES = gql`
  query {
    notes {
      __typename
      id
      created_at
      title
    }
  }
`;

export default GET_NOTES;
