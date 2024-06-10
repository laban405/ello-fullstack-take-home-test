import { gql } from "@apollo/client";

const GET_BOOKS_DATA = gql`
  query BooksListQuery {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export default GET_BOOKS_DATA;
