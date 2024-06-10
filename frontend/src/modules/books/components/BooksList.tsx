import { FunctionComponent } from "react";
import { Book } from "@/modules/books/models/book.model";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import BookItem from "./BookItem";

export interface BooksListProps {
  books: Book[];
  onRemoveBook: (book: Book, bookIndex: number) => void;
}

const BooksList: FunctionComponent<BooksListProps> = ({
  books,
  onRemoveBook,
}) => {
  return (
    <Box sx={{ mt: 1.5, width: "100%" }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
        Reading List
      </Typography>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {books &&
          books.map((book, index) => {
            if (book.isInReadingList) {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <BookItem
                    book={book}
                    index={index}
                    onRemoveBook={onRemoveBook}
                  />
                </Grid>
              );
            }
          })}
      </Grid>
    </Box>
  );
};

export default BooksList;
