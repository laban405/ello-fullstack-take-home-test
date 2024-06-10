import { useQuery } from "@apollo/client";
import GET_BOOKS_DATA from "../queries/books.query";
import { useEffect, useState } from "react";
import { Book } from "../models/book.model";
import { useSnackbarContext } from "../../../shared/components/SnackBar/SnackbarContext";

const useGetBooks = () => {
  const [booksResults, setBooksResults] = useState<Book[]>([]);
  const [filteredBooksResults, setFilteredBooksResults] = useState<Book[]>([]);
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
    console.log('index',index);
    
    const newResults = booksResults.map((book, i) => {
      if (i === index) {
        return { ...book, isInReadingList: false };
      }
      return book;
    });
    setBooksResults(newResults);
    showSnackbar(`You have removed ${book.title} from reading list`, "info");
  };

  const filterBooks = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredBooksResults(booksResults);
    } else {
      setFilteredBooksResults(
        booksResults.filter((book: Book) => book.title.includes(searchTerm))
      );
    }
  };

  useEffect(() => {
    if (booksResponse?.data?.books) {
      setFilteredBooksResults(booksResponse.data.books);
      setBooksResults(booksResponse.data.books);
    }
  }, [booksResponse?.data?.books]);

  return {
    booksResults,
    filteredBooksResults,
    removeFromReadingList,
    addToReadingList,
    filterBooks,
  };
};

export default useGetBooks;
