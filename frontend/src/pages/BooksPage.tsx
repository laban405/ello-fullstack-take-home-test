import { FunctionComponent } from "react";
import { Book } from "../modules/books/models/book.model";
import useGetBooks from "../modules/books/hooks/useGetBooks";
import BooksList from "../modules/books/components/BooksList";
import SearchInput from "../modules/books/components/SearchInput";
import EmptyComponent from "../shared/components/EmptyComponent/EmptyComponent";

export interface BooksPageProps {}

const BooksPage: FunctionComponent<BooksPageProps> = () => {
  const {
    booksResults,
    removeFromReadingList,
    filterBooks,
    addToReadingList,
  } = useGetBooks();
  const handleSearch = (searchTerm: string) => {
    filterBooks(searchTerm);
  };
  return (
    <>
      <SearchInput
        onSearch={handleSearch}
        debounceTime={300}
        options={booksResults}
        onAddBook={addToReadingList}
      />
      {booksResults.filter((book) => book.isInReadingList === true).length > 0 ? (
        <BooksList
          books={booksResults.filter((book) => book.isInReadingList === true)}
          onRemoveBook={removeFromReadingList}
        />
      ) : (
        <EmptyComponent message="You do not have any books in your reading list. Please search and add a book from the search input above" />
      )}
    </>
  );
};

export default BooksPage;
