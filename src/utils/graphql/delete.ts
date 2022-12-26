import { gql } from "urql";

const DELETE_NOTE = gql`
  mutation deleteNote($id: uuid!) {
    delete_notes_by_pk(id: $id) {
        id
    }
  }
`;

export default DELETE_NOTE;
