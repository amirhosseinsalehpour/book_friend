"use client";

import { useSelector } from "react-redux";
import BookList from "./BookList";
import bookSVG from "./bookSVG.js";
import Image from "next/image";
export default function CurrentlyReadingBooks() {
  const currentlyReadingBooks = useSelector((state) =>
    state.books.personalShelf.filter(
      (book) => book.status === "currently reading"
    )
  );

  return currentlyReadingBooks.length > 0 ? (
    <BookList books={currentlyReadingBooks} />
  ) : (
    <div className="flex flex-col items-center py-5">
      <Image src="/E-Commerce04.svg" alt="book" width={204} height="203" />
      <p className="text-black">در حال حاضر کتابی در حال مطالعه ندارید</p>
    </div>
  );
}
