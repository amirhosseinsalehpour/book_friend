"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import BookList from "../_components/BookList";

export default function Shelf() {
  const personalShelf = useSelector((state) => state.books.personalShelf);

  const favoriteBooks = personalShelf.filter(
    (book) => book.status === "favorite"
  );
  const currentlyReadingBooks = personalShelf.filter(
    (book) => book.status === "currently reading"
  );
  const readBooks = personalShelf.filter((book) => book.status === "read");

  const [activeTab, setActiveTab] = useState("favorite");

  return (
    <div className="p-4 text-black">
      <h1 className="font-bold text-xl md:text-2xl mb-4">قفسه کتابخانه من</h1>

      <div className="bg-white rounded-lg shadow-md border border-gray-300 mb-4">
        <div className="flex justify-around">
          <button
            className={`py-2 px-4 whitespace-nowrap text-sm md:text-base ${
              activeTab === "favorite"
                ? "border-b-4 border-[#069F9F] text-[#069F9F]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("favorite")}
          >
            علاقه مندی
          </button>
          <button
            className={`py-2 px-4 whitespace-nowrap text-sm md:text-base ${
              activeTab === "currentlyReading"
                ? "border-b-4 border-[#069F9F] text-[#069F9F]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("currentlyReading")}
          >
            در حال مطالعه
          </button>
          <button
            className={`py-2 px-4 whitespace-nowrap text-sm md:text-base ${
              activeTab === "read"
                ? "border-b-4 border-[#069F9F] text-[#069F9F]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("read")}
          >
            خوانده شده
          </button>
        </div>
      </div>

      <div>
        {activeTab === "favorite" && (
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              علاقه مندی
            </h2>
            <BookList key="favorites" books={favoriteBooks} />
          </div>
        )}
        {activeTab === "currentlyReading" && (
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              در حال مطالعه
            </h2>
            <BookList key="currentlyReading" books={currentlyReadingBooks} />
          </div>
        )}
        {activeTab === "read" && (
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              خوانده شده
            </h2>
            <BookList key="read" books={readBooks} />
          </div>
        )}
      </div>
    </div>
  );
}
