import { gql } from "urql";

const INSERT_NOTE = gql`
  mutation insertNote($note: notes_insert_input!) {
    insert_notes_one(object: $note) {
      __typename
      title
    }
  }
`;

export default INSERT_NOTE;
