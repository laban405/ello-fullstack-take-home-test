import { useQuery } from "@apollo/client";
import GET_BOOKS_DATA from "@/features/books/queries/books.query";
import { useEffect, useState } from "react";
import { Book } from "@/features/books/models/book.model";
import { useSnackbarContext } from "@/shared/components/SnackBar/SnackbarContext";

const useGetBooks = () => {
  const [booksResults, setBooksResults] = useState<Book[]>([]);
  const booksResponse = useQuery(GET_BOOKS_DATA);
  const { showSnackbar } = useSnackbarContext();

  const addToReadingList = (book: Book, index: number) => {
    const newResults = booksResults.map((book, i) => {
      if (i === index) {
        return { ...book, isInReadingList: true };
      }
      return book;
    });
    setBooksResults(newResults);
    showSnackbar(`You have added ${book.title} to reading list`);
  };

  const removeFromReadingList = (book: Book, index: number) => {
    const newResults = booksResults.map((book, i) => {
      if (i === index) {
        return { ...book, isInReadingList: false };
      }
      return book;
    });
    setBooksResults(newResults);
    showSnackbar(`You have removed ${book.title} from reading list`, "info");
  };

  useEffect(() => {
    if (booksResponse?.data?.books) {
      setBooksResults(booksResponse.data.books);
    }
  }, [booksResponse?.data?.books]);

  return {
    booksResults,
    removeFromReadingList,
    addToReadingList,
  };
};

export default useGetBooks;
