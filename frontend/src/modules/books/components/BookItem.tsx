import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Book } from "../models/book.model";

export interface BookItemProps {
  book: Book;
  index: number;
  onRemoveBook: (book: Book, bookIndex: number) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, index, onRemoveBook }) => {
  return (
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
  );
};

export default BookItem;
