import { FunctionComponent } from "react";
import { Book } from "@/features/books/models/book.model";
import { Box, Grid, Typography } from "@mui/material";
import BookItem from "./BookItem";

export interface BooksListProps {
  books: Book[];
  onRemoveBook: (book: Book, bookIndex: number) => void;
}

const BooksList: FunctionComponent<BooksListProps> = ({
  books,
  onRemoveBook,
}) => {
  const booksInReadingList = books.filter((book) => book.isInReadingList);
  return (
    <Box sx={{ margin: "auto" }}>
      <Typography color={'primary.dark'} variant="h5" sx={{ mt: 2, fontWeight: 600 }} gutterBottom>
        Reading List{`(${booksInReadingList.length})`}
      </Typography>
      <Grid container spacing={2}>
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
