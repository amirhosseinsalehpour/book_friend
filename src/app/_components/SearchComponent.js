"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { addBook } from "../_redux/bookSlice";
import { useDispatch } from "react-redux";
import { searchBooksAPI } from "../lib/searchBooksAPI";

export default function SearchComponent({
  initialBooks,
  initialTitle,
  initialAuthor,
}) {
  const [titleQuery, setTitleQuery] = useState(initialTitle);
  const [authorQuery, setAuthorQuery] = useState(initialAuthor);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks || []);
  const [isSearching, setIsSearching] = useState(false);
  const [addingBookId, setAddingBookId] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSearching) {
      const fetchBooks = async () => {
        try {
          const books = await searchBooksAPI(titleQuery, authorQuery);
          if (books.error) {
            throw new Error(books.message);
          }
          setFilteredBooks(books);
          setErrorMessage(null);
        } catch (error) {
          setErrorMessage(error.message || "An unexpected error occurred.");
        } finally {
          setIsSearching(false);
        }
      };
      fetchBooks();
    }
  }, [isSearching, titleQuery, authorQuery]);

  const handleSearch = () => {
    setHasSearched(false);
    setIsSearching(true);
    setHasSearched(true);
  };

  const handleAddBook = async (book) => {
    setAddingBookId(book.key);

    const newBook = {
      title: book.title,
      author: book.author_name ? book.author_name[0] : "Unknown Author",
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "/default-book-cover.jpg",
      id: book.key,
      status: "currently reading",
    };

    await new Promise((resolve) => setTimeout(resolve, 300));

    dispatch(addBook(newBook));

    setAddingBookId(null);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={titleQuery}
        onChange={(e) => setTitleQuery(e.target.value)}
        placeholder="جست و جو بر اساس عنوان..."
        className="border p-2 mb-4 w-full text-black"
      />
      <input
        type="text"
        value={authorQuery}
        onChange={(e) => setAuthorQuery(e.target.value)}
        placeholder="جست و جو بر اساس نویسنده..."
        className="border p-2 mb-4 w-full text-black"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        جست و جو
      </button>

      {isSearching && (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      {!isSearching && errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}

      {!isSearching && filteredBooks.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => (
            <li
              key={book.key}
              className="shadow-lg p-5 bg-slate-300 rounded-lg"
            >
              <div className="w-full h-48 flex justify-center items-center">
                <Image
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                      : "/default-book-cover.jpg"
                  }
                  alt={`${book.title} cover`}
                  width={128}
                  height={192}
                  objectFit="cover"
                  loading="lazy"
                  className="rounded"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg text-black text-center font-semibold">
                  {book.title}
                </h3>
                <p className="text-black text-center">
                  نویسنده:{" "}
                  {book.author_name ? book.author_name[0] : "Unknown Author"}
                </p>
                <button
                  onClick={() => handleAddBook(book)}
                  className="bg-green-500 text-white py-2 px-4 rounded mt-2 w-full relative flex justify-center items-center"
                  disabled={addingBookId === book.key}
                >
                  {addingBookId === book.key ? (
                    <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6"></div>
                  ) : (
                    "افزودن به قفسه من"
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* {!isSearching && hasSearched && filteredBooks.length === 0 && (
        <p className="text-black">کتاب مدنظر یافت نشد.</p>
      )} */}
    </div>
  );
}
