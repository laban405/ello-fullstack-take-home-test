import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Book } from "../models/book.model";
import React from "react";

export interface BookItemProps {
  book: Book;
  index: number;
  onRemoveBook: (book: Book, bookIndex: number) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, index, onRemoveBook }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (book?: Book, index?: number) => {
    if (book) {
      onRemoveBook(book, index ?? 0);
    }
    setOpen(false);
  };
  return (
    <>
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
            {`by ${book.author}`}
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
            onClick={() => handleClickOpen()}
          >
            Remove From Reading List
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="remove-book-from-reading-list"
        aria-describedby="remove-book-from-reading-list"
      >
        <DialogTitle id="remove-book-from-reading-list-title" color={'primary.dark'}>
          {`Remove ${book.title} from reading list?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="remove-book-from-reading-lis-description">
            {`By clicking Remove, ${book.title} will be removed from the reading list`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button onClick={() => handleClose(book, index)} autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookItem;
