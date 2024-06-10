import { FunctionComponent } from "react";
import useGetBooks from "@/modules/books/hooks/useGetBooks";
import BooksList from "@/modules/books/components/BooksList";
import EmptyComponent from "@/shared/components/EmptyComponent/EmptyComponent";
import BooksSearchInput from "@/modules/books/components/BooksSearchInput";

export interface BooksPageProps {}

const BooksPage: FunctionComponent<BooksPageProps> = () => {
  const { booksResults, removeFromReadingList, addToReadingList } =
    useGetBooks();

  return (
    <>
      <BooksSearchInput options={booksResults} onAddBook={addToReadingList} />
      {booksResults.filter((book) => book.isInReadingList === true).length >
      0 ? (
        <BooksList books={booksResults} onRemoveBook={removeFromReadingList} />
      ) : (
        <EmptyComponent message="You do not have any books in your reading list. Please search and add a book from the search input above" />
      )}
    </>
  );
};

export default BooksPage;
