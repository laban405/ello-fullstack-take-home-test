import { FunctionComponent } from "react";
import { Book } from "@/modules/books/models/book.model";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export interface BooksListProps {
  books: Book[];
  onRemoveBook: (book: Book, bookIndex: number) => void;
}

const BooksList: FunctionComponent<BooksListProps> = ({
  books,
  onRemoveBook,
}) => {
  return (
    <Box sx={{mt: 1.5,width: "100%"}}>
    <Typography variant="h4" sx={{fontWeight:600}}  gutterBottom>Reading List</Typography>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {books &&
          books.map((book, index) => {
            if (book.isInReadingList) {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={book.coverPhotoURL}
                      alt={book.title}
                    />
                    <CardContent sx={{ pb: 0, flex: 1 }}>
                      <Typography variant="h6" component="div">
                        {book.title}
                      </Typography>
                      <Typography sx={{ mb: 0 }} color="text.secondary">
                        {book.author}
                      </Typography>
                    </CardContent>

                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Button
                      disableElevation
                        sx={{ borderRadius: "20px" }}
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => onRemoveBook(book, index)}
                      >
                        Remove From Reading List
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            }
          })}
      </Grid>
    </Box>
  );
};

export default BooksList;
