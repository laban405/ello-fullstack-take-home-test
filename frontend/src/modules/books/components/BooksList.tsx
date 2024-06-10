import { FunctionComponent } from "react";
import { Book } from "../models/book.model";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import getLastDigit from "../../../shared/utils/last-digit";

export interface BooksListProps {
  books: Book[];
  onRemoveBook: (book: Book, bookIndex: number) => void;
}

const BooksList: FunctionComponent<BooksListProps> = ({
  books,
  onRemoveBook,
}) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 1.5, width: "100%" }}>
        {books &&
          books.map((book, index) => (
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
                  image={`../assets/image${getLastDigit(index) + 1}.webp`}
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
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => onRemoveBook(book, index)}
                  >
                    Remove From Reading List
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default BooksList;
